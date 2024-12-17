import { ProductFever } from "../../types";
import { api } from "./axios";

export const getAllProducts = () => {
  return new Promise<ProductFever[]>((resolve, reject) => {
    api
      .get("/products")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};
