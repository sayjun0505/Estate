import React, { useState, useEffect } from "react";
import ImageCrossFade from "./ImageCrossFade";
import wait from "waait";

export default function BackgroundImage() {
  const [image, setImage] = useState<number>(0);

  const images = ["/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg", "/6.jpg"];

  useEffect(() => {
    wait(7000).then(() => {
      setImage((image + 1) % images.length);
    });
  }, [image]);

  return <ImageCrossFade imgUrl={images[image]} width={1728} height={864} />;
}
