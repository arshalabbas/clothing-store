import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import NoAuthOnlyRoute from "./components/routing/NoAuthOnlyRoute";
import Product from "./pages/product/Product";
import Navbar from "./components/shared/Navbar";
import ProtectedComponent from "./components/routing/ProtectedComponent";
import Footer from "./components/shared/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <ProtectedComponent>
        <Navbar />
      </ProtectedComponent>
      <Routes>
        {/* No Auth Only routes */}
        <Route element={<NoAuthOnlyRoute />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        {/* Auth Only routes  */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
        </Route>
      </Routes>
      <ProtectedComponent>
        <Footer />
      </ProtectedComponent>
    </BrowserRouter>
  );
};

export default App;
