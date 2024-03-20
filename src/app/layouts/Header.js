"use client"; // This is a client component 👈🏽
import React, { useState, useEffect, useCallback } from "react";
import styles from "./Header.module.css"; // Import CSS module styles
import { Inter, Barlow_Condensed } from "next/font/google";
import NavigationDesktop from "@/components/NavigationDesktop";
import NavigationMobile from "@/components/NavigationMobile";
import Image from "next/image";

const barlow = Barlow_Condensed({ subsets: ["latin"], weight: ["300"] });

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

const Header = () => {

  const isBreakpoint = useMediaQuery(1300)

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
        <div className={styles.subText}>
          Specialized Black Ink Tattoo Artist
        </div>
      </div>
      {!isBreakpoint ? <NavigationDesktop /> : <NavigationMobile />}
    </header>
  );
};

export default Header;
