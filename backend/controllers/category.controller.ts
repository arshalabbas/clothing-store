import { Request, Response } from "express";
import { categoryService } from "../services/category.service";

const getFeatured = async (req: Request, res: Response) => {
  const result = await categoryService.getFeatured();

  res.status(200).json(result);
};

export const categoryController = { getFeatured };
