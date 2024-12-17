import { useQuery } from "@tanstack/react-query";
import ProductGrid from "../../components/layouts/ProductGrid";
import Navbar from "../../components/shared/Navbar";
import FeaturedCategories from "./FeaturedCategories";
import Hero from "./Hero";
import { getAllProducts } from "../../lib/api/product.api";
import Loading from "../../components/misc/Loading";
import Footer from "../../components/shared/Footer";

const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });
  return (
    <main className="pt-14">
      <Navbar />
      <Hero />
      <FeaturedCategories />
      {/* Little MOTTO */}
      <div className="relative my-10 flex w-full justify-center">
        <h1 className="text-center text-6xl font-black">
          Where Style Meets Sophistication
        </h1>
        <div className="absolute bottom-0 left-0 right-0 top-0 -z-10">
          <h1 className="relative bottom-2 text-center text-7xl font-black text-base-300">
            Where Style Meets Sophistication
          </h1>
        </div>
      </div>
      {/* Little MOTTO Ends */}
      <section className="dynamic-container">
        <ProductGrid data={data || []} />
      </section>
      <Footer />
      <Loading isLoading={isLoading} />
    </main>
  );
};

export default Home;
