import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../../lib/api/category.api";
import CategoryCard from "../../components/cards/CategoryCard";
import Loading from "../../components/misc/Loading";
import { useEffect } from "react";

const Categories = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: getAllCategories,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="dynamic-container pt-20">
      <div>
        <h4 className="flex-1 text-2xl font-semibold">Categories</h4>
      </div>
      <div className="divider" />
      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {data?.map((item) => <CategoryCard {...item} key={item.id} />)}
      </div>
      <Loading isLoading={isLoading} />
    </main>
  );
};

export default Categories;
