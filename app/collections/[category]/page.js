import { prisma } from "@/lib/prisma";
import AddToCart from "@/components/AddToCart";
import styles from "./collection.module.css";

export default async function Category({ params }) {
    const { category } = await params;

  const products = await prisma.product.findMany({
    where: {
      category: {
        equals: category,
        mode: "insensitive",
      },
    },
  });

  return (
    <div className={styles.productsGrid}>
      {products.map((p) => (
        <div key={p.id} className={styles.productCard}>

          <img src={p.image} className={styles.productImage} />

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