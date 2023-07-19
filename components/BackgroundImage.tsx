import React, { useState, useEffect } from "react"
import ImageCrossFade from "./ImageCrossFade"
// import { useSpring, animated } from 'react-spring';
import wait from "waait";
export default function BackgroundImage() {
  const [image, setImage] = useState<number>(0);
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  const images = [
    '/sina-bahar-_BsZKOlhuyo-unsplash.jpg',
    '/maciek-sulkowski-gmejHJ6k-VY-unsplash.jpg',
    '/itadaki-jEeksuy9SMk-unsplash.jpg',
  ];

  useEffect(() => {
    wait(7000).then(() => {
      setImage((image + 1) % 3)
    })
  }, [image])

  return (
    <>
      <ImageCrossFade
        imgUrl={images[image]}
        width={1728}
        height={864}
      />
      {/* <animated.div style={animation}>
        <h1 className="text-2xl text-white">VILLA</h1>
        <h1 className="text-2xl text-white">ESPEJO AOUA</h1>
      </animated.div> */}
    </>
  )
}