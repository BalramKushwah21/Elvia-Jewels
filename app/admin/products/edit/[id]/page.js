"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import styles from "./id.module.css";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export default function EditProduct() {
  const { id } = useParams();
  const router = useRouter();

  const [product, setProduct] = useState({
    category: "",
    color: "",
    gender: "",
    name: "",
    description: "",
    price: "",
    stock: "",
    image: "",
  });

  

  // ✅ Fetch product
  useEffect(() => {
    async function fetchProduct() {
      const res = await fetch(`/api/products/${id}`);
      const data = await res.json();

      setProduct({
        image: data.image || "",
        name: data.name || "",
        price: data.price || "",
        description: data.description || "",
        image: data.image || "",
        category: data.category || "",
        color: data.color || "",
        gender: data.gender || "",
        stock: data.stock || "",
      });
    }

    if (id) fetchProduct();
  }, [id]);

  // ✅ Update
  async function handleUpdate(e) {
    e.preventDefault();

    const res = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    if (!res.ok) {
      alert("Update failed ❌");
      return;
    }

    alert("Product updated ✅");
    router.push("/admin/products");
  }

  // ✅ Delete
  async function handleDelete() {
    const confirmDelete = confirm("Are you sure?");
    if (!confirmDelete) return;

    const res = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      alert("Delete failed ❌");
      return;
    }

    alert("Product deleted 🗑️");
    router.push("/admin/products");
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Edit Product</h1>
  
      <form onSubmit={handleUpdate} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          value={product.name}
          onChange={(e) =>
            setProduct({ ...product, name: e.target.value })
          }
          placeholder="Name"
        />

        <input
          className={styles.priceInput}
          type="number"
          value={product.price}
          onChange={(e) =>
            setProduct({ ...product, price: Number(e.target.value) })
          }
          placeholder="Price"
        />

        <textarea
        
          className={styles.textarea}
          value={product.description}
          onChange={(e) =>
            setProduct({ ...product, description: e.target.value })
          }
          placeholder="Description"
        />

        <input
          className={styles.input}
          type="text"
          value={product.image}
          onChange={(e) =>
            setProduct({ ...product, image: e.target.value })
          }
          placeholder="Image URL"
        />

        <input
          className={styles.input}
          type="text"
          value={product.category}
          onChange={(e) =>
            setProduct({ ...product, category: e.target.value })
          }
          placeholder="Category"
        />

        <input
          className={styles.input}
          type="text"
          value={product.color}
          onChange={(e) =>
            setProduct({ ...product, color: e.target.value })
          }
          placeholder="Color"
        />

        <input
          className={styles.input}
          type="text"
          value={product.gender}
          onChange={(e) =>
            setProduct({ ...product, gender: e.target.value })
          }
          placeholder="Gender"
        />

        <input
          className={styles.input}
          type="number"
          value={product.stock}
          onChange={(e) =>
            setProduct({ ...product, stock: Number(e.target.value) })
          }
          placeholder="Stock"
        />

        <button type="submit" className={styles.updateButton}>
          Update Product
        </button>
      </form>

      <button onClick={handleDelete} className={styles.deleteButton}>
        Delete Product
      </button>
    </div>
  );
}
<div className={styles.imageBox}>
  <Image
    src={products.image}
    alt={product.name}
    width={200}
    height={200}
    className={styles.image}
  />
</div>
