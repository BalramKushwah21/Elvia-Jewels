import Link from "next/link";
import { prisma } from "@/lib/prisma";
import styles from "./products.module.css";

export default async function ProductsPage() {
  const products = await prisma.product.findMany();

  return (
    <div>
      <h1>All Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>₹{product.price}</p>

          <Link href={`/admin/products/edit/${product.id}`}>
            Edit
          </Link>
        </div>
        
      ))}
    </div>
  );
}