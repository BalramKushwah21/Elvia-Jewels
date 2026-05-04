
import Link from "next/link";
import styles from "./success.module.css";

export default function SuccessPage() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        
        <div className={styles.icons}>
          ✓
        </div>
        <h1 className={styles.maintitle}>Payment Successful!</h1>
      <div classname={styles.container1}></div>

        <p className={styles.subtitle}>
          Thank you for your purchase. Your order has been placed successfully.
        </p>
        <div className={styles.logos}>
          <div className={styles.logo}>
            <span>📦</span>
            <p>Order Confirmed</p>
          </div>
          <div className={styles.logo}>
            <span>💳</span>
            <p>Payment Received</p>
          </div>
          <div className={styles.logo}>
            <span>✉️</span>
            <p>Confirmation Sent</p>
          </div>
        </div>

        <div className={styles.actions}>
          <Link href="/store" className={styles.firstBtn}>
            Continue Shopping →
          </Link>

          <Link href="/orders" className={styles.secondBtn}>
            View Order
          </Link>
        </div>
      </div>
    </div>
  );
}