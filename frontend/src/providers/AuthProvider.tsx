import { ReactNode, useEffect } from "react";
import { useAuth } from "../stores/useAuthStore";
import { api } from "../lib/api/axios";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const clearToken = useAuth((state) => state.clearToken);

  useEffect(() => {
    api.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        if (
          error.response.status === 401 &&
          !error.response.data.autherization
        ) {
          clearToken();
        }
      },
    );
  }, [clearToken]);

  return children;
};

export default AuthProvider;
