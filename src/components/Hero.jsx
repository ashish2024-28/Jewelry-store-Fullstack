import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-[450px] overflow-hidden">

      <img
        src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1600"
        alt=""
        className="w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50 flex items-center px-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Luxury <span className="text-yellow-400">Jewelry</span>
          </h1>

          <p className="text-gray-300 mt-5 text-lg max-w-xl">
            Discover premium rings, necklaces, bracelets and timeless
            elegance crafted for every occasion.
          </p>

          <button className="mt-8 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition">
            Shop Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}