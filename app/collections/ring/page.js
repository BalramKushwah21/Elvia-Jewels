"use client";

import styles from "../collection.module.css";
import Image from "next/image";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Serenity Spark Diamond Bracelet",
    price: "₹163,959",
    image: "https://tse1.mm.bing.net/th/id/OIP.Qq1DtTZytXzQ9ml7BcMJWAHaI2?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    id: 2,
    name: "Delicate Spark Bracelet",
    price: "₹123,977",
    image: "https://i.ebayimg.com/images/g/qDMAAOSwdTZhsMFw/s-l1200.jpg",
  },
  {
    id: 3,
    name: "Stardust Petal Bracelet",
    price: "₹500,686",
    image: "https://cdn1.jewelxy.com/live/img/business_product/J0dcQGGRyk_20230805170841.jpg",
  },
  {
    id: 4,
    name: "Diamond Tennis Bracelet",
    price: "₹1,099,756",
    image: "https://assets.myntassets.com/h_200,w_200,c_fill,g_auto/h_1440,q_100,w_1080/v1/assets/images/26276110/2023/12/6/e6991698-9cf7-44d5-a383-e883b41e4a6a1701866952366Bracelet1.jpg",
  },
  {
    id: 5,
    name: "Minimal Gold Bracelet",
    price: "₹89,999",
    image: "https://www.candere.com/media/jewellery/images/C024723_1.jpeg",
  },
  {
    id: 6,
    name: "Elegant Chain Bracelet",
    price: "₹54,999",
    image: "https://m.media-amazon.com/images/I/71V0L5KACIL._AC_SL1500_.jpg",
  },
  {
    id: 7,
    name: "Elegant Chain Bracelet",
    price: "₹54,999",
    image: "https://m.media-amazon.com/images/I/71V0L5KACIL._AC_SL1500_.jpg",
  },
  {
    id: 8,
    name: "Elegant Chain Bracelet",
    price: "₹54,999",
    image: "https://m.media-amazon.com/images/I/71V0L5KACIL._AC_SL1500_.jpg",
  },
  {
    id: 9,
    name: "Elegant Chain Bracelet",
    price: "₹54,999",
    image: "https://m.media-amazon.com/images/I/71V0L5KACIL._AC_SL1500_.jpg",
  },
  {
    id: 10,
    name: "Elegant Chain Bracelet",
    price: "₹54,999",
    image: "https://m.media-amazon.com/images/I/71V0L5KACIL._AC_SL1500_.jpg",
  },
  {
    id: 11,
    name: "Elegant Chain Bracelet",
    price: "₹54,999",
    image: "https://m.media-amazon.com/images/I/71V0L5KACIL._AC_SL1500_.jpg",
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
          <h1 className={styles.title}>Rings</h1>
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
            <Image
              src={item.image}
              alt={item.name}
              width={350}
              height={280}
              className={styles.image}
            />
             {/* ❤️ Wishlist */}
            <button
              className={styles.wishlist}
              onClick={() => toggleWishlist(item.id)}
            >
              {wishlist.includes(item.id) ? "❤️" : "🤍"}
            </button>

            

            

            {/* INFO */}
            <div className={styles.info}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.price}>{item.price}</p>
            </div>
           <button className={styles.addToCart}>Add to Cart</button>

          </div>
        ))}
      </div>
    </div>
  );
}