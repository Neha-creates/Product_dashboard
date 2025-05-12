import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(5,1fr)",
        gap: "10px",
        margin: "10px",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/add">Add</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}
