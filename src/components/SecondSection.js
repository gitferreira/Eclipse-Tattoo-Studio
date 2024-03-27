import React from "react";
import styles from "./SecondSection.module.css";
import {
  Monsieur_La_Doulaise,
  Monoton,
  Barlow_Condensed,
  Rubik_Mono_One,
} from "next/font/google";
import Image from "next/image";
import Card from "./Card";

const monoton = Monoton({ subsets: ["latin"], weight: ["400"] });
const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["300"] });
const rubik = Rubik_Mono_One({ subsets: ["latin"], weight: ["400"] });

export default function SecondSection() {
  return (
    <section className={styles.container}>
      <div className={styles.paddingContainer}>
        <div className={`${styles.textContainer} ${rubik.className}`}>
          <div className={styles.headingContainer}>
            <p className={styles.subHeading}>our masters</p>
            <div className={styles.heading}>
              <h2 className={styles.line1}>Over 20 years </h2>
              <h2 className={styles.line2}>of experience</h2>
            </div>
          </div>
        </div>
        <div className={styles.artistsContainer}>
          <div className={styles.mainContainer}>
            <div className={`${styles.mainText} ${monoton.className}`}>
              <h2 className={`${styles.title} ${rubik.className}`}>
                Kate Adusk
              </h2>
              <p className={`${styles.story} ${barlow.className}`}>
                Meet <span className={styles.underline}>Kate Adusk</span>, the
                visionary tattoo artist illuminating Eclipse Tattoo Studio with
                her unparalleled talent. With a penchant for blending intricate
                designs with celestial elements, Kate's work transcends
                conventional artistry. For over a decade, her delicate yet
                powerful creations have adorned the skin of clients worldwide.
                Kate's dedication to her craft and her ability to infuse each
                piece with personal meaning have cemented her status as a true
                luminary in the world of body art.
              </p>
              <Image
                className={styles.signature}
                src="/signature.webp"
                width={200}
                height={200}
                alt="Picture of the author"
              />
            </div>
            <div className={styles.photoContainer}>
              <Card
                cardImage={"/card.png"}
                characterImage={"/character.png"}
                cat1={"color"}
                cat2={"nature"}
                cat3={"neorealism"}
              />
            </div>
          </div>

          <div className={styles.mainContainer}>
            <div className={`${styles.photoContainer} ${styles.inverted} `}>
              <Card
                cardImage={"/card2.png"}
                characterImage={"/character2.png"}
                cat1={"blackwork"}
                cat2={"geometry"}
                cat3={"traditional"}
              />
            </div>
            <div className={`${styles.mainText} ${monoton.className}`}>
              <h2 className={`${styles.title2} ${rubik.className}`}>
                Otis Winfre
              </h2>
              <p className={`${styles.story} ${barlow.className}`}>
                Meet <span className={styles.underline2}>Otis Winfre</span>, the
                enigmatic artist behind Eclipse Tattoo Studio's most mesmerizing
                designs. With a mysterious past shrouded in tales of wanderlust
                and adventure, Jackson found solace and purpose within the
                ink-stained walls of Eclipse. Each stroke of his needle tells a
                story—of love, loss, and redemption.
              </p>
              <Image
                className={styles.signature}
                src="/signature2.png"
                width={200}
                height={200}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
