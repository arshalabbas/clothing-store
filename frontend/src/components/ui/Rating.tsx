const Rating = ({ rating, id }: { rating: number; id: string | number }) => {
  return (
    <div className="rating rating-hidden rating-sm">
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <input
            type="radio"
            name={`rating-${id}`}
            key={index}
            className="mask mask-star"
            defaultChecked={Math.trunc(rating) === index + 1}
          />
        ))}
    </div>
  );
};

export default Rating;
