const PriceCard = ({
  originalPrice,
  price,
}: {
  originalPrice: string;
  price: string;
}) => {
  return (
    <div className="mt-5 w-full bg-base-200 p-5">
      <div className="flex items-end gap-2">
        <span className="text-3xl font-black">{price}₹</span>
        <span className="text-xl font-semibold text-primary/60 line-through decoration-primary/60">
          {originalPrice}₹
        </span>
      </div>
      <div className="mt-1 flex flex-col text-sm text-primary/60">
        <span>Inclusive all taxes</span>
        <span>(Also includes all applicable duties)</span>
      </div>
      <div className="mt-5">
        <button className="btn btn-primary btn-lg btn-block">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default PriceCard;
