import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../store/useAuthStore";

const ProtectedRoute = () => {
  const token = useAuth((state) => state.token);

  if (!token) return <Navigate to={"/signin"} replace />;
  return <Outlet />;
};

export default ProtectedRoute;
