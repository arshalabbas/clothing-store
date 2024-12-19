import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../stores/useAuthStore";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const ProtectedRoute = () => {
  const token = useAuth((state) => state.token);

  if (!token) return <Navigate to={"/signin"} replace />;
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Navbar />
      <div id="main-content" className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default ProtectedRoute;
