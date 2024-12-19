import { Request, Response } from "express";
import { productService } from "../services/product.service";

const getProducts = async (req: Request, res: Response) => {
  const { category, search } = req.query;
  const queries: Record<string, any> = {};

  if (category) queries.categoryId = category;
  if (search) queries.search = search;
  const products = await productService.getProducts(queries);

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
