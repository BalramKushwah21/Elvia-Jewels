import Link from "next/link";
import styles from "./admin.module.css";

export default function Page() {
  return (
    <div className={styles.wrapper}>
      
      <h1 className={styles.heading}>Admin Panel</h1>

      <div className={styles.cardContainer}>

        {/* Users Card */}
        <div className={styles.card}> 
          <div className={styles.icon}>👥</div>
          <h2>Manage Users</h2>
          <p>Manage and view all users.</p>
          <Link href="/admin/users" className={styles.btnPurple}>
            View Users
          </Link>
        </div>

        {/* Products Card */}
        <div className={styles.card}>
          <div className={styles.icon}>🛍️</div>
          <h2>Manage Products</h2>
          <p>Add, view, and edit your products.</p>
          <Link href="/admin/products" className={styles.btnBlue}>
            View Products
          </Link>
        </div>

        {/* Revenue Card */}
        <div className={styles.card}>
          <div className={styles.icon}>📈</div>
          <h2>View Revenue</h2>
          <p>Track revenue and orders placed.</p>
          <Link href="/admin/order" className={styles.btnPurple}>
            View Revenue
          </Link>
        </div>

      </div>

      {/* Bottom Links */}
      <div className={styles.links}>
        <Link href="/admin/products/add" className={styles.addButton}>Add Products</Link>
        <span> • </span>
        <Link href="/admin/products" className={styles.productButton}>Edit Products</Link>
        <span> • </span>
        <Link href="/admin/order" className={styles.orderButton}>View Orders</Link>
      </div>

    </div>
  );
}