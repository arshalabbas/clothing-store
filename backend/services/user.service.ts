import prisma from "../config/prismaClient";
import bcrypt from "bcrypt";
import { generateJwtToken } from "../lib/generateJwtToken";

interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

// Sign up user service
const createUser = async (data: User) => {
  let userData = data;

  try {
    const user = await prisma.user.findFirst({ where: { email: data.email } });

    if (user) {
      return { authenticated: false, message: "User already exists." };
    }

    userData.password = await bcrypt.hash(
      data.password,
      await bcrypt.genSalt()
    );
    const result = await prisma.user.create({
      data: userData,
    });

    const token = generateJwtToken({ userId: result.id });

    return { authenticated: true, message: "User authenticated", token };
  } catch (error) {
    console.error("Error creating user", error.message);
  }
};

// SIgn in Uesr service
const signInUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) return { authenticated: false, message: "User not found" };

    bcrypt.compare(password, user.password, (error) => {
      if (error) {
        return { authenticated: false, message: "Check your password." };
      }

      const token = generateJwtToken({ userId: user.id });

      return { authenticated: true, message: "User Authenticated", token };
    });
  } catch (error) {
    console.error("Error loggin user.", error.message);
  }
};

export const userService = { createUser, signInUser };
