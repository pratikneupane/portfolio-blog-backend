import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";
dotenv.config();

interface UserPayload {
  userId: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: UserPayload;
    }
  }
}

const verifyToken = (req: Request , res: Response, next: NextFunction) => {
  const token =
    req.body.token || req.query.token || req.headers["authorization"];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  
  if (!token.startsWith("Bearer ")) {
    return res.status(401).send("Invalid Token Format");
  }
  
  try {
    const decoded = jwt.verify(token.substr(7), process.env.JWT_SECRET!) as UserPayload;
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

export default verifyToken;
