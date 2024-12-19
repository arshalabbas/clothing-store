import { Request, Response } from "express";
import { categoryService } from "../services/category.service";

const getAllCategories = async (req: Request, res: Response) => {
  const result = await categoryService.getAllCategories();

  res.status(200).json(result);
};

const getFeatured = async (req: Request, res: Response) => {
  const result = await categoryService.getFeatured();

  res.status(200).json(result);
};

const getCategory = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const result = await categoryService.getCategory(id);

  if (!result.done) {
    res.status(404).json(result);
    return;
  }

  res.status(200).json(result.category);
};

export const categoryController = {
  getAllCategories,
  getFeatured,
  getCategory,
};
