import React, { useState, useEffect } from "react"
import ImageCrossFade from "./ImageCrossFade"
import wait from "waait"

export default function BackgroundImage() {

  const [image, setImage] = useState<number>(0)

  const images = [
    '/sina-bahar-_BsZKOlhuyo-unsplash.jpg',
    '/maciek-sulkowski-gmejHJ6k-VY-unsplash.jpg',
    '/itadaki-jEeksuy9SMk-unsplash.jpg',
  ]

  useEffect(() => {
    wait(4000).then(() => {
      setImage((image + 1) % 3)
    })
  }, [image])

  return (
    <ImageCrossFade
      imgUrl={images[image]} width={1728} height={864}
    />
  )
}
