import express from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user.js";
import dotenv from "dotenv";
dotenv.config();

const registerController = async (
  req,
  res
) => {
  try {
    const { name, email, password } = req.body;
    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email already exists" });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user object
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({error: error});
  }
};


export default registerController;