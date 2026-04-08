"use client";

export default function AddToCart({ productId }) {
  const handleClick = async () => {
    const res = await fetch("/api/cart/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Added to cart ✅");
    } else {
      alert(data.error);
    }
  };

  return <button onClick={handleClick}>Add to Cart</button>;
}