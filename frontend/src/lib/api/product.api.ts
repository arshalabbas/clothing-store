import { Product, ProductFever } from "../../types";
import { api } from "./axios";

export const getAllProducts = (queries?: {
  category?: string | null;
  search?: string | null;
}) => {
  console.log(queries);
  return new Promise<ProductFever[]>((resolve, reject) => {
    const params: Record<string, string> = {};
    if (queries) {
      if (queries.category) params.category = queries.category;
      if (queries.search) params.search = queries.search;
    }
    api
      .get("/products", { params })
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
