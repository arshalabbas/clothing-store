import { api } from "./axios";

interface AuthResponse {
  authenticated: boolean;
  message: string;
  token: string;
}

// SignUp User
export const signUpUser = (data: {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}) => {
  return new Promise<AuthResponse>((resolve, reject) => {
    api
      .post("/user/signup", data)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};

// Login User
export const signInUser = ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  return new Promise<AuthResponse>((resolve, reject) => {
    api
      .post("/user/signin", { email, password })
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        reject(error.response.data);
      });
  });
};
