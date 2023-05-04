import express from "express";
import { getAllPosts, createPost, getPostById, updatePostById, deletePostById } from "../controllers/postController.js";
import verifyToken from "../middleware/auth.js";

const router = express.Router();

// GET all posts
router.get('/', getAllPosts);

// GET single post by id
router.get('/:id', getPostById);

// POST create a new post
router.post('/', verifyToken, createPost);

// PUT update a post by id
router.put('/:id',verifyToken, updatePostById);

// DELETE delete a post by id
router.delete('/:id',verifyToken, deletePostById);

export default router;
