import React, { useState, useRef } from "react";
import styles from "./cameraPage.module.css";
import { useNavigate, Link } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Webcam from "react-webcam";

export default function CameraPage({ setCapturedImg }) {
  const webRef = useRef();
  const navigate = useNavigate();
  const [img, setImg] = useState();
  const [isCaptured, setIsCaptured] = useState(false);

  // handle-capture
  const handleCapture = e => {
    setIsCaptured(true);
    setImg(webRef.current.getScreenshot());
  };

  // handle-retake
  const handleRetake = e => {
    setIsCaptured(false);
    img && setImg("");
  };

  // toast options
  const toastOptions = {
    position: "top-left",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  // handle submit
  const handleSubmit = () => {
    console.log("captured image submitting");
    if (img) {
      setCapturedImg(img);
      navigate("/avatar");
    } else {
      toast.error("Please capture your image", toastOptions);
    }
  };

  return (
    <div className={styles.CameraPage}>
      <h1>{isCaptured ? "DO YOU LIKE THIS ?" : "SMILE AND CLICK !"}</h1>

      <main className={styles.main}>
        <div className={styles.webcamParent}>
          <Webcam
            ref={webRef}
            id={styles.webcam}
            forceScreenshotSourceSize={true}
          />
          {img && (
            <img
              src={img}
              alt="captured image"
              className={styles.capturedImage}
            />
          )}
        </div>
      </main>

      <footer className={styles.footer}>
        {isCaptured ? (
          <div className={styles.footer}>
            <button onClick={handleSubmit} className={styles.captureBtn}>
              YES! SUBMIT
            </button>
            <button
              onClick={e => handleRetake(e)}
              className={styles.captureBtn}
            >
              RETAKE
            </button>
          </div>
        ) : (
          <button onClick={e => handleCapture(e)} className={styles.captureBtn}>
            CAPTURE
          </button>
        )}
      </footer>
    </div>
  );
}
