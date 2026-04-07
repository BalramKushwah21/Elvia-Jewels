import Image from "next/image";
import React from "react";
import styles from "./home.module.css";
import Slider from "@/components/slider";
import ShowSlider from "@/components/imageSlider";
import { redirect } from "next/navigation";
import { getUserFromToken }  from "@/lib/auth.server";


export default async  function Home() {
  const user = await getUserFromToken();

  return (
    <div className={styles.main}>
      <ShowSlider />
      <Slider/>
      <div className={styles.features}>
        <h3 className={styles.text}>Our Features</h3>
        <h3 className={styles.text}>Our Features</h3>
        <h3 className={styles.text}>Our Features</h3>
        <h3 className={styles.text}>Our Features</h3>
        <h3 className={styles.text}>Our Features</h3>

      </div>
      <h2 className={styles.recipient}>
        <button className={styles.recipientBtn}>
          <Image src="/Images/male-recipient.png"  width={500} height={200} />
          <span className={styles.recipientText}>Him</span>

        </button>

      </h2>


    </div>
  );
}
