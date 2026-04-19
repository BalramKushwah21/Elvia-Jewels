import { prisma } from "@/lib/prisma";
import styles from "./product.module.css";

export default async function ProductPage({ params }) {
  const param = await params;
  const product = await prisma.product.findUnique({
    where: { id: param.product },
  });   

  return (
    <div className={styles.container}>
      {product && (
        <div key={product.id} className={styles.productCard}>
          <img
            src={product.image}
            alt={product.name}
          />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
        </div>
      )}
    </div>
  );     

}