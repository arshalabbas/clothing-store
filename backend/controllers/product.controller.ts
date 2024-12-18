import { Request, Response } from "express";
import { productService } from "../services/product.service";

const getProducts = async (req: Request, res: Response) => {
  const products = await productService.getProducts();

  res.status(200).json(products);
};

const getProductById = async (req: Request, res: Response) => {
  if (!req.user) return;
  const product = await productService.getProductById(
    req.params.id,
    req.user?.id
  );

  res.status(200).json(product);
};

export const productController = { getProducts, getProductById };
