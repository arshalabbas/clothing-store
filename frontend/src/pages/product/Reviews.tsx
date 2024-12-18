import { ReactNode } from "react";
import Rating from "../../components/ui/Rating";

interface Props {
  id: string;
  rating: number;
  UserReview: ReactNode;
}

const Reviews = ({ rating, id, UserReview }: Props) => {
  return (
    <div className="min-h-screen">
      <h3 className="text-2xl font-bold text-primary">Reviews (40)</h3>
      <div className="mt-5 flex gap-5">
        {/* Reviews Details */}
        <div className="bg-base-200 p-5">
          <div className="flex gap-3">
            <span className="text-5xl font-black">{rating}</span>
            <Rating rating={rating} id={id} size="lg" />
          </div>
          <div className="divider" />
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <div key={i} className="flex items-center justify-between py-2">
                <Rating rating={i + 1} id={`-${i}-sm-${id}`} />
                {"xx"} Reviews
              </div>
            ))
            .reverse()}
        </div>
        <div className="flex-1">{UserReview}</div>
      </div>
    </div>
  );
};

export default Reviews;
