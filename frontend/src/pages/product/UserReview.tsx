import Rating from "../../components/ui/Rating";
import { reviewFormTrigger } from "../../lib/utils";

interface Props {
  isUserReviewed: boolean;
  userRating: number;
  title: string;
  description: string;
}

const UserReview = ({
  isUserReviewed,
  userRating,
  title,
  description,
}: Props) => {
  return (
    <div>
      <div>
        {isUserReviewed ? (
          <div>
            <div className="text-lg font-semibold text-primary">
              Your Review
            </div>
            <div className="mt-3 flex items-center gap-4">
              <Rating rating={userRating} id={"user-rating"} size="md" />
              <span className="text-lg font-semibold text-primary">
                {title}
              </span>
            </div>
            <div className="mt-2">{description}</div>
          </div>
        ) : (
          <div className="flex w-full justify-end">
            <button className="btn btn-primary" onClick={reviewFormTrigger}>
              Post your review
            </button>
          </div>
        )}
      </div>
      <div>
        <div className="text-lg font-semibold text-primary">
          Look what others saying.
        </div>
      </div>
    </div>
  );
};

export default UserReview;
