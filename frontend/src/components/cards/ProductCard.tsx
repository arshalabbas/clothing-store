import { imageURL } from "../../lib/utils";
import { ProductFever } from "../../types";

const ProductCard = ({
  id,
  title,
  images,
  price,
  originalPrice,
}: ProductFever) => {
  return (
    <div className="h-auto w-full">
      <div className="aspect-square w-full">
        <img src={imageURL(images[0])} alt={`product-image-${id}`} />
      </div>
      <div>
        <span>{title}</span>
      </div>
      <div className="flex w-full items-center justify-between">
        <span className="text-xl font-semibold text-primary">{price}$</span>
        <span className="text-base-300 line-through">{originalPrice}$</span>
      </div>
    </div>
  );
};

export default ProductCard;
