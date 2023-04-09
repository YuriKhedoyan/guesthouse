/* eslint-disable react/prop-types */
import React from "react";

const Img = props => (
  <img
    src={props.pathToPicture}
    alt={props.alternativeName}
    id={props.pictureId}
    className={props.pictureClassName}
  />
);

export default Img;
