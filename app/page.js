import Image from "next/image";
import React from "react";
import styles from "./home.module.css";
import Slider from "@/components/slider";
import ShowSlider from "@/components/imageSlider";
import { redirect } from "next/navigation";
import { getUserFromToken }  from "@/lib/auth.server";

import Link from "next/link";


export default async  function Home() {



  const user = await getUserFromToken();

  return (
    <div className={styles.main}>
      <ShowSlider />
      <Slider/>
      <div className={styles.features}>
        <h3 className={styles.item}>Our Features</h3>
        <h3 className={styles.item}>Our Features</h3>
        <h3 className={styles.item}>Our Features</h3>
        <h3 className={styles.item}>Our Features</h3>
        <h3 className={styles.item}>Our Features</h3>

      </div>
      <div className={styles.recipient}>
        <Link href="home/men_jewellery" >
          <Image className={styles.recipientImage} src="/Images/male-recipient.png" alt="Recipient" width={1000} height={400} />
          <span className={`${styles.recipientTextHim} ${styles.text}`}>Him</span>
          <span className={`${styles.TextShopHim} ${styles.text}`}>Shop Now</span>
        </Link>

        <Link href="home/women_jewellery"  >
          <Image className={styles.recipientImage} src="/Images/male-recipient.png" alt="Recipient" width={1000} height={400} />
            <span className={`${styles.recipientTextHer} ${styles.text}`}>Her</span>
            <span className={`${styles.TextShopHer} ${styles.text}`}>Shop Now</span>
        </Link>

      </div>


    </div>
  );
}
