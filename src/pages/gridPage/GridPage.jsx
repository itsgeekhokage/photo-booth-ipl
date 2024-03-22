/** @format */

import React, { useState } from "react";
import styles from "./gridPage.module.css";

import card1 from "../../assets/grid/cards/card1.jpg";
import card2 from "../../assets/grid/cards/card2.jpg";
import card3 from "../../assets/grid/cards/card3.jpg";
import card4 from "../../assets/grid/cards/card4.jpg";

export default function GridPage() {
  const [list, setList] = useState([
    card1,
    card2,
    card3,
    card4,
    card1,
    card2,
    card3,
    card4,
    card3,
    card4,
  ]);
  return (
    <div className={styles.GridPage}>
      <div className={styles.mainContainer}>
        <div className={styles.firstRow}>
          <div className={styles.firstLogo}>logo</div>
          <div className={styles.firstRowStatement}>GAME FACE ON</div>
          <div className={styles.secondLogo}>logo</div>
        </div>
        <div className={styles.secondRow}>
          <div className={styles.secondRowFirstColumn}></div>
          <div className={styles.secondRowSecondColumn}>
            <div className={styles.gridImagesGrid}>
              {list.map((item, ind) => (
                <img
                  key={ind}
                  src={item}
                  className={styles.gridImageItem}
                />
              ))}
            </div>
            <div className={styles.secondRowBottomText}>
              coach : turbobright
            </div>
          </div>
        </div>
        <div className={styles.thirdRow}>
          <span className={styles.thirdRowFirstSpan}>@thegarnierman</span>
          <span className={styles.thirdRowSecondSpan}>
            Official Grooming Partner
          </span>
        </div>
      </div>
    </div>
  );
}
