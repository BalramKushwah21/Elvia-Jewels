
"use client";
import { useState } from "react";
import styles from "./cart.module.css";

export default function CartPage() {

  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Gold Necklace",
      price: 2500,
      qty: 1,
      img: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?q=80&w=500"
    },
    {
      id: 2,
      name: "Diamond Ring",
      price: 1800,
      qty: 1,
      img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=500"
    },
    {
      id: 3,
      name: "Luxury Bracelet",
      price: 1500,
      qty: 1,
      img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=500"
    }
  ]);

  const changeQty = (id, val) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        let newQty = item.qty + val;
        if (newQty < 1) newQty = 1;
        return { ...item, qty: newQty };
      }
      return item;
    }));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const gst = 200;
  const total = subtotal + gst;

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* LEFT SIDE */}
        <div style={styles.left}>

          {/* Steps */}
          <div style={styles.steps}>
            <span style={styles.active}>🛒 Cart</span>
            <span>Checkout</span>
            <span>Order</span>
          </div>

          {/* Items */}
          {cart.map(item => (
            <div key={item.id} style={styles.item}>

              <img src={item.img} style={styles.img} />

              <div style={styles.details}>
                <h4>{item.name}</h4>
                <p style={{ color: "gray" }}>Premium Jewelry</p>
              </div>

              {/* Quantity */}
              <div style={styles.qty}>
                <button style={styles.qtyBtn} onClick={() => changeQty(item.id, -1)}>-</button>
                <span>{item.qty}</span>
                <button style={styles.qtyBtn} onClick={() => changeQty(item.id, 1)}>+</button>
              </div>

              {/* Price */}
              <div style={styles.price}>
                ₹{item.price * item.qty}
              </div>

            </div>
          ))}

        </div>

        {/* RIGHT SIDE */}
        <div style={styles.right}>
          <h3>Elvia Jewels</h3>

          <div style={styles.row}>
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div style={styles.row}>
            <span>GST</span>
            <span>₹{gst}</span>
          </div>

          <div style={styles.total}>
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button style={styles.checkout}>
            Place Order 💎
          </button>
        </div>

      </div>
    </div>
  );
}



