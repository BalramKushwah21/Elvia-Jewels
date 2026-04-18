import styles from "./admin.module.css";
import Link from "next/link";

export default function AdminPage() {
  return (
    <div className={styles.wrapper}>

      <h1 className={styles.heading}>Welcome To Admin Panel</h1>

      {/* Cards */}
      <div className={styles.cardContainer}>

        <div className={styles.card}>
          <div className={styles.icon}>👥</div>
          <h2>Manage Users</h2>
          <p>Manage and view all users.</p>
          <Link href="/admin/users" className={styles.btn}>View Users</Link>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>🛍️</div>
          <h2>Manage Products</h2>
          <p>Add, view, and edit your products.</p>
          <Link href="/admin/products" className={styles.btnBlue}>View Products</Link>
        </div>

        <div className={styles.card}>
          <div className={styles.icon}>📈</div>
          <h2>View Revenue</h2>
          <p>Track revenue and orders placed.</p>
          <Link href="/admin/order" className={styles.btn}>View Revenue</Link>
        </div>

      </div>

      {/* Bottom Links */}
      <div className={styles.links}>
        <Link href="/admin/products/add">Add Products</Link>
        <span>•</span>
        <Link href="/admin/products">Edit Products</Link>
        <span>•</span>
        <Link href="/admin/order">View Orders</Link>
      </div>

    </div>
  );
}