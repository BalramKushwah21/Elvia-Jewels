"use client";
import Link from "next/link";
import styles from "./register.module.css";
import { useState } from "react";

export default function Register() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const handleRegister = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.status === 201) {
        alert("Registration successful 🎉");
        setName("");
        setEmail("");
        setPassword("");
        window.location.href = "/auth/login";
      }
      else if(res.status === 401){
        alert(data.message || "User already exists");
        window.location.href = "/auth/login";

      } 
      else {
        alert(data.message || data.error || "Registration failed" );
      }
    } catch (error) {
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

          <div className={styles.inputGroup}>
            <span className={styles.icon}>👤</span>
            <input
              className={styles.inputField}
              type="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
            />
          </div>

          <div className={styles.inputGroup}>
            <span className={styles.icon}>📧</span>
            <input
              className={styles.inputField}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>

          <div className={styles.inputGroup}>
            <span className={styles.icon}>🔒</span>
            <input
              type="password"
              className={styles.inputField}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* <div className={styles.inputGroup}>
            <span className={styles.icon}>🔒</span>
            <input
              type="password"
              className={styles.inputField}
              placeholder="Confirm Password"
            />
          </div> */}

          <button className={styles.button}  onClick={handleRegister} disabled={loading}>
        {loading ? "Registering..." : "Register"}</button>

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
