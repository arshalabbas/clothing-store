import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getProductById } from "../../lib/api/product.api";
import Loading from "../../components/misc/Loading";
import { useEffect } from "react";
import ProductImages from "./ProductImages";
import Sizes from "./Sizes";
import PriceCard from "./PriceCard";
import ProductRating from "./ProductRating";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reviews from "./Reviews";
import gsap from "gsap";
import ReviewForm from "./ReviewForm";
import UserReview from "./UserReview";

gsap.registerPlugin(ScrollTrigger);

const Product = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isSuccess } = useQuery({
    queryKey: ["products", id],
    queryFn: () => getProductById(id!),
    enabled: id !== undefined,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useGSAP(() => {
    // TODO: Hard coded things
    ScrollTrigger.create({
      trigger: "#product-container",
      start: "top 100px",
      end: "bottom 600x",
      pin: "#product-left",
      pinSpacing: true,
      markers: false,
      scrub: true,
    });
  }, []);

  if (!data) return null;

  console.log(data.reviewCount);

  return (
    <main className="dynamic-container min-h-screen pt-24">
      <section className="flex w-full gap-10" id="product-container">
        {/* Images */}
        <ProductImages images={data?.images || []} />
        {/* Detailed */}
        <div className="flex h-full flex-1 flex-col">
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
            originalPrice={data?.originalPrice || ""}
          />

          {/* Price */}
          <ProductRating
            rating={data?.averageRating || 0}
            count={data?.reviewCount.total || 0}
            id={id || ""}
          />
        </div>
      </section>
      <section className="mt-24">
        <Reviews
          reviewCount={data?.reviewCount}
          rating={data?.averageRating || 0}
          productId={id || ""}
          UserReview={
            <UserReview
              hasReviewed={data?.hasReviewed}
              userRating={data?.userReview}
              productId={data?.id || ""}
            />
          }
        />
      </section>

      {/* Modal */}
      <ReviewForm
        image={data?.images[0] || ""}
        title={data?.title || ""}
        productId={data?.id || ""}
        hasReviewed={data?.hasReviewed}
        isLoaded={isSuccess}
      />
      <Loading isLoading={isLoading} />
    </main>
  );
};

export default Product;
