import { Size } from "../../types";

const Sizes = ({ sizes, id }: { sizes: Size[]; id: string }) => {
  return (
    <div className="mt-5 grid grid-cols-3 gap-4">
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
  );
};

export default Sizes;
