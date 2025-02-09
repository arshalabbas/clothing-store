import { Router } from "express";
import { userController } from "../controllers/user.controller";

const router = Router();

router
  .post("/signup", userController.signUpUser)
  .post("/signin", userController.signInUser);

export const userRouter = router;
