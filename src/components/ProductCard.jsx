import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {

  const { addToCart } = useCart();

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition"
    >

      {/* Image */}
      <div className="overflow-hidden h-72">

        <img
          src={product.image}
          alt=""
          className="w-full h-full object-cover hover:scale-110 transition duration-500"
        />

      </div>

      {/* Content */}
      <div className="p-5">

        {/* Rating */}
        <div className="flex text-yellow-500 mb-2 gap-1">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold">
          {product.name}
        </h3>

        {/* Price */}
        <p className="text-2xl font-bold text-yellow-600 mt-2">
          {product.price}
        </p>

        {/* Button */}
        <button
          onClick={() => addToCart(product)}
          className="w-full mt-5 bg-black hover:bg-yellow-500 hover:text-black text-white py-3 rounded-xl font-semibold transition"
        >
          Add To Cart
        </button>

      </div>
    </motion.div>
  );
}