import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
export function ProductDetails() {
  const { id } = useParams();
  const [pro, setPro] = useState([]);
  async function showPro() {
    let res = await fetch(`https://fakestoreapi.com/products/${id}`);
    let data = await res.json();
    console.log(data);
    setPro([...data]);
  }
  useEffect(() => {
    showPro();
  }, []);
  if (!pro) return <h1>Loading...</h1>;
  return (
    <>
      <h2>Poduct Details</h2>
      {pro.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.image} width="200px" alt="" />
          <p>{product.description}</p>
          <h3>{product.price}</h3>
        </div>
      ))}
    </>
  );
}
