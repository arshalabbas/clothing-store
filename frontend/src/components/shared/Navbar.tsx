import { Link } from "react-router";
import NavDrawer from "./NavDrawer";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "../../stores/useCartStore";

const Navbar = () => {
  const cartLength = useCart((state) => state.items).length;
  return (
    <div className="navbar fixed left-0 top-0 z-10 bg-primary">
      <div className="navbar-start">
        <div>
          <NavDrawer />
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost text-xl text-primary-content" href="/">
          Hauts
        </a>
      </div>
      <div className="navbar-end">
        <Link to={"/products"} className="btn btn-circle btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 stroke-primary-content"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </Link>

        <button className="btn btn-circle btn-ghost">
          <div className="indicator">
            <AiOutlineShoppingCart className="fill-primary-content text-xl" />
            <span className="badge indicator-item badge-primary badge-xs">
              {cartLength}
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
