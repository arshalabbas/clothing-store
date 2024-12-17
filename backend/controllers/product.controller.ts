import { Request, Response } from "express";
import { productService } from "../services/product.service";

const getProducts = async (req: Request, res: Response) => {
  const products = await productService.getProducts();

  res.status(200).json(products);
};

const getProductById = async (req: Request, res: Response) => {
  const product = await productService.getProductById(req.params.id);

  res.status(200).json(product);
};

export const productController = { getProducts, getProductById };