import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getAllProducts } from "../../lib/api/product.api";
import Loading from "../../components/misc/Loading";
import ProductGrid from "../../components/layouts/ProductGrid";
import { useEffect } from "react";
import { getCategory } from "../../lib/api/category.api";

const Products = () => {
  const [params] = useSearchParams();

  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProducts({ category: params.get("category") }),
  });

  const { data: category } = useQuery({
    queryKey: ["category", params.get("category")],
    queryFn: () => getCategory(params.get("category") || ""),
    enabled: params.get("category") !== undefined,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="dynamic-container pt-28">
      {category && (
        <h4 className="text-2xl font-semibold text-primary/60">
          Products on <span className="text-primary">{category.title}</span>{" "}
        </h4>
      )}
      <div className="divider" />
      <div>
        <ProductGrid data={data || []} />
      </div>
      <Loading isLoading={isLoading} />
    </main>
  );
};

export default Products;
