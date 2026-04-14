"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import styles from "../login/login.module.css"; // 🔥 reuse same styles

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

    if (!form.email.includes("@")) {
      return setError("Enter a valid email");
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

      if (!res.ok) {
        setError(data.error || "Something went wrong");
        return;
      }

      // 🔥 Auto login
      await signIn("credentials", {
        email: form.email,
        password: form.password,
        redirect: false,
      });

      router.push("/");
      router.refresh();

    } catch (err) {
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>

        {/* LEFT SIDE */}
        <div className={styles.left}>
          <div className={styles.shape1}></div>
          <div className={styles.shape2}></div>
          <div className={styles.shape3}></div>

          <div className={styles.leftText}>
            <h2>REGISTER</h2>
            <p>CREATE ACCOUNT</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <div className={styles.avatar}>👤</div>
          <h2 className={styles.heading}>REGISTER</h2>

          <form onSubmit={handleSubmit}>

            {/* Full Name */}
            <div className={styles.inputGroup}>
              <input
                type="text"
                className={styles.inputField}
                placeholder=""
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                required
              />
              <label>Name</label>
            </div>
            {/* EMAIL */}
            <div className={styles.inputGroup}>
              <input
  type="email"
  className={styles.inputField}
  placeholder=" "
  value={form.email}
  onChange={(e) => {
    const value = e.target.value;

    setForm({ ...form, email: value });

    if (!value) {
      setEmailError("");
    } else if (!validateEmail(value)) {
      setEmailError("Invalid email format");
    } else {
      setEmailError("");
    }
  }}
  required
/>
<label>Email</label>
            </div>

            {/* PASSWORD */}
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

            {/* ERROR */}
            {error && (
              <p style={{ color: "red", marginTop: "10px" }}>
                {error}
              </p>
            )}

            {/* BUTTON */}
            <button
              type="submit"
              className={styles.button}
              disabled={loading}
            >
              {loading ? "Creating..." : "CREATE ACCOUNT"}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}