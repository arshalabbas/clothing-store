import { Product, ProductFever } from "../../types";
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

export const getProductById = (id: string) => {
  return new Promise<Product>((resolve, reject) => {
    api
      .get(`/products/${id}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};
