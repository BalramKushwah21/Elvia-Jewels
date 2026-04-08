"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./register.module.css";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ handle change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ register
  const handleRegister = async () => {
    if (!form.name || !form.email || !form.password) {
      alert("All fields are required");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.error || "Registration failed");
        return;
      }

      alert("Registration successful 🎉");

      setForm({
        name: "",
        email: "",
        password: "",
      });

      router.push("/auth/login");

    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.triangle1}></div>
          <div className={styles.triangle2}></div>
          <div className={styles.triangle3}></div>

          <div className={styles.leftText}>
            <h2>REGISTER</h2>
            <p>CREATE ACCOUNT</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.avatar}>👤</div>

          <h3 className={styles.heading}>REGISTER</h3>

          {/* NAME */}
          <div className={styles.inputGroup}>
            <span className={styles.icon}>👤</span>
            <input
              className={styles.inputField}
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Full Name"
            />
          </div>

          {/* EMAIL */}
          <div className={styles.inputGroup}>
            <span className={styles.icon}>📧</span>
            <input
              className={styles.inputField}
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>

          {/* PASSWORD */}
          <div className={styles.inputGroup}>
            <span className={styles.icon}>🔒</span>
            <input
              type="password"
              name="password"
              className={styles.inputField}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
          </div>

          <button
            className={styles.button}
            onClick={handleRegister}
            disabled={loading}
          >
            {loading ? "Registering..." : "Register"}
          </button>

          <div className={styles.social}>
            Already have an account?
            <Link href="/auth/login" className={styles.link}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}