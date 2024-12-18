import jwt from "jsonwebtoken";

export const generateJwtToken = (data: any) => {
  return jwt.sign(data, process.env.JWT_SECRET!, {
    expiresIn: "10d",
  });
};
