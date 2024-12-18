import { api } from "./axios";

export const postReview = ({
  productId,
  rating,
  shortTitle,
  review,
}: {
  productId: string;
  rating: number;
  shortTitle: string;
  review: string;
}) => {
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
