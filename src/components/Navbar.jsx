import {
  FaSearch,
  FaShoppingCart,
  FaHeart,
  FaUserCircle,
} from "react-icons/fa";

import { useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";

export default function Navbar() {

  const navigate = useNavigate();

  const { cartItems } = useCart();

  return (
    <nav className="bg-black text-white px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-lg">

      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center font-bold text-black text-xl">
          J
        </div>

        <h1 className="text-2xl font-bold text-yellow-400">
          JewelMart
        </h1>
      </div>

      {/* Search */}
      <div className="hidden md:flex bg-white rounded-xl overflow-hidden w-[40%]">

        <input
          type="text"
          placeholder="Search jewelry..."
          className="w-full px-4 py-2 outline-none text-black"
        />

        <button className="bg-yellow-500 px-5 text-black">
          <FaSearch />
        </button>

      </div>

      {/* Icons */}
      <div className="flex items-center gap-6 text-xl">

        <FaHeart className="cursor-pointer hover:text-yellow-400 transition" />

        {/* Cart */}
        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >

          <FaShoppingCart className="hover:text-yellow-400 transition" />

          {/* Cart Count */}
          <span className="absolute -top-3 -right-3 bg-yellow-500 text-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
            {cartItems.length}
          </span>

        </div>

        <FaUserCircle className="cursor-pointer hover:text-yellow-400 transition" />

      </div>
    </nav>
  );
}