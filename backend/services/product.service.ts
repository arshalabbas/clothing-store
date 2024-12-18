import prisma from "../config/prismaClient";

const getProducts = async () => {
  try {
    const products = await prisma.product.findMany({
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
        Review: {
          where: {
            userId,
          },
        },
      },
    });

    const prettifiedProduct = {
      ...product,
      images: product?.Image.map((item) => item.image),
      hasReviewed: product?.Review.length === 1,
      userReview: product?.Review[0] || null,
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
