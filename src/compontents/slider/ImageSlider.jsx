import React from 'react';

// eslint-disable-next-line react/prop-types
function ImageSlider({ photo }) {
	return (
		<div className="image-slider">
			<img
				src={photo}
				alt="View From Top Of The House"
				id="sc1Background"
			/>
		</div>
	);
}

export default ImageSlider;
