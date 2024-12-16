import { useAuth } from "../../store/useAuthStore";
import { Navigate, Outlet } from "react-router";

const NoAuthOnlyRoute = () => {
  const token = useAuth((state) => state.token);

  if (token) return <Navigate to={"/"} />;
  return <Outlet />;
};

export default NoAuthOnlyRoute;
