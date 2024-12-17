import { Router } from "express";
import { categoryController } from "../controllers/category.controller";
const router = Router();

router.get("/featured", categoryController.getFeatured);

export const categoryRouter = router;
