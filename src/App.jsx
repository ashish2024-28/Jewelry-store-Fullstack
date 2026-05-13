import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route
        path="/category/:categoryName"
        element={<CategoryPage />}
      />

      <Route path="/cart" element={<CartPage />} />

    </Routes>
  );
}

export default App;