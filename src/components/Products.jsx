import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
export function Products() {
  const [product, setProduct] = useState([]);
  const navigate = useNavigate();
  async function fetchData() {
    try {
      let res = await fetch("https://fakestoreapi.com/products");
      let data = await res.json();
      console.log(data);
      setProduct([...data]);
    } catch (error) {
      console.error("Error occurred", error, "Try again...");
    }
  }
  function handleClick(id) {
    navigate(`/products/${id}`);
  }
  useEffect(() => {
    fetchData();
  }, []);
  if (!product) return <h2>Loading...</h2>;
  return (
    <input type="text" value={p} onChange={(e)=>setP(e.target.value)}/>
    <Button>Search</Button>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px",
      }}
    >
      {product.map((pro) => (
        <div key={pro.id}>
          <h2>{pro.title}</h2>
          <img src={pro.image} width="200px" alt="" />
          <p>{pro.price}</p>
          <button onClick={() => handleClick(pro.id)}>View Details</button>
        </div>
      ))}
    </div>
  );
}
