"use client";

import styles from "./cart.module.css";
import Image from "next/image";
import { useState } from "react";

const initialItems = [
  {
    id: 1,
    name: "Diamond Bracelet",
    price: 1644,
    oldPrice: 2499,
    image: "/images/b1.png",
    qty: 1,
  },
  {
    id: 2,
    name: "Gold Anklet",
    price: 899,
    oldPrice: 1299,
    image: "/images/a1.png",
    qty: 1,
  },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialItems);

  const updateQty = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: type === "inc" ? item.qty + 1 : Math.max(1, item.qty - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Shopping Cart</h2>

      {cartItems.map((item) => (
        <div key={item.id} className={styles.card}>
          
          {/* LEFT IMAGE */}
          <div className={styles.imageBox}>
            <Image
              src={item.image}
              alt={item.name}
              width={120}
              height={120}
            />
          </div>

          {/* CENTER DETAILS */}
          <div className={styles.details}>
            <h3>{item.name}</h3>
            <p className={styles.stock}>In stock</p>

            <p className={styles.delivery}>
              Free delivery available
            </p>

            {/* QUANTITY */}
            <div className={styles.qty}>
              <button onClick={() => updateQty(item.id, "dec")}>−</button>
              <span>{item.qty}</span>
              <button onClick={() => updateQty(item.id, "inc")}>+</button>
            </div>

            <div className={styles.actions}>
              <button onClick={() => removeItem(item.id)}>Delete</button>
              <span>|</span>
              <button>Save for later</button>
            </div>
          </div>

          {/* RIGHT PRICE */}
          <div className={styles.price}>
            <p className={styles.newPrice}>₹{item.price}</p>
            <p className={styles.oldPrice}>₹{item.oldPrice}</p>
            <p className={styles.discount}>
              {Math.round(
                ((item.oldPrice - item.price) / item.oldPrice) * 100
              )}
              % off
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}