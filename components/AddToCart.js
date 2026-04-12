"use client";
import { useState } from "react";
import styles from "@/components/AddToCart.module.css";

export default function AddToCart({ productId }) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, quantity: 1 }),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        throw new Error("Server error (invalid response)");
      }

      if (!res.ok) {
        console.error("SERVER ERROR:", data);
        throw new Error(data.error || "Failed to add to cart");
      }

      alert("Added to cart ✅");
    } catch (err) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className={styles.AddToCartBtn}
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? "Adding..." : "Add to Cart"}
    </button>
  );
}