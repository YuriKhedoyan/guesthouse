import React from "react";

const Img = props => (
  <img
    src={props.picture}
    className={props.class}
    id={props.imgId}
    alt={props.alt}
  />
)

export default Img;
