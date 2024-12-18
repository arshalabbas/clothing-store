import { Review } from "../../types";
import { api } from "./axios";

interface ReviewParams {
  productId: string;
  rating: number;
  shortTitle: string;
  review: string;
}

export const postReview = ({
  productId,
  rating,
  shortTitle,
  review,
}: ReviewParams) => {
  return new Promise((resolve, reject) => {
    api
      .post(`/reviews/${productId}/new`, {
        rating,
        shortTitle,
        review,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};

export const getUserReview = (productId: string) => {
  return new Promise<Review | null>((resolve, reject) => {
    api
      .get(`/reviews/${productId}/user-review`, {})
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};

export const updateReview = ({
  productId,
  rating,
  review,
  shortTitle,
}: ReviewParams) => {
  return new Promise((resolve, reject) => {
    api
      .put(`/reviews/${productId}/user-review`, {
        rating,
        review,
        shortTitle,
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};

export const deleteReview = (productId: string) => {
  return new Promise((resolve, reject) => {
    api
      .delete(`/reviews/${productId}/user-review`)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};
