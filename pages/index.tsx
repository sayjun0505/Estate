import type { NextPage } from "next";
import Head from "next/head";
import BackgroundImage from "../components/BackgroundImage";
import Image from "next/image";
import TitleAnimation from "../components/TitleAnimation";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Real Estate</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[100vh]">
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
              <TitleAnimation
                texts={["Real", "Esate", "Esatee"]}
                interval={7000}
                className="text-white text-4xl"
              />
              <TitleAnimation
                texts={["Real", "Esate", "eagdga"]}
                interval={7000}
                delay={800}
                className="text-white text-2xl"
              />
            </div>
          </div>

          <BackgroundImage />
        </main>
      </div>
    </>
  );
};

export default Home;
