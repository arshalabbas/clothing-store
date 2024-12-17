import { Category } from "../../types";
import { api } from "./axios";

export const getFeaturedCategories = () => {
  return new Promise<Category[]>((resolve, reject) => {
    api
      .get("/category/featured")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};
