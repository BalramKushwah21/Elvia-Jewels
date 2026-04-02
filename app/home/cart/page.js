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
    image: "https://i.pinimg.com/1200x/0f/20/5b/0f205bc5d36dd7f447e6067aae575b8c.jpg",
    qty: 1,
  },
  {
    id: 2,
    name: "Gold Anklet",
    price: 899,
    oldPrice: 1299,
    image: "https://kinclimg5.bluestone.com/f_webp,c_scale,w_1024,b_rgb:f0f0f0/giproduct/BIKB0818A28_RAA18DIG6XXXXXXXX_ABCD00-PICS-00000-1024-81292.png",
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
          
          {/* IMAGE */}
          <div className={styles.imageBox}>
            <Image
              src={item.image}
              alt={item.name}
              width={90}
              height={90}
            />
          </div>

          {/* CONTENT */}
          <div className={styles.content}>

            {/* TOP */}
            <div className={styles.topRow}>
              <div>
              <h3 className={styles.title}>{item.name}</h3>
                <p className={styles.stock}>In stock</p>
              <p className={styles.delivery}>Free delivery available</p>
              </div>

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

            {/* QTY */}
            <div className={styles.qty}>
              <button onClick={() => updateQty(item.id, "dec")}>−</button>
              <span>{item.qty}</span>
              <button onClick={() => updateQty(item.id, "inc")}>+</button>
            </div>

            {/* ACTIONS */}
            <div className={styles.actions}>
              <button onClick={() => removeItem(item.id)}>Delete</button>
              <span>|</span>
              <button>Save for later</button>
            </div>

          </div>
        </div>
      ))}
    </div>
  );
}