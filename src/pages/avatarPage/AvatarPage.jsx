import React, { useEffect, useState } from "react";
import styles from "./avatarPage.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";

import { cardsArr } from "../../utils/avatar/cards";
import { originalImagesArr } from "../../utils/avatar/originalImages";
import { base64 } from "../../utils/base64";
import { db } from "./../../config/firebase";
import {
  collection,
  arrayUnion,
  doc,
  updateDoc,
  addDoc,
} from "firebase/firestore";

import select from "./../../assets/avatar/select.svg";

export default function AvatarPage({ setGeneratedImg, capturedImg, setUrl }) {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState();
  const [selectedImageIndex, setSelectedImageIndex] = useState();

  // converting selectedImage to base64 format
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  const getImageData = img => {
    canvas.width = img.width;
    canvas.height = img.height;
    context.drawImage(img, 0, 0);
    return canvas.toDataURL("image/png");
  };

  // toast options
  const toastOptions = {
    position: "top-left",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  useEffect(() => {
    const originalImg = filterOriginalImg(selectedImageIndex);
    base64(originalImg, base64Data => {
      console.log("Base64 data:", base64Data);
      setSelectedImage(base64Data);
    });
  }, [selectedImageIndex]);

  // filtering card image with original image
  const filterOriginalImg = index => {
    const filteredOriginalImgArr = originalImagesArr.filter(
      (originalImg, originalImgIndex) => originalImgIndex === index
    );
    return filteredOriginalImgArr[0];
  };

  // image uploading on firebase
  const addLinks = async imgLink => {
    const valueRef = collection(db, "images");

    // timestamp
    const timestamp = new Date();
    try {
      await addDoc(valueRef, {
        link: imgLink,
        timestamp: timestamp,
      });
      console.log("image and timestamp uploaded on Firebase.");
    } catch (err) {
      console.error("error adding document:", err);
    }
  };

  // image uploading on server
  const getUrl = url => {
    axios
      .post(
        "https://adp24companyday.com/aiphotobooth/aiphotobooth_garnier/upload.php",
        {
          img: url,
        }
      )
      .then(function (response) {
        setUrl(response.data.url);
        console.log("image uploaded on server");
        addLinks(response.data.url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // submitting the selected image and post request to api
  const handleSubmit = () => {
    console.log("submitting selected avatar");
    setGeneratedImg("");
    if (selectedImage && capturedImg) {
      axios
        .post("https://aada-103-17-110-127.ngrok-free.app/rec", {
          image: capturedImg.split(",")[1],
          choice: selectedImage.split(",")[1],
        })
        .then(function (response) {
          console.log(response);
          setGeneratedImg(`data:image/webp;base64,${response.data.result}`);
          // image uploading on server
          getUrl(response.data.result);
        })
        .catch(function (error) {
          console.log(error);
        });
      navigate("/output");
    } else {
      toast.error(
        "Please select an image or capture your photo again...",
        toastOptions
      );
    }
  };

  return (
    <div className={styles.AvatarPage}>
      <h1>
        SELECT YOUR <br /> AVATAR
      </h1>

      <main className={styles.main}>
        {cardsArr?.map((img, index) => (
          <div
            key={index}
            className={styles.singleImageContainer}
            onClick={() => {
              setSelectedImageIndex(index);
              // const originalImg = filterOriginalImg(index);
              /* 
              base64(originalImg, base64Data => {
                console.log("Base64 data:", base64Data);
                setSelectedImage(base64Data);
              }); */

              var img = new Image();
              const originalImg = filterOriginalImg(index);
              img.src = originalImg;
              img.onload = () => {
                setSelectedImage(getImageData(img));
              };
            }}
          >
            <div className={styles.parent}>
              <div className={styles.imgContainer}>
                <img src={img} alt="avatar" />
              </div>

              <div
                className={`${styles.hoverContainer} ${
                  selectedImageIndex === index ? styles.showHoverContainer : ""
                }`}
              >
                <div className={`${styles.selectIcon}`}>
                  <img src={select} alt="selected" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </main>

      <footer className={styles.footer}>
        <button onClick={handleSubmit} className={styles.submitBtn}>
          SUBMIT
        </button>
      </footer>
      <ToastContainer />
    </div>
  );
}
