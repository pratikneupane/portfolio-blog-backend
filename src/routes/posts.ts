import express from "express";
import { getAllPosts, createPost, getPostById, updatePostById, deletePostById } from "../controllers/postController";

const router = express.Router();

// GET all posts
router.get('/', getAllPosts);

// GET single post by id
router.get('/:id', getPostById);

// POST create a new post
router.post('/', createPost);

// PUT update a post by id
router.put('/:id', updatePostById);

// DELETE delete a post by id
router.delete('/:id', deletePostById);

export default router;
