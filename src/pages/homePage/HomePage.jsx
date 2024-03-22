import React from "react";
import styles from "./homePage.module.css";

import { Link } from "react-router-dom";

import garnierLogo from "./../../assets/header/garnierLogo.svg";
import mumbaiIndiansLogo from "./../../assets/header/mumbaiIndiansLogo.svg";

export default function HomePage() {
  return (
    <div className={styles.HomePage}>
      <div className={styles.containerOne}>
        <img src={garnierLogo} alt="garnier-logo" />
      </div>

      <div className={styles.containerTwo}>
        <p className={`gothamBlack ${styles.txt}`}>
          OFFICIAL <br /> GROOMING PARTNER
        </p>
        <div className={styles.logoContainer}>
          <img src={mumbaiIndiansLogo} alt="mumbai-indians-logo" />
        </div>
      </div>

      <h1 className={`silverForteFont`}>
        CLICK TO TRANSFORM <br />
        INTO YOUR <br />
        MUMBAI INDIAN AVATAR!
      </h1>

      <Link to={"/camera"}>
        <button>START NOW</button>
      </Link>
    </div>
  );
}
