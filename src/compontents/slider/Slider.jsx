import React, { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import images from "../../locales/images.json";

import "./Slider.scss";

const Slider = props => {
  const { restaurant } = images;
  const [currentImageIndex, setCurrentImageIndex] = useState(2);
  const [currentImage, setCurrentImage] = useState(restaurant["restaurant1"]);

  const handlePrevious = () => {
    if (currentImageIndex !== 1) {
      setCurrentImageIndex(currentImageIndex - 1);
      setCurrentImage(restaurant[`restaurant${currentImageIndex}`]);
    } else {
      setCurrentImageIndex(Object.keys(images).length);
      setCurrentImage(restaurant[`restaurant${currentImageIndex}`]);
    }
  };

  const handleNext = () => {
    if (currentImageIndex !== Object.keys(images).length) {
      setCurrentImageIndex(currentImageIndex + 1);
      setCurrentImage(restaurant[`restaurant${currentImageIndex}`]);
    } else {
      setCurrentImageIndex(1);
      setCurrentImage(restaurant[`restaurant${currentImageIndex}`]);
    }
  };

  return (
    <div className="slider">
      <img
        src={currentImage.src}
        alt={`Slide ${currentImage.alt}`}
        className={`slider__image ${props.className}`}
      />
      <div className="slider__button-container">
        <button className="slider__button" onClick={handlePrevious}>
          <KeyboardArrowLeftIcon className="slider__button-icon" />
        </button>
        <button className="slider__button" onClick={handleNext}>
          <KeyboardArrowRightIcon className="slider__button-icon" />
        </button>
      </div>
    </div>
  );
};

export default Slider;
