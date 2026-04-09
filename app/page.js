import Image from "next/image";
import React from "react";
import styles from "./home.module.css";
import Slider from "@/components/slider";
import ShowSlider from "@/components/imageSlider";
import { redirect } from "next/navigation";
import { getUserFromToken } from "@/lib/auth.server";
import TopRatedProducts from "@/components/TopRatedProducts";
import Link from "next/link";

export default async function Home() {
  const user = await getUserFromToken();

  return (
    <div className={styles.main}>
      <ShowSlider />
      <Slider />
      <div className={styles.features}>
        <h3 className={styles.item}>Our Features</h3>
        <h3 className={styles.item}>Our Features</h3>
        <h3 className={styles.item}>Our Features</h3>
        <h3 className={styles.item}>Our Features</h3>
        <h3 className={styles.item}>Our Features</h3>
      </div>


      <h3 className={styles.shopByRecipient}>Luxury within Reach</h3>
      <div className={styles.shopByReach}>
      <button className={styles.reachBox}>
        Under <br/>₹1499
      </button>
      <button className={styles.reachBox}>
        Under <br/>₹1999
      </button>
      </div>

      <h3 className={styles.shopByRecipient}> Shop by Recipient</h3>
      <div className={styles.recipient}>
        <Link href="home/men_jewellery">
          <Image
            className={styles.recipientImage}
            src="/Images/male-recipient.png"
            alt="Recipient"
            width={1000}
            height={400}
          />
          <span className={`${styles.recipientTextHim} ${styles.text}`}>
            Him
          </span>
          <span className={`${styles.TextShopHim} ${styles.text}`}>
            Shop Now
          </span>
        </Link>

        <Link href="home/women_jewellery">
          <Image
            className={styles.recipientImage}
            src="/Images/male-recipient.png"
            alt="Recipient"
            width={1000}
            height={400}
          />
          <span className={`${styles.recipientTextHer} ${styles.text}`}>
            Her
          </span>
          <span className={`${styles.TextShopHer} ${styles.text}`}>
            Shop Now
          </span>
        </Link>
      </div>
      <TopRatedProducts />
    <div className={styles.poster}>
      <Image
      className={styles.posterImage}
      src={"/Images/poster.webp"}
      width={1000}
      height={100}
      alt="Poster"
      >
      </Image>
      <Image
      className={styles.posterImage}
      src={"/Images/ElviaBoat.png"}
      width={1000}
      height={100}
      alt="Poster"
      >
      </Image>

    </div>

    </div>
  );
}
