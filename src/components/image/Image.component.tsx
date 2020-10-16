import React from "react";
import "./Image.styles.scss";

export interface ImageProps {
  imageUrl: string;
  name: string;
}

const Image = ({ imageUrl, name }: ImageProps) => {
  return <img src={imageUrl} alt={`${name}`} />;
};

export default Image;
