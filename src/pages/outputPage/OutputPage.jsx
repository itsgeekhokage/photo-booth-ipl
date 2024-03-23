import React, { useState } from "react";
import styles from "./outputPage.module.css";
import { Link } from "react-router-dom";

import Qr from "../../components/qr/Qr";

import loader from "./../../assets/output/loader.svg";

export default function OutputPage({ generatedImg, url }) {
  const [showQr, setShowQr] = useState(false);
  const [qr, setQr] = useState("");

  return (
    <div className={styles.OutputPage}>
      {generatedImg ? (
        <h1 className={styles.headerOne}>READY TO DOWNLOAD</h1>
      ) : (
        <h1 className={styles.headerTwo}>
          GENERATING <br />
          YOUR AVATAR
        </h1>
      )}
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
          <img src={loader} alt="loader" />
        </div>
      )}

      {/* qr */}
      {showQr && <Qr url={url} setShowQr={setShowQr} />}
    </div>
  );
}
