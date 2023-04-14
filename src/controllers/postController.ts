import { Request, Response } from "express";
import Post from "../models/post";

// GET all posts
export const getAllPosts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// POST a new post
export const createPost = async (req: Request, res: Response) => {
  try {
    const { imageUrl, title, content } = req.body;

    const newPost = new Post({
      imageUrl,
      title,
      content,
    });

    const post = await newPost.save();

    res.json(post);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
