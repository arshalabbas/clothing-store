import { useEffect, useRef } from "react";
import { imageURL } from "../../lib/utils";
import { ProductFever } from "../../types";
import { Link } from "react-router";
import { IoAdd } from "react-icons/io5";
import Rating from "../ui/Rating";

const ProductCard = ({
  id,
  title,
  images,
  price,
  originalPrice,
  rating,
  category,
}: ProductFever) => {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imageRef.current) return;
    imageRef.current.src = imageURL(images[0]);

    imageRef.current.onmouseenter = () => {
      if (imageRef.current) imageRef.current.src = imageURL(images[1]);
    };

    imageRef.current.onmouseleave = () => {
      if (imageRef.current) imageRef.current.src = imageURL(images[0]);
    };
  }, [images]);

  return (
    <div className="flex h-auto w-full flex-col gap-2">
      <Link to={`/product/${id}`} className="flex flex-1 flex-col">
        <div className="aspect-square w-full overflow-hidden rounded bg-base-300/30">
          <img
            className="h-full w-full object-cover object-top"
            ref={imageRef}
            src={imageURL(images[0])}
            alt={`product-image-${id}`}
          />
        </div>
        <div className="mt-2">
          <span className="font-medium text-primary/50 max-sm:text-sm">
            {category}
          </span>
        </div>
        <div className="flex-1">
          <span className="font-semibold text-primary lg:text-lg">{title}</span>
        </div>
        <div className="flex w-full items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-xl font-semibold text-primary/90">
              {price}$
            </span>
            <span className="text-primary/50 line-through">
              {originalPrice}$
            </span>
          </div>
          <div className="flex flex-col items-end gap-1">
            <Rating rating={rating} id={id} />
            <span className="font-medium">{rating.toFixed(1)} / 5.0</span>
          </div>
        </div>
      </Link>
      <div>
        <button className="btn btn-outline btn-primary w-full">
          <IoAdd className="text-xl" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
