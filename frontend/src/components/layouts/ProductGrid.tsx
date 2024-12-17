import { ProductFever } from "../../types";
import ProductCard from "../cards/ProductCard";

const ProductGrid = ({ data }: { data: ProductFever[] }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {data.map((item) => (
        <ProductCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ProductGrid;
