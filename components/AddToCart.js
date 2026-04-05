"use client";

export default function AddToCart({ productId }) {
  const add = async () => {
    await fetch("/api/cart/add", {
      method: "POST",
      body: JSON.stringify({ productId }),
    });

    alert("Added to cart");
  };

  return <button onClick={add}>Add to Cart</button>;
}