import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import postsRouter from './routes/posts.js';
import loginRoutes from './routes/login.js';
import registerRoutes from './routes/register.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use('/posts', postsRouter);
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);

const port = process.env.PORT || 5000;

// Call connectDB function before starting the server
connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`🚀 Server started at http://localhost:${port}`);
    });
  })
  .catch((err) => console.error(err));
