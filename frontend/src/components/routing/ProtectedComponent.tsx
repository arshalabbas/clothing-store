import { ReactNode } from "react";
import { useAuth } from "../../stores/useAuthStore";

const ProtectedComponent = ({ children }: { children: ReactNode }) => {
  const token = useAuth((state) => state.token);

  if (!token) return null;
  return children;
};

export default ProtectedComponent;
