"use client";
import { useState } from "react";
import styles from "./add-products.module.css";
export default function AddProduct() {
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const submit = async () => {
    await fetch("/api/products/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    alert("Product added!");
  };

  return (
    <div className={styles.container}>
      <h2>Add Product</h2>

      <input placeholder="Name"
        onChange={e => setForm({...form, name: e.target.value})} />

      <input placeholder="Price"
        onChange={e => setForm({...form, price: e.target.value})} />

      <input placeholder="Image URL"
        onChange={e => setForm({...form, image: e.target.value})} />

      <textarea placeholder="Description"
        onChange={e => setForm({...form, description: e.target.value})} />

      <button onClick={submit}>Add</button>
    </div>
  );
}