import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/home/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import NoAuthOnlyRoute from "./components/routing/NoAuthOnlyRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* No Auth Only routes */}
        <Route element={<NoAuthOnlyRoute />}>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>

        {/* Auth Only routes  */}
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
