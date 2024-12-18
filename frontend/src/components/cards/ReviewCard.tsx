import { formatDate } from "../../lib/utils";
import Rating from "../ui/Rating";

interface Props {
  rating: number;
  name: string;
  shortTitle: string;
  review: string;
  createdAt: Date;
}

const ReviewCard = ({ name, shortTitle, review, rating, createdAt }: Props) => {
  return (
    <div className="w-full bg-base-200/50 p-5">
      <div className="flex items-center gap-4">
        <Rating rating={rating} id={"user-rating"} size="sm" />
        <span className="font-semibold text-primary">{shortTitle}</span>
      </div>
      <div className="mt-2">{review}</div>
      <div className="mt-4 flex justify-between font-medium text-primary/40">
        <span>{name}</span>
        <span>{formatDate(createdAt)}</span>
      </div>
    </div>
  );
};

export default ReviewCard;
