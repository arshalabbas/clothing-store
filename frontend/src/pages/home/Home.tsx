import Navbar from "../../components/shared/Navbar";
import FeaturedCategories from "./FeaturedCategories";
import Hero from "./Hero";

const Home = () => {
  return (
    <main className="pt-14">
      <Navbar />
      <Hero />
      <FeaturedCategories />
    </main>
  );
};

export default Home;
