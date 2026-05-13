export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-10 px-6">

      <div className="grid md:grid-cols-4 gap-8">

        <div>
          <h2 className="text-yellow-400 text-2xl font-bold mb-4">
            JewelMart
          </h2>

          <p>
            Premium luxury jewelry store with elegant collections.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2">
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">
            Categories
          </h3>

          <ul className="space-y-2">
            <li>Rings</li>
            <li>Bracelets</li>
            <li>Earrings</li>
            <li>Necklaces</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold mb-3">
            Contact
          </h3>

          <p>Email: supportxxxx@jewelmart.com</p>
          <p>Phone: +91 98765xxxxx</p>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center">
        © 2026 JewelMart. All rights reserved.
      </div>
    </footer>
  );
}