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

const updateUserReview = async (
  userId: string,
  productId: string,
  data: Omit<Review, "id" | "createdAt">
) => {
  try {
    const review = await prisma.review.update({
      where: {
        productId_userId: {
          userId,
          productId,
        },
      },
      data,
    });

    return { done: true, review };
  } catch (error: any) {
    console.error("Error updating user review:", error.message);
    throw error;
  }
};

const deleteUserReview = async (userId: string, productId: string) => {
  const review = await prisma.review.delete({
    where: { productId_userId: { userId, productId } },
  });

  return { done: true, review };
};

const getAllReviews = async (productId: string, userId: string) => {
  try {
    const reviews = await prisma.review.findMany({
      where: { productId, userId: { not: userId } },
      include: { user: { select: { firstName: true, lastName: true } } },
      orderBy: { createdAt: "desc" },
    });

    return { done: true, reviews };
  } catch (error: any) {
    console.error("Error fetching all reviews:", error.message);
    throw error;
  }
};

export const reviewsService = {
  newReview,
  getUserReview,
  updateUserReview,
  deleteUserReview,
  getAllReviews,
};
