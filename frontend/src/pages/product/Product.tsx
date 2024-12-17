import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getProductById } from "../../lib/api/product.api";
import Loading from "../../components/misc/Loading";
import { useEffect } from "react";
import ProductImages from "./ProductImages";
import Sizes from "./Sizes";
import PriceCard from "./PriceCard";
import ProductRating from "./ProductRating";

const Product = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductById(id!),
    enabled: id !== undefined,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="dynamic-container min-h-screen pt-24">
      <section className="flex w-full gap-10">
        {/* Images */}
        <ProductImages images={data?.images || []} />
        {/* Detailed */}
        <div className="h-full flex-1 flex-col">
          <div>
            <h5 className="text-lg font-medium text-primary/70">
              {data?.category.title}
            </h5>
            <h2 className="text-2xl font-bold">{data?.title}</h2>
          </div>

          <div className="mt-10">
            <p className="leading-[1.6] text-primary/80">{data?.description}</p>
          </div>
          <Sizes sizes={data?.category.sizes || []} id={id || ""} />
          <PriceCard
            price={data?.price || ""}
            originalPrice={data?.price || ""}
          />

          {/* Price */}
          <ProductRating rating={4.5} count={43} id={id || ""} />
        </div>
      </section>
      <Loading isLoading={isLoading} />
    </main>
  );
};

export default Product;
