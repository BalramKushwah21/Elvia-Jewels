"use client";

import styles from "./bracelet.module.css";
import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Serenity Spark Diamond Bracelet",
    price: "₹163,959",
    image: "/images/b1.png",
  },
  {
    id: 2,
    name: "Delicate Spark Bracelet",
    price: "₹123,977",
    image: "/images/b2.png",
  },
  {
    id: 3,
    name: "Stardust Petal Bracelet",
    price: "₹500,686",
    image: "/images/b3.png",
  },
  {
    id: 4,
    name: "Diamond Tennis Bracelet",
    price: "₹1,099,756",
    image: "/images/b4.png",
  },
  {
    id: 5,
    name: "Minimal Gold Bracelet",
    price: "₹89,999",
    image: "/images/b5.png",
  },
  {
    id: 6,
    name: "Elegant Chain Bracelet",
    price: "₹54,999",
    image: "/images/b6.png",
  },
];

export default function BraceletsPage() {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className={styles.wrapper}>

      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Bracelets</h1>
          <p className={styles.subtitle}>
            Where elegance meets sparkle
          </p>
        </div>
      </section>

      {/* TOP BAR */}
      <div className={styles.topBar}>
        <span className={styles.sortText}>
          New Arrival | Price Low to High | Price High to Low
        </span>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {products.map((item) => (
          <div className={styles.card} key={item.id}>

            {/* ❤️ Wishlist */}
            <button
              className={styles.wishlist}
              onClick={() => toggleWishlist(item.id)}
            >
              {wishlist.includes(item.id) ? "❤️" : "🤍"}
            </button>

            {/* IMAGE */}
            <div className={styles.imageWrapper}>
              <Image
                src="https://th.bing.com/th/id/OIP.hXWwNOQw15ZVWKlMs-xv0wHaFQ?w=275&h=195&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
                alt={item.name}
                width={280}
                height={280}
                className={styles.image}
              />
            </div>

            {/* INFO */}
            <div className={styles.info}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.price}>{item.price}</p>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}