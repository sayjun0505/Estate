import type { NextPage } from "next";
import Head from "next/head";
import BackgroundImage from "../components/BackgroundImage";
import Image from "next/image";
import TitleAnimation from "../components/TitleAnimation";
import { useState } from "react";
import MenuOverlay from "../components/OverlayMenu";
import Hamberger from "../components/Hamberger";
const Home: NextPage = () => {
  const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
  const [imageIndex, setImageIndex] = useState<number>(0);
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="h-[100vh] relative">
        <main>
          <div className="w-4/5 sm:w-full mx-auto sm:px-5 md:px-10 lg:px-36 pt-4 ">
            <MenuOverlay
              navbarOpen={navbarOpen}
              setNavbarOpen={setNavbarOpen}
              setImageIndex={setImageIndex}
            />
            <div className="flex text-white justify-between px-2 items-center flex-col sm:flex-row">
              <div className="self-center">
                <Image src="/logo.png" width={100} height={100} alt="logo" />
              </div>
              <div className="flex flex-row w-full sm:w-4/5 justify-between ">
                <div className="w-full sm:max-w-[700px] header-search-input rounded-full flex items-center">
                  <Image
                    width={0}
                    height={0}
                    className="w-5"
                    src="/icon-search.svg"
                    alt="serach-icon"
                  />
                  <input type="text" className="text-white bg-transparent ml-4" />
                </div>
                <div className="ml-10 my-auto">
                  <Hamberger navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
                </div>
              </div>
            </div>

            <div className={`title-content mt-[20vh] ${navbarOpen ? "hidden" : ""}`}>
              <div className="mb-10">
                <TitleAnimation
                  slideIndex={imageIndex}
                  texts={["VILLA!", "GAMBRIN"]}
                  interval={7000}
                  className="text-white text-4xl lg:text-6xl"
                />
                <TitleAnimation
                  slideIndex={imageIndex}
                  texts={["ESPEJO AQUA", ""]}
                  interval={7000}
                  className="text-white text-4xl lg:text-6xl"
                />
              </div>
              <div className="max-w-[500px]">
                <TitleAnimation
                  slideIndex={imageIndex}
                  texts={[
                    "Welcome to the future of real estate! Our selection of futuristic houses is designed to meet the needs of the modern homeowner.",
                    "Our properties feature the latest technology, innovative design, and eco-friendly features. Experience the home of tomorrow, today.",
                  ]}
                  interval={7000}
                  className="text-white bg-black/50 text-xl p-4"
                />
              </div>
            </div>
          </div>

          <BackgroundImage imageIndex={imageIndex} setImageIndex={setImageIndex} />
        </main>

        <div onClick={()=>alert("I'm next btn")} className="absolute bottom-5 md:bottom-5 lg:bottom-20 right-10 hover:cursor-pointer">
          <Image height={10} width={100} src="/next_arrow.svg" alt="" />
          <p className="text-white text-center ">Next</p>
        </div>
      </div>

      <h1>landing page</h1>
    </>
  );
};

export default Home;
