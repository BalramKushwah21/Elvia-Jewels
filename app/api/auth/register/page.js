"use client";
import Link from "next/link";
import styles from "./register.module.css";

export default function Register() {
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
            <input className={styles.inputField} placeholder="Full Name" />
          </div>

          <div className={styles.inputGroup}>
            <span className={styles.icon}>📧</span>
            <input className={styles.inputField} placeholder="Email" />
          </div>

          <div className={styles.inputGroup}>
            <span className={styles.icon}>🔒</span>
            <input type="password" className={styles.inputField} placeholder="Password" />
          </div>

          <div className={styles.inputGroup}>
            <span className={styles.icon}>🔒</span>
            <input type="password" className={styles.inputField} placeholder="Confirm Password" />
          </div>

          <button className={styles.button}>REGISTER</button>

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