"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import styles from "./order.module.css";

export default function Orders() {
  return (
    <div className={styles.container}>

      <div className={styles.card}>

        {/* Success Icon */}
        <CheckCircle className={styles.icon} size={60} />

        {/* Heading */}
        <h1 className={styles.title}>
          Order Placed Successfully!
        </h1>

        {/* Message */}
        <p className={styles.subtitle}>
          Thank you for shopping with us 💎  
          Your jewelry will reach you soon.
        </p>

        {/* Order Info */}
        <div className={styles.orderBox}>
          <p className={styles.label}>Order ID</p>
          <p className={styles.value}>#JW123456</p>

          {/* ✅ FIXED LINE */}
          <p className={`${styles.label} ${styles.marginTop}`}>
            Estimated Delivery
          </p>

          <p className={styles.value}>3-5 Business Days</p>
        </div>

        {/* Buttons */}
        <div className={styles.btnGroup}>
          
          <Link href="/">
            <button className={styles.primaryBtn}>
              Continue Shopping
            </button>
          </Link>

          <Link href="/track-order">
            <button className={styles.secondaryBtn}>
              Track Order
            </button>
          </Link>

        </div>

      </div>
    </div>
  );
}