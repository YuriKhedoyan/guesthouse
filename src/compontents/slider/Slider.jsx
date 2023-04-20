import React, { useState } from "react";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

import images from "../../locales/images.js";

import "./Slider.scss";

const { restaurant } = images;

const Slider = props => {
	const [currentImageIndex, setCurrentImageIndex] = useState(2);
	const [currentImage, setCurrentImage] = useState(Object.values(restaurant)[0]);

	const handlePrevious = () => {
		if (currentImageIndex !== 1) {
			setCurrentImageIndex(currentImageIndex - 1);
			setCurrentImage(restaurant[currentImageIndex]);
		} else {
			setCurrentImageIndex(Object.keys(images).length);
			setCurrentImage(restaurant[currentImageIndex]);
		}
	};

	const handleNext = () => {
		if (currentImageIndex !== Object.keys(images).length) {
			setCurrentImageIndex(currentImageIndex + 1);
			setCurrentImage(restaurant[currentImageIndex]);
		} else {
			setCurrentImageIndex(0);
			setCurrentImage(restaurant[currentImageIndex]);
		}
	};

	return (
		<div className="slider">
			<img
				src={currentImage.src}
				alt={currentImage.alt}
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
