"use client";
import { useState } from "react";
import styles from "@/components/AddToCart.module.css";
import { addToGuestCart } from "@/lib/cart";
import { useSession } from "next-auth/react";

export default function AddToCart({ productId }) {
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();

  const handleClick = async () => {
    try {
      setLoading(true);

      // 🧠 If NOT logged in → use local cart
      if (!session) {
        addToGuestCart(productId, 1);
        alert("Added to cart (guest) 🛒");
        return;
      }

      // 🔐 Logged-in → DB cart
      const res = await fetch("/api/cart/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ productId, quantity: 1 }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      alert("Added to cart ✅");
    } catch (err) {
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
