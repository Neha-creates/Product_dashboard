import { Products } from "./components/Products";
import { Routes, Route } from "react-router-dom";
import "./styles.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { ProductDetails } from "./components/ProductDetails";
import Cart from "./components/Cart";
import { Add } from "./components/Add";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/add" element={<Add />} />
          <Route
            path="*"
            element={<h1>Unknown: 404 Error, Page not found</h1>}
          />
        </Routes>
      </div>
    </>
  );
}
