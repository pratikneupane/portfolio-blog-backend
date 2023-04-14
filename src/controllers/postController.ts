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

// GET a post by id
export const getPostById = async (req: Request, res: Response) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.json(post);
  } catch (err: any) {
    console.error(err.message);
    if (err.kind === "ObjectId") {
      return res.status(404).json({ msg: "Post not found" });
    }
    res.status(500).send("Server Error");
  }
};

// PUT update post by ID
export const updatePostById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { imageUrl, title, content } = req.body;

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { imageUrl, title, content },
      { new: true }
    );

    if (!updatedPost) {
      return res.status(404).json({ msg: "Post not found" });
    }

    res.json(updatedPost);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

// DELETE post by id

export const deletePostById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);

    if (!post) {
      return res.status(404).json({ msg: "Post not found" });
    }

    await Post.deleteOne({ _id: id });
    res.json({ msg: "Post deleted" });
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
