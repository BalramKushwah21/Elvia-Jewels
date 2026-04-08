"use client";
import { useState } from "react";
import styles from "./add-products.module.css";
export default function AddProduct() {
  const [form, setForm] = useState({
    category: "",
    color: "",
    gender: "",
    name: "",
    description: "",
    price: "",
    stock: "",
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
    <div className={styles.formgrid}>
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Price"
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />

      <input
        placeholder="Stock"
        onChange={(e) => setForm({ ...form, stock: e.target.value })}
      />

      <input
        placeholder="Image URL"
        onChange={(e) => setForm({ ...form, image: e.target.value })}
      />

      <input
        placeholder="Category"
        onChange={(e) => setForm({ ...form, category: e.target.value })}
      />

      <input
        placeholder="Color"
        onChange={(e) => setForm({ ...form, color: e.target.value })}
      />
    <div className={styles.genderBox}>
      <label>
         Male
        <input type="radio" name="gender" value="male" onChange={(e) => setForm({ ...form, gender: e.target.value })}/>
       
      </label>

      <label>
        Female
        <input type="radio" name="gender" value="female" onChange={(e) => setForm({ ...form, gender: e.target.value })} />
        
      
      </label>
    </div>
    

      <textarea
        placeholder="Description"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
  
  </div>
      <button onClick={submit}>Add</button>
    </div>
  );
}
