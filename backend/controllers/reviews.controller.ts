import { Request, Response } from "express";
import { reviewsService } from "../services/reviews.service";

interface ReviewRequest {
  rating: number;
  shortTitle: string;
  review: string;
}

const newReview = async (
  req: Request<{ productId: string }, {}, ReviewRequest>,
  res: Response
) => {
  const userId = req.user?.id;
  const productId = req.params.productId;

  if (!userId || !productId)
    return res
      .status(400)
      .json({ done: false, message: "User ID or Product ID is missing." });

  const { rating, shortTitle, review } = req.body;

  const result = await reviewsService.newReview({
    userId,
    productId,
    rating,
    shortTitle,
    review,
  });

  if (!result.done) return res.status(400).json(result);

  res.status(200).json(result);
};

const getUserReview = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const productId = req.params.productId;

  if (!userId || !productId)
    return res
      .status(400)
      .json({ done: false, message: "User ID or Product ID is missing." });

  const result = await reviewsService.getUserReview(userId, productId);

  res.status(200).json(result.review);
};

const updateUserReview = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const productId = req.params.productId;

  if (!userId || !productId)
    return res
      .status(400)
      .json({ done: false, message: "User ID or Product ID is missing." });

  const { rating, shortTitle, review } = req.body;

  const result = await reviewsService.updateUserReview(userId, productId, {
    userId,
    productId,
    shortTitle,
    review,
    rating,
  });

  res.status(200).json(result.review);
};

const deleteUserReview = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const productId = req.params.productId;

  if (!userId || !productId)
    return res
      .status(400)
      .json({ done: false, message: "User ID or Product ID is missing." });

  const result = await reviewsService.deleteUserReview(userId, productId);

  res.status(200).json(result);
};

const getAllReviews = async (req: Request, res: Response) => {
  const userId = req.user?.id;
  const productId = req.params.productId;

  if (!userId || !productId)
    return res
      .status(400)
      .json({ done: false, message: "User ID or Product ID is missing." });

  const result = await reviewsService.getAllReviews(productId, userId);

  res.status(200).json(result.reviews);
};

export const reviewsController = {
  newReview,
  getUserReview,
  updateUserReview,
  deleteUserReview,
  getAllReviews,
};
