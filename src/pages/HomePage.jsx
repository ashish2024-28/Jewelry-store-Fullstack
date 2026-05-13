import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Categories from "../components/Categories";
import ProductSection from "../components/ProductSection";
import Footer from "../components/Footer";

export default function HomePage() {

  return (
    <div className="bg-zinc-100 min-h-screen">

      <Navbar />

      <Hero />

      <Categories />

      <ProductSection />

      <Footer />

    </div>
  );
}