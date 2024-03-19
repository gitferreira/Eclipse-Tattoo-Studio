import styles from "./NavigationDesktop.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function NavigationDesktop() {
  return (
 
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <a href="/">Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="/about">our studio</a>
          </li>
          <li className={styles.navItem}>
            <a href="/programs">our masters</a>
          </li>
          <li className={styles.navItem}>
            <a href="/contact">tattoos</a>
          </li>
          <li className={styles.navItem}>
            <a href="/contact">contact</a>
          </li>
        </ul>
        <div className={styles.socialMediaIcons}>
          <FontAwesomeIcon
            className={styles.icon}
            icon={faFacebook}
            size="lg"
          />
          <FontAwesomeIcon className={styles.icon} icon={faTwitter} size="lg" />
          <FontAwesomeIcon
            className={styles.icon}
            icon={faInstagram}
            size="lg"
          />
        </div>
      </nav>

  );
}
