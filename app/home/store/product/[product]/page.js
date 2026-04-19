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
        <div key={product.id} className={styles.productCard}>
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
          />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>${product.price.toFixed(2)}</p>
        </div>
      )}
    </div>
  );     

}