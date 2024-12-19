import { Router } from "express";
import { categoryController } from "../controllers/category.controller";
const router = Router();

router
  .get("/featured", categoryController.getFeatured)
  .get("/:id", categoryController.getCategory);

export const categoryRouter = router;
