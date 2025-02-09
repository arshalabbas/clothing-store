import { useQuery } from "@tanstack/react-query";
import { getFeaturedCategories } from "../../lib/api/category.api";
import CategoryCard from "../../components/cards/CategoryCard";
import { Link } from "react-router";
import { IoIosArrowRoundForward } from "react-icons/io";

const FeaturedCategories = () => {
  const { data } = useQuery({
    queryKey: ["category", "featured"],
    queryFn: getFeaturedCategories,
  });

  return (
    <section className="dynamic-container py-10">
      <h2 className="text-2xl font-bold text-primary">Featured Categories</h2>
      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data?.map((item) => <CategoryCard {...item} key={item.id} />)}
      </div>
      <div className="flex justify-end">
        <Link to={"/categories"} className="flex items-center text-primary">
          <span className="leading-3">View all category</span>
          <IoIosArrowRoundForward className="fill-primary text-2xl" />
        </Link>
      </div>
    </section>
  );
};

export default FeaturedCategories;
