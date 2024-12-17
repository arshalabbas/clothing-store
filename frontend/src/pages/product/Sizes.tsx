import { Size } from "../../types";

const Sizes = ({ sizes, id }: { sizes: Size[]; id: string }) => {
  return (
    <div className="mt-5">
      <h4 className="font-semibold text-primary">Select Size</h4>
      <div className="mt-2 grid grid-cols-3 gap-4">
        {sizes.map((size, index) => (
          <input
            key={index}
            type="radio"
            name={`size-${id}`}
            aria-label={size.title}
            className="btn btn-outline"
          />
        ))}
      </div>
    </div>
  );
};

export default Sizes;
