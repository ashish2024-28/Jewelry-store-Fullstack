import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { useCart } from "../context/CartContext";

export default function CartPage() {

  const {
    cartItems,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCart();

  // Payment
  const [paymentMethod, setPaymentMethod] =
    useState("Cash On Delivery");

  // Order
  const [orderPlaced, setOrderPlaced] =
    useState(false);

  // Coupon
  const [couponCode, setCouponCode] =
    useState("");

  const [couponDiscount, setCouponDiscount] =
    useState(0);

  // GST
  const gstRate = 0.18;

  // Subtotal
  const subtotal = cartItems.reduce((acc, item) => {

    const price = Number(
      item.price.replace("₹", "").replace(",", "")
    );

    return acc + price * item.quantity;

  }, 0);

  // GST Amount
  const gst = Math.floor(subtotal * gstRate);

  // Delivery
  const deliveryCharge =
    subtotal > 0 ? 99 : 0;

  // Normal Discount
  const discount =
    subtotal > 10000 ? 500 : 0;


  const orderDate = new Date().toLocaleDateString();

  // Apply Coupon
  const applyCoupon = () => {

    if (couponCode === "JEWEL500") {

      setCouponDiscount(500);

      alert("Coupon Applied Successfully");

    } else if (couponCode === "GOLD1000") {

      setCouponDiscount(1000);

      alert("Coupon Applied Successfully");

    } else {

      setCouponDiscount(0);

      alert("Invalid Coupon Code");
    }
  };

  // Final Total
  const total =
    subtotal +
    gst +
    deliveryCharge -
    discount -
    couponDiscount;

  // Place Order
  const handlePlaceOrder = () => {

    if (cartItems.length === 0) {

      alert("Cart is Empty");
      return;
    }

    setOrderPlaced(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-zinc-100 min-h-screen">

      <Navbar />

      {/* Banner */}
      <div className="bg-black text-white py-10 text-center px-4">

        <h1 className="text-3xl md:text-5xl font-bold text-yellow-400">
          Shopping Cart
        </h1>

      </div>

      {/* Success */}
      {/* Invoice */}
      {orderPlaced && (

        <div className="max-w-5xl mx-auto mt-10 bg-white rounded-3xl shadow-2xl overflow-hidden">

          {/* Header */}
          <div className="bg-black text-white p-8 flex flex-col md:flex-row justify-between gap-4">

            <div>

              <h2 className="text-4xl font-bold text-yellow-400">
                JewelMart Invoice
              </h2>

              <p className="mt-2 text-zinc-300">
                Thank you for shopping with us ❤️
              </p>

            </div>

            <div className="text-right">

              <p className="text-lg">
                Order Date: {orderDate}
              </p>

              <p className="text-lg mt-2">
                Payment: {paymentMethod}
              </p>

              <p className="text-lg mt-2">
                Status:
                <span className="text-green-400 font-bold ml-2">
                  Paid
                </span>
              </p>

            </div>

          </div>

          {/* Products */}
          <div className="p-6 overflow-x-auto">

            <table className="w-full">

              <thead>

                <tr className="border-b text-left">

                  <th className="py-4 text-lg">
                    Product
                  </th>

                  <th className="py-4 text-lg">
                    Price
                  </th>

                  <th className="py-4 text-lg">
                    Qty
                  </th>

                  <th className="py-4 text-lg">
                    Total
                  </th>

                </tr>

              </thead>

              <tbody>

                {cartItems.map((item) => {

                  const price = Number(
                    item.price.replace("₹", "").replace(",", "")
                  );

                  return (

                    <tr
                      key={item.id}
                      className="border-b"
                    >

                      {/* Product */}
                      <td className="py-5 flex items-center gap-4">

                        <img
                          src={item.image}
                          alt=""
                          className="w-20 h-20 rounded-xl object-cover"
                        />

                        <span className="font-semibold text-lg">
                          {item.name}
                        </span>

                      </td>

                      {/* Price */}
                      <td className="font-semibold">
                        ₹{price}
                      </td>

                      {/* Qty */}
                      <td className="font-semibold">
                        {item.quantity}
                      </td>

                      {/* Total */}
                      <td className="font-bold text-yellow-600">
                        ₹{price * item.quantity}
                      </td>

                    </tr>
                  );
                })}

              </tbody>

            </table>

            {/* Bill Summary */}
            <div className="mt-10 max-w-md ml-auto space-y-4">

              <div className="flex justify-between text-lg">

                <span>Subtotal</span>

                <span>₹{subtotal}</span>

              </div>

              <div className="flex justify-between text-lg">

                <span>GST (18%)</span>

                <span>₹{gst}</span>

              </div>

              <div className="flex justify-between text-lg">

                <span>Delivery Charge</span>

                <span>₹{deliveryCharge}</span>

              </div>

              <div className="flex justify-between text-lg text-green-600">

                <span>Discount</span>

                <span>- ₹{discount}</span>

              </div>

              <div className="flex justify-between text-lg text-green-600">

                <span>Coupon Discount</span>

                <span>- ₹{couponDiscount}</span>

              </div>

              <div className="border-t pt-5 flex justify-between text-3xl font-bold">

                <span>Grand Total</span>

                <span className="text-yellow-600">
                  ₹{total}
                </span>

              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <button
                onClick={() => window.print()}
                className="bg-black hover:bg-zinc-800 text-white px-8 py-4 rounded-2xl text-lg font-bold transition"
              >
                Download Invoice
              </button>

              <Link to="/">

                <button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-2xl text-lg font-bold transition">

                  Continue Shopping

                </button>

              </Link>

            </div>

          </div>

        </div>
      )}

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
       

        {/* Left Side */}
        <div className="lg:col-span-2 space-y-6">


          {cartItems.length === 0 ? (

            <div className="bg-white rounded-3xl shadow-lg p-10 text-center">

              <h2 className="text-3xl md:text-4xl font-bold">
                Your Cart is Empty 🛒
              </h2>

              <p className="text-gray-500 mt-4 text-lg">
                Looks like you have not added any jewelry yet.
              </p>

              {/* Shop Now */}
              <Link to="/">

                <button className="mt-8 bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-2xl text-xl font-bold transition">

                  Shop Now

                </button>

              </Link>


            </div>


          ) : (


            cartItems.map((item) => (

              <div
                key={item.id}
                className="bg-white rounded-3xl shadow-lg p-5 flex flex-col sm:flex-row gap-5"
              >

                {/* Image */}
                <img
                  src={item.image}
                  alt=""
                  className="w-full sm:w-40 h-52 sm:h-40 object-cover rounded-2xl"
                />

                {/* Info */}
                <div className="flex-1">

                  <h2 className="text-2xl font-bold">
                    {item.name}
                  </h2>

                  <p className="text-yellow-600 text-2xl font-bold mt-2">
                    {item.price}
                  </p>

                  {/* Quantity */}
                  <div className="flex items-center gap-4 mt-5">

                    {/* Minus */}
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 text-white text-2xl font-bold transition"
                    >
                      -
                    </button>

                    {/* Quantity */}
                    <span className="text-2xl font-bold min-w-[30px] text-center">
                      {item.quantity}
                    </span>

                    {/* Plus */}
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white text-2xl font-bold transition"
                    >
                      +
                    </button>

                  </div>

                  {/* Remove */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="mt-6 bg-black hover:bg-red-500 text-white px-6 py-3 rounded-xl font-semibold transition"
                  >
                    Remove
                  </button>

                </div>
                

              </div>
            ))
          )}
 {/* Continue Shopping */}
        <Link to="/">

          <button className="mt-6 mr-4 bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-xl font-semibold transition">

            Shop More

          </button>

        </Link>
        </div>

        {/* Right Side Bill */}
        <div>

          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 sticky top-24">

            <h2 className="text-2xl md:text-3xl font-bold border-b pb-5">
              Price Details
            </h2>

            {/* Subtotal */}
            <div className="flex justify-between mt-6 text-lg">

              <span>Subtotal</span>

              <span>₹{subtotal}</span>

            </div>

            {/* GST */}
            <div className="flex justify-between mt-4 text-lg">

              <span>GST (18%)</span>

              <span>₹{gst}</span>

            </div>

            {/* Delivery */}
            <div className="flex justify-between mt-4 text-lg">

              <span>Delivery Charge</span>

              <span>₹{deliveryCharge}</span>

            </div>

            {/* Discount */}
            <div className="flex justify-between mt-4 text-lg text-green-600">

              <span>Discount</span>

              <span>- ₹{discount}</span>

            </div>

            {/* Coupon Discount */}
            <div className="flex justify-between mt-4 text-lg text-green-600">

              <span>Coupon Discount</span>

              <span>- ₹{couponDiscount}</span>

            </div>

            {/* Coupon Input */}
            <div className="mt-6">

              <h3 className="font-bold text-lg mb-3">
                Apply Coupon
              </h3>

              <div className="flex gap-3">

                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) =>
                    setCouponCode(e.target.value)
                  }
                  className="flex-1 border-2 border-zinc-300 rounded-xl px-4 py-3 outline-none focus:border-yellow-500"
                />

                <button
                  onClick={applyCoupon}
                  className="bg-black hover:bg-yellow-500 hover:text-black text-white px-5 rounded-xl font-semibold transition"
                >
                  Apply
                </button>

              </div>

              <p className="text-sm text-gray-500 mt-3">
                Try: JEWEL500 or GOLD1000
              </p>

            </div>

            {/* Divider */}
            <div className="border-t my-6"></div>

            {/* Total */}
            <div className="flex justify-between text-2xl md:text-3xl font-bold">

              <span>Total</span>

              <span className="text-yellow-600">
                ₹{total}
              </span>

            </div>

            {/* Payment */}
            <div className="mt-8">

              <h3 className="text-2xl font-bold mb-4">
                Payment Method
              </h3>

              {/* COD */}
              <label className="flex items-center gap-3 bg-zinc-100 p-4 rounded-2xl cursor-pointer">

                <input
                  type="radio"
                  checked={
                    paymentMethod ===
                    "Cash On Delivery"
                  }
                  onChange={() =>
                    setPaymentMethod(
                      "Cash On Delivery"
                    )
                  }
                />

                <span className="font-semibold">
                  Cash On Delivery
                </span>

              </label>

              {/* Online */}
              <label className="flex items-center gap-3 bg-zinc-100 p-4 rounded-2xl cursor-pointer mt-4">

                <input
                  type="radio"
                  checked={
                    paymentMethod ===
                    "Online Payment"
                  }
                  onChange={() =>
                    setPaymentMethod(
                      "Online Payment"
                    )
                  }
                />

                <span className="font-semibold">
                  Online Payment
                </span>

              </label>

            </div>

            {/* Savings */}
            <p className="text-green-600 font-semibold mt-6">
              You saved ₹
              {discount + couponDiscount}
              {" "}on this order 🎉
            </p>

            {/* Order Button */}
            <button
              onClick={handlePlaceOrder}
              className="w-full mt-8 bg-yellow-500 hover:bg-yellow-400 text-black py-4 rounded-2xl text-xl font-bold transition"
            >
              Place Order
            </button>

          </div>

        </div>

      </div>

      <Footer />

    </div>
  );
}