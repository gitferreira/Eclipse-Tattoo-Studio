import styles from "./Hero.module.css";
import Image from "next/image";
import { Monsieur_La_Doulaise, Rubik_Mono_One } from "next/font/google";
import FirstSection from "./FirstSection";

const rubik = Rubik_Mono_One({ subsets: ["latin"], weight: ["400"] });
const monsieur = Monsieur_La_Doulaise({ subsets: ["latin"], weight: ["400"] });

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.fakeContainer}>
        <div className={`${styles.textContainer} ${rubik.className}`}>
          <div className={styles.secondaryText}>
            <p className={`${styles.line1} ${rubik.className}`}>
              Embrace the darkness,
            </p>
            <p className={`${styles.line2} ${rubik.className}`}>
              Illuminate your Soul
            </p>
          </div>
          <h1 className={styles.mainText}>Eclipse Tattoo Studio</h1>

          <button href="" className={styles.button}>
            Book a Session
          </button>
        </div>
      </div>

      <div className={styles.galleryContainer}>
        <Image
          className={`${styles.imgWithEffect} ${styles.gallery1}`}
          src="/gallery1.jpg"
          width={1000}
          height={1000}
          alt="Picture of the author"
        />

        <Image
          className={`${styles.imgWithEffect} ${styles.gallery2}`}
          src="/gallery2.jpg"
          width={1000}
          height={1000}
          alt="Picture of the author"
        />

        <Image
          className={`${styles.imgWithEffect} ${styles.gallery3}`}
          src="/gallery3.jpg"
          width={1000}
          height={1000}
          alt="Picture of the author"
        />
      </div>

      <FirstSection />
    </div>
  );
}
