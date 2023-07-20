import React, { useEffect, useState } from "react";
import Image from "next/image";
import wait from "waait";

interface ImageCrossFadeProps {
  imgUrl: string;
  width: number;
  height: number;
}

const ImageCrossFade = ({ imgUrl, width, height }: ImageCrossFadeProps) => {
  const [fadeIn, setFadeIn] = useState<boolean>(false);
  const [loaded, setLoaded] = useState<boolean>(false);
  const [loadedImage, setLoadedImage] = useState<string>(imgUrl);

  useEffect(() => {
    setLoaded(false);
    setFadeIn(true);
  }, [imgUrl]);

  return (
    <div className="absolute top-0 z-[-1] left-0 w-full bg-black">
      {fadeIn && (
        <div
          className={`w-full absolute top-0 left-0 z-10 transition-opacity duration-1000 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${imgUrl})`, height: "100vh", backgroundSize: "cover" }}
        >
          <Image
            onLoadingComplete={() => {
              setLoaded(true);
              wait(1100).then(() => {
                setLoadedImage(imgUrl);
              });
            }}
            alt=""
            src={imgUrl}
            priority
            width={0}
            height={0}
            style={{ display: "none" }}
          />
        </div>
      )}
      {loadedImage && (
        <div
          style={{
            backgroundImage: `url(${loadedImage})`,
            height: "100vh",
            backgroundSize: "cover",
          }}
          className={`w-full`}
        >
          <Image
            onLoadingComplete={() => {
              setFadeIn(false);
            }}
            alt=""
            src={loadedImage}
            priority
            width={0}
            height={0}
            style={{ display: "none" }}
          />
        </div>
      )}
    </div>
  );
};

export default React.memo(ImageCrossFade);
