"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import "./store.css";

// ⭐ ULTRA LONG PREMIUM JEWELLERY HOMEPAGE (Error Safe + Professional)

const products = [
  { id: 1, name: "Diamond Ring", price: 12999, img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800" },
  { id: 2, name: "Gold Necklace", price: 18499, img: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=800" },
  { id: 3, name: "Pearl Earrings", price: 6999, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwCNHs5Hns3ihk0LA-DoNI2wbHaZkvPLLotQ&s" },
  { id: 4, name: "Luxury Bracelet", price: 9499, img: "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/persicum-g/diamond/greendiamond_A/stone2/diamond-Brillant_AAA/alloycolour/yellow.jpg" },
  { id: 5, name: "Wedding Set", price: 25999, img: "https://nikharjewellery.in/wp-content/uploads/2023/12/msg5835025336-9348.jpg" },
  { id: 6, name: "Rose Gold Ring", price: 8999, img: "https://images.unsplash.com/photo-1603561596112-0a132b757442?q=80&w=800" },
  { id: 7, name: "Luxury Pendant", price: 10999, img: "https://salty.co.in/cdn/shop/files/NS11592_Vday.png?v=1773958035" },
  { id: 8, name: "Silver Anklet", price: 3999, img: "https://rukminim2.flixcart.com/image/300/300/xif0q/anklet/u/y/j/na-na-2-anklet253-shreeji-baroda-anant-fashion-original-imahd74zfkgyxbqn.jpeg" },
];

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="store-page">
      

      {/* HERO */}
      <section className="hero">
        <div>
          <h2 className="hero-title">
            Discover Elegant Jewellery Collections
          </h2>

          <p className="hero-subtitle">
            Premium handcrafted ornaments designed for weddings, parties and
            daily luxury styling. Shine with timeless beauty.
          </p>

          <button className="btn btn-primary">
            Explore Now
          </button>
        </div>

        <img
          src="https://i.pinimg.com/736x/42/89/b7/4289b745029c67cca24790d4ffc1940a.jpg"
          className="hero-image"
          alt="hero"
        />
      </section>

      {/* CATEGORY SECTION */}
      <section className="category-section">
        <h3 className="section-title">Shop By Category</h3>

        <div className="category-grid">
          {["Rings", "Necklaces", "Earrings", "Bracelets"].map((c, i) => (
            <div key={i} className="category-card">
              <p className="category-label">{c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section">
        <h3 className="section-title">Trending Products</h3>

        <div className="products-grid">
          {filtered.map((p) => (
            <div key={p.id} className="product-card">
              <img src={p.img} className="product-image" alt={p.name} />

              <p className="product-name">{p.name}</p>
              <p className="product-price">₹{p.price}</p>

              <Link href={`/product/${p.id}`} className="btn btn-primary btn-block">
                View Product
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* OFFER BANNER */}
      <section className="offer-banner">
        <h3 className="offer-title">Wedding Collection Sale</h3>
        <p className="offer-subtitle">Flat 25% OFF on Bridal Jewellery</p>
        <button className="btn btn-outline">
          Shop Now
        </button>
      </section>

      {/* TESTIMONIAL */}
      <section className="testimonial-section">
        <h3 className="section-title">What Our Customers Say</h3>

        <div className="testimonial-grid">
          {[1,2,3].map(i => (
            <div key={i} className="testimonial-card">
              <p className="testimonial-text">Amazing quality jewellery and very fast delivery. Totally loved it!</p>
              <p className="testimonial-author">Customer {i}</p>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
}
