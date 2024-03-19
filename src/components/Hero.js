import styles from "./Hero.module.css";
import Image from "next/image";
import { Dela_Gothic_One, Rubik_Mono_One } from "next/font/google";

const rubik = Rubik_Mono_One({ subsets: ["latin"], weight: ["400"] });

export default function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.heroImage}
          src="/hero.png"
          width={1000}
          height={1000}
          alt="Picture of the author"
        />
      </div>
      <div className={`${styles.textContainer} ${rubik.className}`}>
        <h1 className={styles.mainText}>Eclipse Tattoo Studio</h1>
        <h1 className={styles.secondaryText}>Specialized in Black Ink tattoos, we make them in different styles, both according to your sketches and can offer our designs.<span className={styles.underline}>We guarantee that you will not stop at one. </span>  </h1>
        <button href= '' className={styles.button}> Book a Session </button>
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
    </div>
  );
}
