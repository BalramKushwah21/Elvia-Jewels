import { prisma } from "@/lib/prisma";
import AddToCart from "@/components/AddToCart";
import styles from "../store.module.css"; // 👈 import module

export default async function Store() {
  const products = await prisma.product.findMany({
    where:{
        gender:"male"
    }
  });

  return (
    <div className={styles.container}>
      {products.map((p) => (
        <div key={p.id} className={styles.card}>
          <img src={p.image} className={styles.image} />
          <h3>{p.name}</h3>
          <h3>{p.description}</h3>
          <p>₹{p.price}</p>
          <AddToCart productId={p.id} />
        </div>
      ))}
    </div>
  );
}