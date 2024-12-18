import { Router } from "express";
import { reviewsController } from "../controllers/reviews.controller";

const router = Router();

router
  .post("/:productId/new", reviewsController.newReview)
  .get("/:productId/user-review", reviewsController.getUserReview);

export const reviewsRouter = router;
