import React, { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import restaurant4 from '../../assets/images/restaurant4.jpg';
import restaurant7 from '../../assets/images/restaurant7.jpg';
import garden9 from '../../assets/images/garden9.jpg';
import house2 from '../../assets/images/house2.jpg';

import './Slider.scss';

const Slider = props => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);
	const images  = [house2, garden9, restaurant7, restaurant4];

	const handlePrevious = () => {
		setCurrentImageIndex(
			(currentImageIndex + images.length - 1) % images.length
		);
	};

	const handleNext = () => {
		setCurrentImageIndex((currentImageIndex + 1) % images.length);
	};

	return (
		<div className="slider">
			<img
				// eslint-disable-next-line react/prop-types
				className={`slider__image ${props.photoClassName}`}
				src={images[currentImageIndex]}
				alt={`Slide ${currentImageIndex}`}
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
