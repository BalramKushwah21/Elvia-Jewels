"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

// ⭐ ERROR FREE JEWELLERY HOMEPAGE (Hydration Safe)

const products = [
  {
    id: 1,
    name: "Diamond Ring",
    price: 12999,
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=800",
  },
  {
    id: 2,
    name: "Gold Necklace",
    price: 18499,
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=800",
  },
  {
    id: 3,
    name: "Pearl Earrings",
    price: 6999,
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=800",
  },
  {
    id: 4,
    name: "Luxury Bracelet",
    price: 9499,
    image:
      "https://cdn-media.glamira.com/media/product/newgeneration/view/1/sku/persicum-g/diamond/greendiamond_A/stone2/diamond-Brillant_AAA/alloycolour/yellow.jpg",
  },
];

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ⭐ hydration safe

  const filtered = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#fff5f8]">
      
        

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-10 py-16">
        <div>
          <h2 className="text-5xl font-semibold mb-6">
            Timeless Luxury Jewellery
          </h2>

          <p className="text-gray-600 mb-8">
            Discover handcrafted premium ornaments for weddings and daily
            elegance.
          </p>

          <button className="bg-pink-500 text-white px-10 py-4 rounded-full hover:scale-105 transition">
            Shop Now
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?q=80&w=1000"
          className="rounded-3xl shadow-xl"
          alt="hero"
        />
      </section>

      {/* PRODUCTS */}
      <section className="px-10 pb-20">
        <h3 className="text-3xl font-semibold mb-10">Trending Products</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {filtered.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl p-4 shadow hover:shadow-xl transition"
            >
              <img
                src={p.image}
                className="h-48 w-full object-cover rounded-xl mb-3"
                alt={p.name}
              />

              <p className="font-medium">{p.name}</p>
              <p className="text-pink-500 font-bold mb-3">₹{p.price}</p>

              <Link
                href={`/product/${p.id}`}
                className="block text-center bg-pink-500 text-white py-2 rounded-full"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
}
