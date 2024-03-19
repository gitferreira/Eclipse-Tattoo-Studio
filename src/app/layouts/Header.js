"use client"; // This is a client component 👈🏽
import React, { useState, useEffect } from "react";
import styles from "./Header.module.css"; // Import CSS module styles
import { Inter, Barlow_Condensed } from "next/font/google";
import NavigationDesktop from "@/components/NavigationDesktop";
import NavigationMobile from "@/components/NavigationMobile";
import Image from "next/image";

const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["300"] });

const Header = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className={`${styles.header} ${barlow.className}`}>
      <div className={styles.logoContainer}>
      <Image
          className={styles.heroImage}
          src="/logo.png"
          width={100}
          height={100}
          alt="Picture of the author"
        />
        <div className={styles.subText}>Specialized Black Ink Tattoo Artist</div>
      </div>
      {width > 1100 ?  <NavigationDesktop /> : <NavigationMobile /> }
     
    </header>
  );
};

export default Header;
