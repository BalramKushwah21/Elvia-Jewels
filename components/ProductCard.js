import React from "react";

export default function ProductCard({ product }) {
  return (
    <article style={{ border: "1px solid #ddd", borderRadius: 12, padding: 16, textAlign: "center" }}>
      <img src={product.image} alt={product.name} style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 10 }} />
      <h3 style={{ margin: "12px 0 8px" }}>{product.name}</h3>
      <p style={{ margin: "0 0 8px", color: "#666" }}>${(product.price / 100).toFixed(2)}</p>
      <button style={{ padding: "8px 14px", border: "none", borderRadius: 8, background: "#b12c6f", color: "white", cursor: "pointer" }}>
        Add to cart
      </button>
    </article>
  );
}
