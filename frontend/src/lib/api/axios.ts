import axios from "axios";
import { useAuth } from "../../stores/useAuthStore";

export const api = axios.create({
  baseURL: "http://localhost:3000/",
});

api.interceptors.request.use(
  (config) => {
    const token = useAuth.getState().token;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);
