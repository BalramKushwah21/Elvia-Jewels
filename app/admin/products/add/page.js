"use client";
import { useState } from "react";
 import styles from "./add.module.css";
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
    body: JSON.stringify(form), // ✅ FIXED
  });

  alert("Product added!");
};
  

  return (
    <div className={styles.container}>
      <div className={styles.pageBg}></div>
      <h2>Add Product</h2>
    <div className={styles.formgrid}>
      <div className={styles.inputBox}>
        <label> 👤Name</label>
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        required
      />
      </div>
        <div className={styles.inputBox}>
        <label> 💰Price</label>
      <input
        placeholder="Price"
        onChange={(e) => setForm({ ...form, price: e.target.value })}
        required
      />
      </div>
      <div className={styles.inputBox}>
        <label> 📦Stock</label>                              
      <input
        placeholder="Stock"
        onChange={(e) => setForm({ ...form, stock: e.target.value })}
        required
      />
      </div>
      <div className={styles.inputBox}>
        <label> 🖼️Image URL</label>

      <input
        placeholder="Image URL"
        onChange={(e) => setForm({ ...form, image: e.target.value })}
        required
      />
      </div>    
        <div className={styles.inputBox}>
        <label> 🏷️Category</label>

      <input
        placeholder="Category"
        onChange={(e) => setForm({ ...form, category: e.target.value })}
        required
      />
      </div>

      <div className={styles.inputBox}>
        <label> 🎨Color</label>
      <input
        placeholder="Color"
        onChange={(e) => setForm({ ...form, color: e.target.value })}
      />
      </div>
      <div className={styles.inputBox}>
        <label> 🧍Gender</label>
    <div className={styles.genderBox}>
      <label> 
         Male
        <input type="radio" name="gender" value="male" onChange={(e) => setForm({ ...form, gender: e.target.value })}
        required/>
       
      </label>

      <label>
        Female
        <input type="radio" name="gender" value="female" onChange={(e) => setForm({ ...form, gender: e.target.value })} 
        required/>
        
      
      </label>
    </div>
      </div>
      <div className={styles.inputBox}>
        <label> 📝Description</label>
    

      <textarea
        placeholder="Description"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
        required
      />
  
  </div>
      <button onClick={submit}>Add</button>
    </div>
    </div>
  );
}