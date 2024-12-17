import Navbar from "../../components/shared/Navbar";
import FeaturedCategories from "./FeaturedCategories";
import Hero from "./Hero";

const Home = () => {
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
    </main>
  );
};

export default Home;
