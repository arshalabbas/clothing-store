import { Category } from "../../types";
import { api } from "./axios";

export const getAllCategories = () => {
  return new Promise<Category[]>((resolve, reject) => {
    api
      .get("/category")
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};

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

export const getCategory = (id: string) => {
  return new Promise<Category>((resolve, reject) => {
    api
      .get(`/category/${id}`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};
