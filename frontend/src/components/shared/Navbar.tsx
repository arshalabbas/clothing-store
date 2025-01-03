import { Link } from "react-router";
import NavDrawer from "./NavDrawer";

const Navbar = () => {
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge indicator-item badge-primary badge-xs"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
