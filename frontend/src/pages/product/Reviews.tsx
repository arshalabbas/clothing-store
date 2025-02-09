import { ReactNode } from "react";
import Rating from "../../components/ui/Rating";
import { Product } from "../../types";
import { useQuery } from "@tanstack/react-query";
import { getAllReviews } from "../../lib/api/review.api";
import ReviewCard from "../../components/cards/ReviewCard";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

interface Props {
  productId: string;
  rating: number;
  UserReview: ReactNode;
  reviewCount: Product["reviewCount"];
}

const Reviews = ({ rating, productId, UserReview, reviewCount }: Props) => {
  const { data } = useQuery({
    queryKey: ["reviews", productId],
    queryFn: () => getAllReviews(productId),
    enabled: productId !== undefined,
  });

  useGSAP(() => {
    // TODO: Hard coded things
    if (window.innerWidth < 800 || !data) return;
    ScrollTrigger.create({
      trigger: "#reviews-container",
      start: "top 100px",
      end: "bottom 600x",
      pin: "#review-info",
      pinSpacing: true,
      markers: false,
      scrub: true,
    });
  }, [data]);
  return (
    <div className="min-h-screen">
      <h3 className="text-2xl font-bold text-primary">
        Reviews ({reviewCount.total})
      </h3>
      <div className="mt-5 flex flex-col gap-5 lg:flex-row">
        {/* Reviews Details */}
        <div className="h-fit bg-base-200 p-5" id="review-info">
          <div className="flex gap-3">
            <span className="text-5xl font-black">{rating.toFixed(1)}</span>
            <Rating
              rating={rating}
              id={"total-rating-" + productId}
              size="lg"
            />
          </div>
          <div className="divider" />
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="flex items-center justify-between py-2">
                <Rating rating={i + 1} id={`-${i}-sm-${productId}`} />
                {reviewCount[i + 1]} Reviews
              </div>
            ))
            .reverse()}
        </div>
        <div className="flex-1" id="reviews-container">
          <div className="w-full">{UserReview}</div>
          {data ? (
            <div className="mt-8 flex flex-col gap-5">
              {data?.map((item, i) => (
                <ReviewCard
                  key={i}
                  {...item}
                  name={`${item.user.firstName} ${item.user.lastName}`}
                />
              ))}
            </div>
          ) : (
            <div className="flex w-full items-center justify-center py-5">
              <span className="loading loading-spinner" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
