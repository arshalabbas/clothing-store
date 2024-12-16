import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string | null;
}

interface AuthMethods {
  setToken: (token: string) => void;
  clearToken: () => void;
}

type AuthStore = AuthState & AuthMethods;

export const useAuth = create<AuthStore>()(
  persist(
    (set) => ({
      token: null,
      setToken: (token) => set({ token }),
      clearToken: () => set({ token: null }),
    }),
    { name: "_token" },
  ),
);
