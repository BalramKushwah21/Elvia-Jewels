import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import styles from "./order.module.css";

export default async function Page({ params }) {
  const order = await prisma.order.findMany({
    where: { id: params.id },
  });

  if (!order) {
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <h1>Order not found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>

        {/* Icon */}
        <CheckCircle 
          className={`${styles.icon} ${styles[order.status]}`} 
          size={60} 
        />

        {/* Title */}
        <h1 className={styles.title}>
          {order.status === "delivered"
            ? "Delivered 🎉"
            : order.status === "shipped"
            ? "Order Shipped 🚚"
            : "Order Placed Successfully!"}
        </h1>

        {/* Message */}
        <p className={styles.subtitle}>
          Thank you for shopping with us 💎 <br />
          Your jewelry will reach you soon.
        </p>

        {/* Order Info */}
        <div className={styles.orderBox}>
          <p className={styles.label}>Order ID</p>
          <p className={styles.value}>#{order.id}</p>

          <p className={`${styles.label} ${styles.marginTop}`}>
            Estimated Delivery
          </p>

          <p className={styles.value}>
            {order.deliveryDays} Business Days
          </p>
        </div>

        {/* Buttons */}
        <div className={styles.btnGroup}>
          <Link href="/">
            <button className={styles.primaryBtn}>
              Continue Shopping
            </button>
          </Link>

          <Link href={`/order/${order.id}`}>
            <button className={styles.secondaryBtn}>
              Refresh
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
}