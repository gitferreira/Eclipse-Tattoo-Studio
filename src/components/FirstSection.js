import React from "react";
import styles from "./FirstSection.module.css";
import { Monsieur_La_Doulaise, Monoton, Barlow_Condensed, Rubik_Mono_One } from "next/font/google";


const monoton = Monoton({ subsets: ["latin"], weight: ["400"] });
const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["300"] });
const rubik = Rubik_Mono_One({ subsets: ["latin"], weight: ["400"] });

export default function FirstSection() {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <div className={`${styles.mainText} ${monoton.className}`}>
          <h1 className={styles.line1}>OUR </h1>
          <h1 className={styles.line2}>STUDIO</h1>
        </div>
        <div className={styles.secondaryText}>
          <h2 className={`${styles.title} ${rubik.className}`}>How we started</h2>
          <p className={`${styles.story} ${barlow.className}`}>
            In the vibrant heart of <span className={styles.underline}>Malasaña, Madrid</span>, Eclipse Tattoo Studio was
            born from a shared passion for art and individual expression. It all
            began with a chance encounter between two artists, drawn together by
            their love for ink and creativity. Fuelled by their dreams and
            determination, they transformed a humble space into a sanctuary for
            self-expression, where each stroke of the needle tells a unique
            story. With dedication and artistry, Eclipse Tattoo Studio became a
            beacon of creativity in the bustling streets of Malasaña.
          </p>
        </div>
 
      </div>
    </section>
  );
}
