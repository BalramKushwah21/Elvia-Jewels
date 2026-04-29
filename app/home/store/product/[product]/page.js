import { prisma } from "@/lib/prisma";
import styles from "./product.module.css";
import Image from "next/image";

export default async function ProductPage({ params }) {
  const param = await params;
  const product = await prisma.product.findUnique({
    where: { id: param.product },
  });   

  return (
    <div className={styles.container}>
      {product && (
        <div className={styles.productCard}>
          <div className={styles.imageWrapper}>
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
          />
          </div>

          <div className={styles.details}>
          <h2>{product.name}</h2>
          <p className={styles.description}>{product.description}</p>
          <p className={styles.price}>${product.price.toFixed(2)}</p>
          </div>

        </div>
      )}
    </div>
  );     

}