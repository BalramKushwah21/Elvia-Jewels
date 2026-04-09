
import React from 'react'
import styles from "@/components/TopRatedProducts.module.css"
import AddToCart from '@/components/AddToCart';
import { prisma } from "@/lib/prisma"
import  SendToStore  from '@/components/Client';


export default async function TopRatedProducts() {
  // const router = useRouter();



  const products = await prisma.product.findMany({
    take: 6,
  
  });

  return (
    <div className={styles.main_container}>

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
      <SendToStore/>
      </div>
  );
}