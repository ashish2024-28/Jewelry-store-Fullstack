import { motion } from "framer-motion";
import categories from "../data/categories";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();

  return (
    <section className="px-6 py-14 bg-gradient-to-b from-zinc-100 to-zinc-200">

      {/* Heading */}
      <div className="flex items-center justify-between mb-10">

        <div>
          <h2 className="text-4xl font-bold text-zinc-900">
            Shop By Category
          </h2>

          <p className="text-gray-600 mt-2">
            Explore premium jewelry collections crafted with elegance.
          </p>
        </div>

      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

        {categories.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            className="group relative overflow-hidden rounded-3xl shadow-xl bg-white"
          >

            {/* Image */}
            <div className="h-80 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

            {/* Content */}
            <div className="absolute bottom-0 p-5 w-full">

              <div className="text-4xl mb-3" >
                {item.icon}
              </div>

              <h3 className="text-white text-2xl font-bold">
                {item.name}
              </h3>

              <button
                onClick={() =>
                  navigate(`/category/${encodeURIComponent(item.name)}`)
                }
                className="mt-4 bg-yellow-500 hover:bg-yellow-400 text-black px-5 py-2 rounded-xl font-semibold transition"
              >
                Explore
              </button>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}