import { ProductFever } from "../../types";
import ProductCard from "../cards/ProductCard";

const ProductGrid = ({ data }: { data: ProductFever[] }) => {
  return (
    <div className="grid gap-5 max-sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {data.map((item) => (
        <ProductCard key={item.id} {...item} rating={item.averageRating || 0} />
      ))}
    </div>
  );
};

export default ProductGrid;
