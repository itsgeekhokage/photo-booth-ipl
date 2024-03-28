import React, { useState } from "react";
import styles from "./loader.module.css";

export default function Loader() {
  const [lineArr, setLineArr] = useState([]);
  let i = 1;
  const arr = [];
  setInterval(() => {
    /* console.log(i, lineArr);
    arr.push(i);
    setLineArr(arr);
    i++; */
    console.log("hi");
  }, 4000);
  return (
    <span className={styles.Loader}>
      {lineArr?.map((item, index) => (
        <div className={styles.line} key={index}></div>
      ))}
    </span>
  );
}
