import { prisma } from "@/lib/prisma";
import AddToCart from "@/components/AddToCart";
import styles from "../store.module.css";

export default async function Store() {
  const products = await prisma.product.findMany();

  return (
    <div className={styles.productsGrid}>
      {products.map((p) => (
        <div key={p.id} className={styles.productCard}>

          {/* IMAGE */}
          <img src={p.image} className={styles.productImage} />

          {/* INFO */}
          <div className={styles.productInfo}>
            <h3 className={styles.productName}>{p.name}</h3>
            <p className={styles.productDescription}>{p.description}</p>
            <p className={styles.productPrice}>₹{p.price}</p>

            <AddToCart productId={p.id} />
          </div>

        </div>
      ))}
    </div>
  );
}