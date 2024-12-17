import { imageURL } from "../../lib/utils";
import { Category } from "../../types";

const CategoryCard = ({ title, image }: Category) => {
  return (
    <div className="h-auto w-full">
      <div className="h-80 w-full overflow-hidden">
        <img
          src={imageURL(image)}
          alt={title}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <h3 className="mt-3 text-center text-xl font-semibold">{title}</h3>
    </div>
  );
};

export default CategoryCard;
