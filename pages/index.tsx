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
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="h-[100vh] relative">
        <main>
          <div className="w-4/5 sm:w-full mx-auto sm:px-5 md:px-10 lg:px-36 pt-4 ">
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
                  <Image src="/hamberger.svg" width={30} height={30} alt="" />
                </div>
              </div>
            </div>

            <div className="title-content mt-[20vh]">
              <div className="mb-10">
                <TitleAnimation
                  texts={[
                    "WELCOME!",
                    "BEST REAL ESTATE",
                    "THE FUTURE OF LIVING",
                    "IDEAL LOCATION WITH NATURE HARMONY.",
                    "NATURE-INSPIRED PROPERTIES",
                    "PERFECT BALANCE",
                  ]}
                  interval={7000}
                  className="text-white text-3xl md:text-4xl lg:text-6xl"
                />
              </div>
              <div className="max-w-[500px]">
                <TitleAnimation
                  texts={[
                    "Welcome to the future of real estate! Our selection of futuristic houses is designed to meet the needs of the modern homeowner.",
                    "Our properties feature the latest technology, innovative design, and eco-friendly features. Experience the home of tomorrow, today.",
                    "As you step inside, you'll be struck by the warmth and comfort of the interior woods.",
                    "From houses that incorporate living walls and green roofs to smart homes that use AI and automation to enhance your daily life, our listings are designed to offer the best of both worlds.",
                    "The interior of each property is designed to evoke a sense of calm and relaxation, with natural colors and textures used throughout.",
                    "Residents can enjoy the best of both worlds: a stylish and contemporary living space, surrounded by trees, gardens, and parks.",
                  ]}
                  interval={7000}
                  delay={400}
                  className="text-white bg-black/50 text-xl p-4"
                />
              </div>
            </div>
          </div>

          <BackgroundImage />
        </main>
      </div>
    </>
  );
};

export default Home;
