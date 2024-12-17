import { Router } from "express";
import { productController } from "../controllers/product.controller";

const router = Router();

router
  .get("/", productController.getProducts)
  .get("/:id", productController.getProductById);

export const productRouter = router;
