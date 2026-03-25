"use client";
import { useState } from "react";

export default function CartPage() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Gold Necklace",
      price: 2500,
      qty: 1,
    },
    {
      id: 2,
      name: "Diamond Ring",
      price: 2000,
      qty: 1,
    },
  ]);

  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = 500;
  const total = subtotal - discount;

  return (
    <div style={{ padding: "20px", background: "#f9f7f4", minHeight: "100vh" }}>
      <h2>🛒 Elvia Jewels Cart</h2>

      <div style={{ display: "flex", gap: "20px" }}>

        {/* LEFT */}
        <div style={{
          flex: 2,
          background: "#fff",
          padding: "20px",
          borderRadius: "10px"
        }}>
          {cart.map(item => (
            <div key={item.id} style={{
              display: "flex",
              justifyContent: "space-between",
              borderBottom: "1px solid #ddd",
              padding: "15px 0"
            }}>

              <div>
                <h4>{item.name}</h4>
                <p>₹{item.price}</p>

                <div>
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span style={{ margin: "0 10px" }}>{item.qty}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <p
                  onClick={() => removeItem(item.id)}
                  style={{ color: "red", cursor: "pointer" }}
                >
                  Remove
                </p>
              </div>

              <div>
                <strong>₹{item.price * item.qty}</strong>
              </div>

            </div>
          ))}
        </div>

        {/* RIGHT */}
        <div style={{
          flex: 1,
          background: "#fff",
          padding: "20px",
          borderRadius: "10px",
          height: "fit-content"
        }}>
          <h3>Price Summary</h3>

          <p style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </p>

          <p style={{ display: "flex", justifyContent: "space-between" }}>
            <span>Discount</span>
            <span>₹{discount}</span>
          </p>

          <hr />

          <p style={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "bold"
          }}>
            <span>Total</span>
            <span>₹{total}</span>
          </p>

          <button style={{
            width: "100%",
            padding: "10px",
            background: "#C9A646",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}>
            Proceed to Checkout
          </button>
        </div>

      </div>
    </div>
  );
}