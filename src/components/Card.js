import React from "react";
import styles from "./Card.module.css";
import Image from "next/image";
import {
  Monsieur_La_Doulaise,
  Monoton,
  Barlow_Condensed,
  Rubik_Mono_One,
} from "next/font/google";

const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["300"] });

export default function Card({cardImage, characterImage, cat1, cat2, cat3, cat4}) {


  return (
    <a>
      <div className={styles.card}>
        <div className={styles.wrapper}>
          <Image
            src={cardImage}
            alt=""
            className={styles["cover-image"]}
            width={300}
            height={400}
          />
        </div>
        <div className={styles.tags}>
          <h1 className={`${styles.title} ${barlow.className}`}>{cat1}</h1>
          <h1 className={`${styles.title} ${barlow.className}`}>{cat2}</h1>
          <h1 className={`${styles.title} ${barlow.className}`}>{cat3}</h1>
          {cat4 ?  <h1 className={`${styles.title} ${barlow.className}`}>{cat4}</h1> : null }
       
        </div>

        <Image
          src={characterImage}
          alt=""
          className={styles.character}
          width={1000}
          height={1000}
        />
      </div>
    </a>
  );
}
