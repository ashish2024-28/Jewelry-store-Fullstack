import { motion } from "framer-motion";
import { FaGem, FaGoogle, FaFacebookF } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-yellow-950 flex items-center justify-center px-4">

      {/* Background Glow */}
      <div className="absolute w-96 h-96 bg-yellow-500/20 blur-3xl rounded-full top-10 left-10"></div>
      <div className="absolute w-80 h-80 bg-pink-500/10 blur-3xl rounded-full bottom-10 right-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Card */}
        <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8">

          {/* Logo */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-6"
          >
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 p-4 rounded-full shadow-lg">
              <FaGem className="text-3xl text-black" />
            </div>
          </motion.div>

          {/* Heading */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white">
              Luxury Jewelry
            </h1>

            <p className="text-gray-300 mt-2">
              Welcome back to elegance ✨
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">

            <div>
              <label className="text-gray-300 text-sm">Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full mt-2 px-4 py-3 rounded-xl bg-white/10 border border-gray-600 text-white outline-none focus:border-yellow-400 transition"
              />
            </div>

            <div>
              <label className="text-gray-300 text-sm">Password</label>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full mt-2 px-4 py-3 rounded-xl bg-white/10 border border-gray-600 text-white outline-none focus:border-yellow-400 transition"
              />
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <button
                type="button"
                className="text-yellow-400 text-sm hover:text-yellow-300 transition"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-bold shadow-lg hover:shadow-yellow-500/40 transition"
            >
              Login
            </motion.button>

          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-[1px] bg-gray-600"></div>
            <p className="text-gray-400 text-sm">OR</p>
            <div className="flex-1 h-[1px] bg-gray-600"></div>
          </div>

          {/* Social Login */}
          <div className="flex gap-4">

            <button className="flex-1 py-3 rounded-xl bg-white/10 border border-gray-600 text-white flex items-center justify-center gap-2 hover:bg-white/20 transition">
              <FaGoogle />
              Google
            </button>

            <button className="flex-1 py-3 rounded-xl bg-white/10 border border-gray-600 text-white flex items-center justify-center gap-2 hover:bg-white/20 transition">
              <FaFacebookF />
              Facebook
            </button>

          </div>

          {/* Create Account */}
          <div className="text-center mt-7">
            <p className="text-gray-300">
              Don’t have an account?{" "}
              <span className="text-yellow-400 cursor-pointer hover:text-yellow-300">
                Create Account
              </span>
            </p>
          </div>

        </div>
      </motion.div>
    </div>
  );
}