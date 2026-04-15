"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import styles from "../login/login.module.css";

export default function RegisterPage() {

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const [emailError, setEmailError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateEmail(form.email)) {
      return setError("Enter a valid email");
    }

    if (emailError) {
      return setError("Fix email before submitting");
    }

    if (form.password.length < 6) {
      return setError("Password must be at least 6 characters");
    }

    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.status === 409) {
        setError("Email already registered. Redirecting...");
        setTimeout(() => router.push("/auth/login"), 1500);
        return;
      }

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
      });

      router.push("/");
      router.refresh();

    } catch {
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.left}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>

          <div className={styles.leftText}>
            <h2>REGISTER</h2>
            <p>CREATE ACCOUNT</p>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.avatar}>👤</div>
          <h2 className={styles.heading}>REGISTER</h2>

          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                className={styles.inputField}
                placeholder=" "
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
              />
              <label>Name</label>
            </div>

            <div className={styles.inputGroup}>
              <input
                type="email"
                className={styles.inputField}
                placeholder=" "
                value={form.email}
                onChange={(e) => {
                  const value = e.target.value;
                  setForm({ ...form, email: value });

                  if (!value) setEmailError("");
                  else if (!validateEmail(value))
                    setEmailError("Invalid email format");
                  else setEmailError("");
                }}
                required
              />
              <label>Email</label>
            </div>

            {emailError && <p style={{ color: "red" }}>{emailError}</p>}

            <div className={styles.inputGroup}>
              <input
                type="password"
                className={styles.inputField}
                placeholder=" "
                value={form.password}
                onChange={(e) =>
                  setForm({ ...form, password: e.target.value })
                }
                required
              />
              <label>Password</label>
            </div>

            {error && <p style={{ color: "red" }}>{error}</p>}

            <button
              type="submit"
              className={styles.button}
              disabled={loading || emailError}
            >
              {loading ? "Creating..." : "CREATE ACCOUNT"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}