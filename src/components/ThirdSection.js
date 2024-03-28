import React from "react";
import styles from "./ThirdSection.module.css";
import Carousel from "./Carousel/Carousel";
import { Montserrat, Rubik_Mono_One } from "next/font/google";

const rubik = Rubik_Mono_One({ subsets: ["latin"], weight: ["400"] });
const montse = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function ThirdSection() {
  return (
    <section className={styles.container}>
      <div className={styles.mainContainer}>
      <div className={`${styles.textContainer} ${rubik.className}`}>
        <p className={styles.subHeading}>Gallery</p>
        <div className={styles.heading}>
          <h2 className={styles.line1}>get some inspiration, </h2>
          <h2 className={styles.line2}>Your next tattoo awaits</h2>
        </div>
        </div>
      </div>
      <Carousel />
    </section>
  );
}
