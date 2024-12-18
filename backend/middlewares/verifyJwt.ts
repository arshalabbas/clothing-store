import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import prisma from "../config/prismaClient";

export const verifyJwt = (req: Request, res: Response, next: NextFunction) => {
  const autherizationHeader = req.headers.authorization;
  if (!autherizationHeader) {
    return res
      .status(401)
      .json({ autherization: false, message: "No valid token provided." });
  }
  const token = autherizationHeader.split(" ")[1];

  jwt.verify(token, process.env.JWT_SECRET!, async (err, decoded) => {
    if (err) {
      return res.status(401).json({
        autherization: false,
        message: "Invalid token or token has expired.",
      });
    } else {
      const { userId } = decoded as { userId: string };

      const user = await prisma.user.findFirst({ where: { id: userId } });

      if (!user) {
        return res.status(401).json({
          autherization: false,
          message: "User not found.",
        });
      }

      req.user = user;
      next();
    }
  });
};
