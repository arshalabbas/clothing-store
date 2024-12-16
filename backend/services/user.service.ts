import prisma from "../config/prismaClient";
import bcrypt from "bcrypt";

interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}
export const createUser = async (user: User) => {
  let userData = user;

  userData.password = await bcrypt.hash(user.password, await bcrypt.genSalt());
  const result = await prisma.user.create({
    data: userData,
  });

  // TODO: Configure JWT and hash the password

  return result;
};
