import React, { useState, useEffect } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import './Slider.scss';

import restaurant4 from '../../assets/images/restaurant4.jpg';
import restaurant7 from '../../assets/images/restaurant7.jpg';
import garden9 from '../../assets/images/garden9.jpg';

const Slider = ( props ) => {
	const photos = [restaurant4, restaurant7, garden9];
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentImageIndex((currentImageIndex + 1) % photos.length);
		}, 3000);
		return () => clearInterval(intervalId);
	}, [currentImageIndex, photos.length]);

	const handlePrevious = () => {
		setCurrentImageIndex(
			(currentImageIndex + photos.length - 1) % photos.length
		);
	};

	const handleNext = () => {
		setCurrentImageIndex((currentImageIndex + 1) % photos.length);
	};

	return (
		<div className="slider">
			<img
				// eslint-disable-next-line react/prop-types
				className={`slider__image ${props.photoClassName}`}
				src={photos[currentImageIndex]}
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
