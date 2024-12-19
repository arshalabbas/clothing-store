import Rating from "../../components/ui/Rating";

const ProductRating = ({
  rating,
  count,
  id,
}: {
  rating: number;
  count: number;
  id: string;
}) => {
  return (
    <div className="mt-10 flex flex-col gap-4">
      <h4 className="text-xl font-semibold text-primary">Reviews ({count})</h4>
      <div className="flex justify-between">
        <Rating rating={rating} id={id} size="md" />
        <span className="text-lg font-semibold">{rating.toFixed(1)} / 5.0</span>
      </div>
      <a href="#" className="link text-right">
        View Reviews
      </a>
    </div>
  );
};

export default ProductRating;
