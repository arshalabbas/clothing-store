import { Request, Response } from "express";
import { createUser } from "../services/user.service";

const signUpUser = async (req: Request, res: Response) => {
  const result = await createUser(req.body);

  res.status(201).json(result);
};

export const userController = { signUpUser };
