import { Review } from "@prisma/client";
import prisma from "../config/prismaClient";

const newReview = async (data: Omit<Review, "createdAt" | "id">) => {
  try {
    const alreadyReviewed = await prisma.review.findFirst({
      where: { productId: data.productId, userId: data.userId },
    });

    if (alreadyReviewed)
      return { done: false, message: "You're already reviewed this product" };

    const result = await prisma.review.create({
      data,
    });

    return { done: true, message: "Review created.", data: result };
  } catch (error: any) {
    console.error("Error creating review:", error.message);
    throw error;
  }
};

const getUserReview = async (userId: string, productId: string) => {
  try {
    const review = await prisma.review.findFirst({
      where: { productId, userId },
    });

    return { done: true, review };
  } catch (error: any) {
    console.error("Error fetching user review:", error.message);
    throw error;
  }
};

export const reviewsService = { newReview, getUserReview };
