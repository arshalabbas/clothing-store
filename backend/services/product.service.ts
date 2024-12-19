import { Prisma } from "@prisma/client";
import prisma from "../config/prismaClient";

const getProducts = async (queries?: {
  categoryId?: string;
  search?: string;
}) => {
  const whereCaluse: Prisma.ProductWhereInput = {};

  if (queries) {
    if (queries.categoryId) whereCaluse.categoryId = queries.categoryId;
    if (queries.search) {
      whereCaluse.OR = [
        { title: { contains: queries.search, mode: "insensitive" } },
        { description: { contains: queries.search, mode: "insensitive" } },
        {
          category: {
            title: { contains: queries.search, mode: "insensitive" },
          },
        },
      ];
    }
  }

  try {
    const products = await prisma.product.findMany({
      where: whereCaluse,
      include: {
        category: true,
        Image: {
          orderBy: {
            order: "asc",
          },
          select: {
            image: true,
          },
        },
        Review: {
          select: {
            rating: true,
          },
        },
      },
    });

    const prettifiedProducts = products.map((product) => {
      const newProduct = {
        id: product.id,
        title: product.title,
        images: product.Image.splice(0, 2).map((item) => item.image),
        category: product.category.title,
        price: product.price,
        originalPrice: product.originalPrice,
        averageRating:
          product.Review.reduce((prev, current) => prev + current.rating, 0) /
          product.Review.length,
      };
      return newProduct;
    });

    return prettifiedProducts;
  } catch (error: any) {
    console.error("Error fetching products:", error.message);
    throw error;
  }
};

const getProductById = async (id: string, userId: string) => {
  try {
    const product = await prisma.product.findFirst({
      where: { id },
      include: {
        category: {
          include: {
            sizes: {
              orderBy: { order: "asc" },
            },
          },
        },
        Image: {
          select: {
            image: true,
          },
          orderBy: {
            order: "asc",
          },
        },
        Review: true,
      },
    });

    const prettifiedProduct = {
      ...product,
      images: product?.Image.map((item) => item.image),
      hasReviewed: product?.Review.find((item) => item.userId === userId)
        ? true
        : false,
      userReview:
        product?.Review.find((item) => item.userId === userId) || null,
      averageRating:
        product!.Review.reduce((prev, item) => prev + item.rating, 0) /
        product?.Review.length!,

      reviewCount: {
        total: product?.Review.length,
        5: product?.Review.filter((item) => item.rating === 5).length,
        4: product?.Review.filter((item) => item.rating === 4).length,
        3: product?.Review.filter((item) => item.rating === 3).length,
        2: product?.Review.filter((item) => item.rating === 2).length,
        1: product?.Review.filter((item) => item.rating === 1).length,
      },
    };

    delete prettifiedProduct.Image;
    delete prettifiedProduct.categoryId;
    delete prettifiedProduct.Review;

    return prettifiedProduct;
  } catch (error: any) {
    console.error("Error fetching product by ID:", error.message);
    throw error;
  }
};

export const productService = { getProducts, getProductById };
