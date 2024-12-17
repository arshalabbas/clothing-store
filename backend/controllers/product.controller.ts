import { Request, Response } from "express";
import { productService } from "../services/product.service";

const getProducts = async (req: Request, res: Response) => {
  const products = await productService.getProducts();

  res.status(200).json(products);
};

export const productController = { getProducts };
