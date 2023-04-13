import React from "react";

const Img = props => {
  let { id, src, alt, className } = { ...props };

  return <img id={id} src={src} alt={alt} className={className} />;
};

export default Img;
