import { useQuery } from "@tanstack/react-query";
import ProductGrid from "../../components/layouts/ProductGrid";
import FeaturedCategories from "./FeaturedCategories";
import Hero from "./Hero";
import { getAllProducts } from "../../lib/api/product.api";
import Loading from "../../components/misc/Loading";

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: () => getAllProducts(),
  });
  return (
    <main className="pt-14">
      <Hero />
      <FeaturedCategories />
      {/* Little MOTTO */}
      <div className="relative my-10 flex w-full justify-center">
        <h1 className="text-center text-3xl font-black md:text-4xl lg:text-6xl">
          Where Style Meets Sophistication
        </h1>
        <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 hidden md:block">
          <h1 className="relative bottom-2 text-center text-5xl font-black text-base-300 md:text-4xl lg:text-7xl">
            Where Style Meets Sophistication
          </h1>
        </div>
      </div>
      {/* Little MOTTO Ends */}
      <section className="dynamic-container">
        <ProductGrid data={data || []} />
      </section>
      <Loading isLoading={isLoading} />
    </main>
  );
};

export default Home;
