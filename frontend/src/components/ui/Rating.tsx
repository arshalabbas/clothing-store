import clsx from "clsx";

interface Props {
  rating: number;
  id: string | number;
  size?: "xs" | "sm" | "md" | "lg";
  disabled?: boolean;
  onChange?: (selected: number) => void;
}

const Rating = ({
  rating,
  id,
  size = "sm",
  disabled = true,
  onChange,
}: Props) => {
  return (
    <div
      className={clsx("rating rating-hidden -ml-2", {
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
            disabled={disabled}
            onChange={() => onChange && onChange(index)}
            checked={Math.trunc(rating) === index}
          />
        ))}
    </div>
  );
};

export default Rating;
