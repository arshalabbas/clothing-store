import prisma from "../config/prismaClient";

const getAllCategories = async () => {
  try {
    const result = await prisma.category.findMany();

    return result;
  } catch (error: any) {
    console.error("Error fetching all categories:", error.message);
    throw error;
  }
};

const getFeatured = async () => {
  try {
    const result = await prisma.category.findMany({
      where: { featured: true },
    });

    return result;
  } catch (error: any) {
    console.error("Error fetching featured categories:", error.message);
    throw error;
  }
};

const getCategory = async (id: string) => {
  try {
    const category = await prisma.category.findFirst({ where: { id } });

    if (!category)
      return { done: false, message: "No category found on this id" };

    return { done: true, category };
  } catch (error: any) {
    console.error("Error fetching category:", error.message);
    throw error;
  }
};

export const categoryService = { getAllCategories, getFeatured, getCategory };
