import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import NoAuthOnlyRoute from "./components/routing/NoAuthOnlyRoute";
import Product from "./pages/product/Product";
import AuthProvider from "./providers/AuthProvider";
import Products from "./pages/products/Products";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {/* No Auth Only routes */}
          <Route element={<NoAuthOnlyRoute />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>

          {/* Auth Only routes  */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
