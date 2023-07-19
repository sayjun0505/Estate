import type { NextPage } from "next";
import Head from "next/head";
import BackgroundImage from "../components/BackgroundImage";
import searchIcon from "../public/vercel.svg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
const Home: NextPage = () => {
  const [title, setTitle] = useState(["Title 1", "Title 2", "Title 3"]);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      // setTitle((prevTitle) => (prevTitle === "Title 1" ? "Title 2" : "Title 1"));
      setCurrentIndex((preIndex) => (preIndex + 1) % title.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head>
        <title>Real Estate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[100vh]">
        <main>
          <div className="container mx-auto sm:px-5 md:px-10 lg:px-36 pt-12">
            {/* <div className="flex text-white justify-between">
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
            </div> */}

            <div className="title-content">
              <AnimatePresence mode="wait">
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
              </AnimatePresence>
            </div>
          </div>

          <BackgroundImage />
        </main>
      </div>
    </>
  );
};

export default Home;
