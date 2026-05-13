import { useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";

import categoryProducts from "../data/categoryProducts";

export default function CategoryPage() {

  const { categoryName } = useParams();

  const products = categoryProducts[categoryName] || [];

  return (
    <div className="bg-zinc-100 min-h-screen">

      {/* Navbar */}
      <Navbar />

      {/* Banner */}
      <div className="bg-black text-white py-20 text-center">

        <h1 className="text-5xl font-bold text-yellow-400">
          {categoryName}
        </h1>

        <p className="mt-4 text-gray-300">
          Premium Luxury Jewelry Collection
        </p>

      </div>

      {/* Products */}
      <div className="px-6 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}