import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router";
import { getAllProducts } from "../../lib/api/product.api";
import ProductGrid from "../../components/layouts/ProductGrid";
import { useEffect } from "react";
import { getCategory } from "../../lib/api/category.api";
import SearchInput from "../../components/form/SearchInput";
import { useDebounce } from "use-debounce";

const Products = () => {
  const [params, setParams] = useSearchParams();
  const [search] = useDebounce(params.get("search"), 400);

  const { data, isLoading } = useQuery({
    queryKey: ["products", search],
    queryFn: () =>
      getAllProducts({
        category: params.get("category"),
        search,
      }),
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
      <div className="flex flex-col justify-between gap-10 lg:flex-row">
        {params.get("category") && (
          <h4 className="flex-1 text-2xl font-semibold text-primary/60">
            Products on <span className="text-primary">{category?.title}</span>{" "}
          </h4>
        )}
        <div className="flex-[2]">
          <SearchInput
            placeholder={`Search ${category?.title || "Products"}`}
            onChange={(value) =>
              setParams(`search=${value}`, { replace: true })
            }
          />
        </div>
      </div>
      <div className="divider" />
      <div>
        <ProductGrid isLoading={isLoading} data={data || []} />
      </div>
    </main>
  );
};

export default Products;
