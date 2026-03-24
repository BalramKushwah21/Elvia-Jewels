"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
    <div className="bg-[#fff6fa] min-h-screen text-gray-800">
      

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-16 px-12 py-20 items-center">
        <div>
          <h2 className="text-6xl font-semibold mb-6 leading-tight">
            Discover Elegant Jewellery Collections
          </h2>

          <p className="text-gray-600 mb-10 text-lg">
            Premium handcrafted ornaments designed for weddings, parties and
            daily luxury styling. Shine with timeless beauty.
          </p>

          <button className="bg-pink-500 text-white px-12 py-4 rounded-full text-lg shadow hover:scale-105 transition">
            Explore Now
          </button>
        </div>

        <img
          src="https://i.pinimg.com/736x/42/89/b7/4289b745029c67cca24790d4ffc1940a.jpg"
          className="rounded-3xl shadow-2xl"
          alt="hero"
        />
      </section>

      {/* CATEGORY SECTION */}
      <section className="px-12 pb-20">
        <h3 className="text-4xl font-semibold mb-12">Shop By Category</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {["Rings", "Necklaces", "Earrings", "Bracelets"].map((c, i) => (
            <div key={i} className="bg-white rounded-2xl p-10 text-center shadow hover:shadow-xl transition cursor-pointer">
              <p className="text-xl font-medium">{c}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="px-12 pb-24">
        <h3 className="text-4xl font-semibold mb-12">Trending Products</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {filtered.map((p) => (
            <div key={p.id} className="bg-white rounded-3xl p-5 shadow hover:shadow-2xl transition">
              <img src={p.img} className="h-56 w-full object-cover rounded-2xl mb-4" alt={p.name} />

              <p className="text-lg font-medium">{p.name}</p>
              <p className="text-pink-500 font-bold text-xl mb-4">₹{p.price}</p>

              <Link href={`/product/${p.id}`} className="block text-center bg-pink-500 text-white py-3 rounded-full">
                View Product
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* OFFER BANNER */}
      <section className="mx-12 mb-24 bg-gradient-to-r from-pink-400 to-pink-600 text-white rounded-3xl p-16 text-center">
        <h3 className="text-4xl font-semibold mb-4">Wedding Collection Sale</h3>
        <p className="text-lg mb-8">Flat 25% OFF on Bridal Jewellery</p>
        <button className="bg-white text-pink-500 px-10 py-4 rounded-full font-medium">
          Shop Now
        </button>
      </section>

      {/* TESTIMONIAL */}
      <section className="px-12 pb-24">
        <h3 className="text-4xl font-semibold mb-12">What Our Customers Say</h3>

        <div className="grid md:grid-cols-3 gap-10">
          {[1,2,3].map(i => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow">
              <p className="text-gray-600 mb-4">Amazing quality jewellery and very fast delivery. Totally loved it!</p>
              <p className="font-semibold">Customer {i}</p>
            </div>
          ))}
        </div>
      </section>

      
    </div>
  );
}
