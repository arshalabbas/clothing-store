import clsx from "clsx";

interface Props {
  rating: number;
  id: string | number;
  size?: "xs" | "sm" | "md" | "lg";
}

const RatingInput = ({ rating, id, size = "sm" }: Props) => {
  return (
    <div
      className={clsx("rating rating-hidden", {
        "rating-xs": size === "xs",
        "rating-sm": size === "sm",
        "rating-md": size === "md",
        "rating-lg": size === "lg",
      })}
    >
      {Array(6)
        .fill(null)
        .map((_, index) => (
          <input
            type="radio"
            name={`rating-${id}`}
            key={index}
            className="mask mask-star first:rating-hidden"
            disabled
            defaultChecked={Math.trunc(rating) === index}
          />
        ))}
    </div>
  );
};

export default RatingInput;
