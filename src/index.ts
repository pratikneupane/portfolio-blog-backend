import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db";
import postsRouter from './routes/posts';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/posts', postsRouter);

const port = process.env.PORT || 5000;

// Call connectDB function before starting the server
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`🚀 Server started at http://localhost:${port}`);
    });
  })
  .catch((err) => console.error(err));
