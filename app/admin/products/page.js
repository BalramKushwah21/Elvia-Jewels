import Link from "next/link";
import { prisma } from "@/lib/prisma";
import styles from "./products.module.css";
import Image from "next/image";

export default async function ProductsPage() {
  const products = await prisma.product.findMany();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>All Products</h1>
      <div className={styles.productList}>
      {products.map((product) => (
        <div key={product.id} className={styles.card}>
          <Image src={product.image} alt={product.name} className={styles.Image} width={200} height={200} />
          <h3 className={styles.productName}>{product.name}</h3>
          <p className={styles.price}>₹{product.price}</p>

          <Link href={`/admin/products/edit/${product.id}`}
          className={styles.editLink}>
            Edit
          </Link>
        </div>
        
      ))}
    </div>
    </div>
  );
}