import { api } from "./axios";

// Login User
export const signUpUser = (data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  return new Promise((resolve, reject) => {
    api
      .post("/user/signup", data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
