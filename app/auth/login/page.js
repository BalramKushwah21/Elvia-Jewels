"use client";
import { useState } from "react";
import styles from "./login.module.css";

export default function LoginPage() {
  const [form, setForm] = useState({
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
            <h2>LOGIN</h2>
            <p>SIGN IN</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.avatar}>👤</div>

          <h2 className={styles.heading}>LOGIN</h2>

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

          <p className={styles.link}>Forgot Password?</p>

          <button className={styles.button}>LOGIN</button>
        </div>

      </div>
    </div>
  );
}