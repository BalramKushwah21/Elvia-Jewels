"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import styles from "./login.module.css";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      email: form.email,
      password: form.password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError("Invalid email or password");
      return;
    }

    router.push("/");
    router.refresh();
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
            <h2>LOGIN</h2>
            <p>SIGN IN</p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.right}>
          <div className={styles.avatar}>👤</div>
          <h2 className={styles.heading}>LOGIN</h2>

          <form onSubmit={handleSubmit}>

            {/* EMAIL */}
            <div className={styles.inputGroup}>
              <input
                type="email"
                className={styles.inputField}
                placeholder=" "
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
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
              {loading ? "Logging in..." : "LOGIN"}
            </button>

          </form>
        </div>

      </div>
    </div>
  );
}