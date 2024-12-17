import prisma from "../config/prismaClient";

const getProducts = async () => {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
        Image: {
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
  } catch (error) {
    console.error("Error fetching products:", error.message);
    throw error;
  }
};

const getProductById = async (id: string) => {
  try {
    const product = await prisma.product.findFirst({
      where: { id },
      include: {
        category: true,
        Image: {
          select: {
            image: true,
          },
        },
      },
    });

    const prettifiedProduct = {
      ...product,
      images: product?.Image.map((item) => item.image),
    };

    delete prettifiedProduct.Image;
    delete prettifiedProduct.categoryId;

    return prettifiedProduct;
  } catch (error) {
    console.error("Error fetching product by ID:", error.message);
    throw error;
  }
};

export const productService = { getProducts, getProductById };
