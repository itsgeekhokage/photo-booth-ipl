import React, { useState, useEffect } from "react";
import styles from "./header.module.css";
import { useLocation } from "react-router-dom";

import garnierLogo from "./../../assets/header/garnierLogo.svg";
import mumbaiIndiansLogo from "./../../assets/header/mumbaiIndiansLogo.svg";

export default function Header() {
  const location = useLocation();
  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/grid") {
      setShowNavbar(false);
    } else if (location.pathname === "/") {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  }, [location]);

  return (
    showNavbar && (
      <div className={styles.Header}>
        <div className={styles.leftContainer}>
          <img src={garnierLogo} alt="garnier-logo" />
        </div>
        <div className={styles.rightContainer}>
          <img src={mumbaiIndiansLogo} alt="mumbai-indians-logo" />
        </div>
      </div>
    )
  );
}
