import type { NextPage } from "next";
import Head from "next/head";
import Image from 'next/image';
import BackgroundImage from "../components/BackgroundImage";
import searchIcon from "../public/vercel.svg";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useSpring, animated } from 'react-spring'

const Home: NextPage = () => {
  const [title, setTitle] = useState(["Title 1", "Title 2", "Title 3"]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => {
      // setTitle((prevTitle) => (prevTitle === "Title 1" ? "Title 2" : "Title 1"));
      setIsVisible((prevVisible) => !prevVisible);
      setCurrentIndex((preIndex) => (preIndex + 1) % title.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);
  const props = useSpring({ opacity: 1, from: { opacity: 0 },x: 300 })
  const prop = [
    useSpring({ position:'absolute',transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',opacity: 1, from: { opacity: 0 },x: 300,y:100 }),
    useSpring({ position:'absolute',transform: isVisible ? 'translateY(100%)' : 'translateY(-100%)',opacity: 1, from: { opacity: 0 },x: 300 ,y:100}),
    useSpring({ position:'absolute',transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',opacity: 1, from: { opacity: 0 },x: 300 ,y:100})
  ]
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[100vh] ">
        <main>
          <div className="container mx-auto sm:px-5 md:px-10 lg:px-36 pt-12">
            <div className="flex text-white justify-between">
              <div className="">Real Estate</div>
              <div className=" w-2/5 header-search-input rounded-full flex items-center">
                <Image
                  width={0}
                  height={0}
                  className="w-5"
                  src="/icon-search.svg"
                  alt="serach-icon"
                />
                <input type="text" className="text-white bg-transparent ml-4" />
              </div>
              <div className=""></div>
            </div>

            <div className="title-content">
              {/* <AnimatePresence mode="wait">
                <motion.h1
                  className="text-white text-6xl"
                  key={currentIndex}
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                >
                  {title[currentIndex]}
                </motion.h1>
              </AnimatePresence> */}
              {isVisible &&<animated.div style={prop[currentIndex]}>
              <div className="text-6xl text-white">{title[currentIndex]}</div>
              </animated.div>}
            </div>
          </div>
          <div className='text-white  mt-[60vh] mr-[10vw]  flex justify-end items-end'>
            <div className='flex flex-col hover:cursor-pointer border-2 border-red-500 justify-center items-center'>
              <Image src="/next-right-arrow.svg" width={100} height={10} alt="Next Arrow" className='rightArrow' />
              <p className='text-2xl text-white '>Next</p>
            </div>
          </div>
          <BackgroundImage />
        </main>
      </div>
    </>
  );
};

export default Home;
