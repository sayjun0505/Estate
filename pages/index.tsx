import type { NextPage } from "next";
import Head from "next/head";
import BackgroundImage from "../components/BackgroundImage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Image Crossfade</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[100vh]">
        <main>
          <div className="container mx-auto px-36 pt-12">
            <div className="flex text-white justify-between">
              <div className="">Real Estate</div>
              <div className=" w-2/5 header-search-input rounded-full">
                <input type="text" className="text-white bg-transparent"  />
              </div>
              <div className="">sdfs</div>
            </div>
          </div>

          <BackgroundImage />
        </main>
      </div>
    </>
  );
};

export default Home;
