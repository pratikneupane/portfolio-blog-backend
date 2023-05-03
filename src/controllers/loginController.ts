import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/user";
import dotenv from "dotenv";
dotenv.config();

const loginController = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    // Compare the password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    // Generate a JWT token with the user ID and email as payload
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET!
    );
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export default loginController;
