// app/home/cart/page.js

"use client";
import CheckoutButton from "./payButton";
import { useEffect, useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([]);

useEffect(() => {
  fetch("/api/cart/get")
    .then(async (res) => {
      const text = await res.text();

      try {
        return JSON.parse(text);
      } catch {
        console.error("Invalid JSON:", text);
        return null;
      }
    })
    .then((data) => {
      setCart(data?.items || []);
    })
    .catch((err) => {
      console.error("Fetch error:", err);
    });
}, []);

  let total = 0;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>

      {cart.map(item => {
        total += item.price * item.quantity;

        return (
          <div key={item.id}>
            <p>{item.productId}</p>
            <p>Qty: {item.quantity}</p>
          </div>
        );
      })}

      <h2>Total: ₹{total}</h2>

      <CheckoutButton amount={total} />
    </div>
  );
}