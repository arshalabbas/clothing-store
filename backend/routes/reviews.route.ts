import { Router } from "express";
import { reviewsController } from "../controllers/reviews.controller";

const router = Router();

router
  .get("/:productId", reviewsController.getAllReviews)
  .get("/:productId/user-review", reviewsController.getUserReview)
  .post("/:productId/new", reviewsController.newReview)
  .put("/:productId/user-review", reviewsController.updateUserReview)
  .delete("/:productId/user-review", reviewsController.deleteUserReview);

export const reviewsRouter = router;
