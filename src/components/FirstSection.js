import React from "react";
import styles from "./FirstSection.module.css";
import { Montserrat, Rubik_Mono_One } from "next/font/google";
import Carousel from "./Carousel/Carousel";
import Image from "next/image";

const rubik = Rubik_Mono_One({ subsets: ["latin"], weight: ["400"] });
const montse = Montserrat({ subsets: ["latin"], weight: ["400"] });

export default function FirstSection() {
  return (
    <section className={styles.container}>
      <div className={styles.mainContainer}>
        <div className={`${styles.textContainer} ${rubik.className}`}>
          <p className={styles.subHeading}>Who we are</p>
          <div className={styles.heading}>
            <h2 className={styles.line1}>Take your body</h2>
            <h2 className={styles.line2}>to the next level</h2>
          </div>
          <p className={`${montse.className} ${styles.text}`}>
            Embark on a journey of <strong> self-expression </strong> and <strong> empowerment  </strong> as you step
            into our tattoo studio. With passion and precision, our artists
            craft <strong> personalized designs </strong>  to adorn your skin and speak to your
            soul.
          </p>
          <div className={styles.icons}>
            <div className={styles.iconContainer}>
              <Image
                className={styles.iconImage}
                src="/oI.png"
                width={180}
                height={180}
                alt="Picture of the author"
              />
              <p className={styles.iconText}>1.Share your Idea </p>
            </div>
            <div className={styles.iconContainer}>
              <Image
                className={styles.iconImage}
                src="/dD.png"
                width={180}
                height={180}
                alt="Picture of the author"
              />
              <p className={styles.iconText} >2.Get your design online</p>
            </div>

            <div className={`${styles.iconContainer} ${styles.iconContainer3}`}>
              <Image
                className={styles.iconImage}
                src="/i.png"
                width={180}
                height={180}
                alt="Picture of the author"
              />
              <p className={styles.iconText}>3.Secure the date!</p>
            </div>
          </div>
          <button href="" className={styles.button}>
            Book a Session
          </button>
        </div>
      </div>
      <div className={styles.logoContainer}>
        <Image
          className={styles.logoImage}
          src="/eclipse (2).png"
          width={1500}
          height={1500}
          alt="Picture of the author"
        />
      </div>
    </section>
  );
}
