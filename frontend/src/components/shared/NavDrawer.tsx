import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../../lib/api/category.api";

const NavDrawer = () => {
  const { data } = useQuery({
    queryKey: ["category"],
    queryFn: getAllCategories,
  });
  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
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
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu menu-md min-h-full w-80 bg-primary p-4 text-primary-content">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Search</a>
          </li>
          {/* Sidebar content here */}
          <li className="menu-title text-xl text-primary-content">
            Categories
          </li>
          {data?.map((item) => (
            <li>
              <a href={`/products?category=${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavDrawer;
