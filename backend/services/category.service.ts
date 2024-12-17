import prisma from "../config/prismaClient";

const getFeatured = async () => {
  try {
    const result = await prisma.category.findMany({
      where: { featured: true },
    });

    return result;
  } catch (error) {
    console.error("Error fetching featured categories:", error.message);
    throw error;
  }
};

export const categoryService = { getFeatured };
