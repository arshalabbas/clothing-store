import { Request, Response } from "express";
import { userService } from "../services/user.service";

const signUpUser = async (req: Request, res: Response) => {
  const result = await userService.createUser(req.body);

  if (result?.authenticated) {
    res.status(201).json(result);
  } else {
    res.status(401).json(result);
  }
};

const signInUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const result = await userService.signInUser({ email, password });

  if (result?.authenticated) {
    res.status(201).json(result);
  } else {
    res.status(401).json(result);
  }
};
export const userController = { signUpUser, signInUser };
