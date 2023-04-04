import React from 'react';

const Img = props => (
	<img
		src={props.pathToPicture}
		alt={props.alternativeName}
	/>
);

export default Img;
