import React, { useState } from "react";
import styles from "./avatarPage.module.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from "react-router-dom";
// import select from "./../../../assets/select.png";

export default function AvatarPage() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState();
  const [cards, setCards] = useState();
  const [selectedImageIndex, setSelectedImageIndex] = useState();

  // toast options
  const toastOptions = {
    position: "top-left",
    autoClose: 4000,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
  };

  // submitting the selected image and post request to api
  const handleSubmit = () => {
    console.log("clicked");
    setGeneratedImage("");
    if (selectedImage) {
      axios
        .post("https://2eda-103-17-110-127.ngrok-free.app/rec", {
          image: capturedImage.split(",")[1],
          choice: selectedImage.split(",")[1],
        })
        .then(function (response) {
          console.log(response);
          setGeneratedImage(`data:image/webp;base64,${response.data.result}`);
        })
        .catch(function (error) {
          console.log(error);
        });
      navigate("/generated-image");
    } else {
      toast.error("Please select an image...", toastOptions);
    }
  };

  // filtering card image with actual image
  const filterActualImg = index => {
    if (selectedGender.toLowerCase() === "female") {
      const filteredActualImgArr = femaleCardsActual.filter(
        (actualImg, ActualIndex) => ActualIndex === index
      );
      return filteredActualImgArr[0];
    } else if (selectedGender.toLowerCase() === "male") {
      const filteredActualImgArr = maleCardsActual.filter(
        (actualImg, ActualIndex) => ActualIndex === index
      );
      return filteredActualImgArr[0];
    }
  };

  return (
    <div className={styles.AvatarPage}>
      <h1>
        SELECT YOUR <br /> AVATAR
      </h1>

      <main>
        {cards?.map((src, index) => (
          <div
            key={index}
            className={`singleImageContainer`}
            id={index == 0 || index == 7 || index == 3 ? "mt" : ""}
            onClick={() => {
              setSelectedImageIndex(index);
              console.log("img", src);
              var img = new Image();
              const actualImg = filterActualImg(index);
              img.src = actualImg;
              img.onload = () => {
                console.log("actual+>", actualImg);
                setSelectedImage(getImageData(img));
              };
            }}
          >
            <div className="imageParent">
              <img src={src} alt="modals" />
              <div className="imageHoverContainer"></div>
            </div>

            <img
              src={select}
              alt="selected"
              className={`selectIcon ${
                selectedImageIndex === index ? "showSelectIcon" : ""
              }`}
            />
          </div>
        ))}
      </main>

      <footer>
        <button onClick={handleSubmit}>Submit</button>
      </footer>
    </div>
  );
}
