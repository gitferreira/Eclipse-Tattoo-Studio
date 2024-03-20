import React, { useState } from "react";
import styles from "./NavigationMobile.module.css";

const NavigationMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.container}>
      <div className={styles.menuButtonContainer}>
        <button className={styles.menuButton} onClick={toggleMenu}>
          Menu
        </button>
      </div>
      <nav className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">OUR STUDIO</a>
          </li>
          <li>
            <a href="#">OUR MASTERS</a>
          </li>
          <li>
            <a href="#">TATTOOS</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationMobile;
