import { ProductFever } from "../../types";
import ProductCard from "../cards/ProductCard";

const ProductGrid = ({
  data,
  isLoading,
}: {
  data: ProductFever[];
  isLoading?: boolean;
}) => {
  if (data.length <= 0)
    return (
      <div className="flex h-96 w-full flex-1 items-center justify-center">
        {isLoading ? (
          <span className="loading loading-spinner loading-lg" />
        ) : (
          <p className="text-xl font-bold text-primary"> No products found.</p>
        )}
      </div>
    );
  return (
    <div className="grid grid-cols-2 gap-x-5 gap-y-14 md:grid-cols-3 lg:grid-cols-4">
      {data.map((item) => (
        <ProductCard key={item.id} {...item} rating={item.averageRating || 0} />
      ))}
    </div>
  );
};

export default ProductGrid;
