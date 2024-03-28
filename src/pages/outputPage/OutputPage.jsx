import React, { useState } from "react";
import styles from "./outputPage.module.css";
import { Link } from "react-router-dom";

import Qr from "../../components/qr/Qr";
import Loader from "../../components/loader/Loader";

import loader from "./../../assets/output/loader.svg";
import readyText from "./../../assets/output/readyText.svg";
import generatingText from "./../../assets/output/generatingText.svg";

export default function OutputPage({ generatedImg, url }) {
  const [showQr, setShowQr] = useState(false);

  return (
    <div className={styles.OutputPage}>
      {/*  {generatedImg ? (
        <h1 className={styles.headerOne}>READY TO DOWNLOAD</h1>
      ) : (
        <h1 className={styles.headerTwo}>
          GENERATING <br />
          YOUR AVATAR
        </h1>
      )} */}
      <div className={styles.headingImg}>
        <img src={generatedImg ? readyText : generatingText} alt="image" />
      </div>

      {generatedImg ? (
        <div className={styles.generatedImgContainer}>
          <div className={styles.imgContainer}>
            <img src={generatedImg} alt="generated-image" />
          </div>
          <div className={styles.btnContainer}>
            <button onClick={() => setShowQr(true)} className={styles.btn}>
              GENERATE QR
            </button>
            <Link to={"/"}>
              <button className={styles.btn}>START AGAIN</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.loader}>
          {/* <img src={loader} alt="loader" /> */}
          <Loader />
        </div>
      )}

      {/* qr */}
      {showQr && <Qr url={url} setShowQr={setShowQr} />}
    </div>
  );
}
