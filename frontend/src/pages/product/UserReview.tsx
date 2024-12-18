import Rating from "../../components/ui/Rating";
import { reviewFormTrigger } from "../../lib/utils";
import { Review } from "../../types";
import { FaRegEdit } from "react-icons/fa";

interface Props {
  productId: string;
  hasReviewed?: boolean;
  userRating?: Review | null;
}

const UserReview = ({ productId, hasReviewed = false, userRating }: Props) => {
  return (
    <div>
      <div>
        {hasReviewed && userRating ? (
          <div>
            <div className="text-lg font-semibold text-primary">
              Your Review
            </div>
            <div className="mt-3 flex items-center gap-4">
              <Rating rating={userRating.rating} id={"user-rating"} size="md" />
              <span className="text-lg font-semibold text-primary">
                {userRating.shortTitle}
              </span>
            </div>
            <div className="mt-2">{userRating.review}</div>
            <div className="mt-5">
              <button
                className="btn btn-warning btn-sm"
                onClick={() => reviewFormTrigger(productId)}
              >
                <FaRegEdit /> Edit your Review
              </button>
            </div>
          </div>
        ) : (
          <div className="flex w-full justify-end">
            <button
              className="btn btn-primary"
              onClick={() => reviewFormTrigger(productId)}
            >
              Post your review
            </button>
          </div>
        )}
      </div>
      <div className="divider" />
      <div>
        <div className="text-lg font-semibold text-primary">
          Look what others saying.
        </div>
      </div>
    </div>
  );
};

export default UserReview;
