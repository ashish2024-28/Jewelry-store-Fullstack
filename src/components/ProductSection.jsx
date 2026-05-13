import products from "../data/products";
import ProductCard from "./ProductCard";

export default function ProductSection() {

  return (
    <section className="px-6 pb-16">

      <div className="flex items-center justify-between mb-8">

        <h2 className="text-3xl font-bold">
          Trending Products
        </h2>

        <button className="text-yellow-600 font-semibold">
          View All
        </button>

      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

        {products.map((product) => (

          <ProductCard
            key={product.id}
            product={product}
          />

        ))}

      </div>

    </section>
  );
}