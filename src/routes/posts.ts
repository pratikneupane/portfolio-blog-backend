import express from "express";
import { getAllPosts, createPost } from "../controllers/postController";

const router = express.Router();

// GET all posts
router.get("/", getAllPosts);
// POST a new post
router.post("/", createPost);

export default router;
