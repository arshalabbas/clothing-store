import { Router } from "express";
import { categoryController } from "../controllers/category.controller";
const router = Router();

router
  .get("/", categoryController.getAllCategories)
  .get("/featured", categoryController.getFeatured)
  .get("/:id", categoryController.getCategory);

export const categoryRouter = router;
