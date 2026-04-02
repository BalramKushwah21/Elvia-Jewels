"use client";

import Link from "next/link";
import styles from "./login.module.css";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // 🔍 Validate email format
  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const submit = async (e) => {
    e.preventDefault();

    if (loading) return; // prevent double click

    setError("");

    // 🧪 Validation
    if (!form.email || !form.password) {
      setError("All fields are required");
      return;
    }

    if (!isValidEmail(form.email)) {
      setError("Invalid email format");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
        credentials: "include",
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ success
        window.location.href = "/";
      } else if (res.status === 401) {
        setError("Invalid email or password");
      } else if (res.status === 404) {
        setError("User not found");
      } else {
        setError(data.message || "Something went wrong");
      }
    } catch (err) {
      console.error(err);
      setError("Network error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        
        {/* LEFT SIDE */}
        <div className={styles.left}>
          <div className={styles.triangle1}></div>
          <div className={styles.triangle2}></div>
          <div className={styles.triangle3}></div>

          <div className={styles.leftText}>
            <h2>LOGIN</h2>
            <p>SIGN IN</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <div className={styles.avatar}>👤</div>

          <h3 className={styles.heading}>LOGIN</h3>

          {/* ❌ Error Message */}
          {error && <p className={styles.error}>{error}</p>}

          {/* EMAIL */}
          <div className={styles.inputGroup}>
            <span className={styles.icon}>📧</span>
            <input
              type="email"
              className={styles.inputField}
              placeholder="Email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
            />
          </div>

          {/* PASSWORD */}
          <div className={styles.inputGroup}>
            <span className={styles.icon}>🔒</span>
            <input
              type="password"
              className={styles.inputField}
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
            />
          </div>

          <div className={styles.forgot}>Forgot Password?</div>

          {/* BUTTON */}
          <button
            className={styles.button}
            onClick={submit}
            disabled={loading}
          >
            {loading ? "Logging in..." : "LOGIN"}
          </button>

          <div className={styles.social}>
            Or Login With
            <span className={styles.link}>Google</span>
            <span className={styles.link}>Facebook</span>

            <div className={styles.notMember}>
              <span>Not a member?</span>{" "}
              <Link href="/auth/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}