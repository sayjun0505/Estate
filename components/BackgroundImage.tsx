import React, { useState, useEffect } from "react";
import ImageCrossFade from "./ImageCrossFade";

interface imageProps {
  imageIndex?: number;
  setImageIndex?: (open: number) => void;
}
const BackgroundImage: React.FC<imageProps> = ({ imageIndex = 0, setImageIndex = () => {} }) => {
  const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg", "/6.jpg"];
  let timeoutId: NodeJS.Timeout | undefined;

  const resetInterval = () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      setImageIndex((imageIndex + 1) % images.length);
    }, 7000);
  };

  useEffect(() => {
    resetInterval();
    return () => {
      clearTimeout(timeoutId);
    };
  }, [imageIndex]);

  return <ImageCrossFade imgUrl={images[imageIndex]} />;
};
export default BackgroundImage;
