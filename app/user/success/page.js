"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./success.module.css";

export default function SuccessPage() {
  const [copied, setCopied] = useState(false);

  
  const orderId = "ORD123456";

  const formatDate = (date) =>
    new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });

  const orderDate = formatDate(new Date());

  const deliveryDate = formatDate(
    new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
  );

  const handleCopy = async () => {
    await navigator.clipboard.writeText(orderId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.container}>
      <div className={styles.box}>
        
        
        <div className={styles.icons}>✓</div>

        <h1 className={styles.maintitle}>Payment Successful!</h1>
        <p className={styles.subtitle}>Your order has been placed successfully.</p>

        
        <div className={styles.orderBox}>
          
          <div className={styles.orderItem}>
            <div className={styles.icon}>🆔</div>
            <div>
              <p className={styles.label}>Order ID</p>
              <div className={styles.valueRow}>
                <span className={styles.value}>{orderId}</span>
                <button onClick={handleCopy} className={styles.copyBtn}>
                  {copied ? "✔" : "📋"}
                </button>
              </div>
            </div>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.orderItem}>
            <div className={styles.icon}>📅</div>
            <div>
              <p className={styles.label}>Order Date</p>
              <p className={styles.value}>{orderDate}</p>
            </div>
          </div>

        </div>

       
        <p className={styles.delivery}>
          
        </p>

        
        <div className={styles.logos}>
          <div className={styles.logo}>📦 Order Confirmed</div>
          <div className={styles.logo}>💳 Payment Received</div>
          <div className={styles.logo}>✉️ Confirmation Sent</div>
        </div>

        <div className={styles.actions}>
          <Link href="/store" className={styles.firstBtn}>
            Continue Shopping →
          </Link>

          <Link href={`/orders/${orderId}`} className={styles.secondBtn}>
            Track Order
          </Link>
        </div>

      </div>
    </div>
  );
}