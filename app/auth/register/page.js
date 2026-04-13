"use client";
import { useState } from "react";
import styles from "./register.module.css";

export default function RegisterPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>

        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>

          <div className={styles.leftText}>
            <h2>REGISTER</h2>
            <p>CREATE ACCOUNT</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.avatar}>👤</div>

          <h2 className={styles.heading}>REGISTER</h2>

          {/* NAME */}
          <div className={styles.inputGroup}>
            <input
              type="text"
              name="name"
              placeholder=" "
              value={form.name}
              onChange={handleChange}
              className={styles.inputField}
            />
            <label>Full Name</label>
          </div>

          {/* EMAIL */}
          <div className={styles.inputGroup}>
            <input
              type="email"
              name="email"
              placeholder=" "
              value={form.email}
              onChange={handleChange}
              className={styles.inputField}
            />
            <label>Email</label>
          </div>

          {/* PASSWORD */}
          <div className={styles.inputGroup}>
            <input
              type="password"
              name="password"
              placeholder=" "
              value={form.password}
              onChange={handleChange}
              className={styles.inputField}
            />
            <label>Password</label>
          </div>

          <button className={styles.button}>REGISTER</button>
        </div>

      </div>
    </div>
  );
}