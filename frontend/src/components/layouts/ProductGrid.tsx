import { ProductFever } from "../../types";
import ProductCard from "../cards/ProductCard";

const ProductGrid = ({ data }: { data: ProductFever[] }) => {
  if (data.length <= 0)
    return (
      <div className="flex h-60 w-full flex-1 items-center justify-center">
        <p className="text-xl font-bold text-primary">No products found.</p>
      </div>
    );
  return (
    <div className="grid gap-5 max-sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {data.map((item) => (
        <ProductCard key={item.id} {...item} rating={item.averageRating || 0} />
      ))}
    </div>
  );
};

export default ProductGrid;
