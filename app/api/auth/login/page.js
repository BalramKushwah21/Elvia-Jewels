"use client";
import Link from "next/link";
import styles from "./login.module.css";

export default function Login() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>

        {/* LEFT */}
        <div className={styles.left}>
          <div className={styles.triangle1}></div>
          <div className={styles.triangle2}></div>
          <div className={styles.triangle3}></div>

          <div className={styles.leftText}>
            <h2>LOGIN</h2>
            <p>SIGN IN</p>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.avatar}>👤</div>

          <h3 className={styles.heading}>LOGIN</h3>

          <div className={styles.inputGroup}>
            <span className={styles.icon}>👤</span>
            <input className={styles.inputField} placeholder="Email" />
          </div>

          <div className={styles.inputGroup}>
            <span className={styles.icon}>🔒</span>
            <input className={styles.inputField} placeholder="Password" />
          </div>

          <div className={styles.forgot}>Forgot Password?</div>

          <button className={styles.button}>LOGIN</button>

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