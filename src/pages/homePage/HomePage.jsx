import React from "react";
import styles from "./homePage.module.css";

import { Link } from "react-router-dom";

import garnierLogo from "./../../assets/header/garnierLogo.svg";
import mumbaiIndiansLogo from "./../../assets/header/mumbaiIndiansLogo.svg";
import txtWithMumbaiIndiansLogo from "./../../assets/home/txtWithMumbaiIndiansLogo.svg";
import headingTxt from "./../../assets/home/headingTxt.svg";

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      <div className={styles.topContainer}>
        <div className={styles.containerOne}>
          <img src={garnierLogo} alt="garnier-logo" />
        </div>

        <div className={styles.containerTwo}>
          <img src={txtWithMumbaiIndiansLogo} alt="mumbai-indians-logo" />
        </div>
      </div>

      <div className={styles.headingTxt}>
        <img src={headingTxt} alt="heading-txt" />
      </div>

      <Link to={"/camera"} className={styles.startBtn}>
        <button>START NOW</button>
      </Link>
    </div>
  );
}
