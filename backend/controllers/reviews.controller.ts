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

export const reviewsController = { newReview };
