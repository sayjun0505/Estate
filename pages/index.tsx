import type { NextPage } from "next";
import Head from "next/head";
import Image from 'next/image';
import BackgroundImage from "../components/BackgroundImage";

const Home: NextPage = () => {
  
  const nextstep=()=>{
    alert("Why click me? Don't disturb me.")
  }
  

  return (
    <>
      <Head>
        <title>Image Crossfade</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-[100vh] ">
        <main>
          <div className="container mx-auto px-36 pt-12 ">
            <div className="flex text-white justify-between">
              <div className="">Real Estate</div>
              <div className=" w-2/5 header-search-input rounded-full">
                <input type="text" className="text-white bg-transparent"  />
              </div>
              <div className="">sdfs</div>
            </div>
          </div>
          <div className='text-white  mt-[60vh] mr-[10vw]  flex justify-end items-end'>
            <div onClick={nextstep} className='flex flex-col hover:cursor-pointer border-2 border-red-500 justify-center items-center'> 
              <Image src="/next-right-arrow.svg" width={100} height={10} alt="Next Arrow" className='rightArrow' />              
              <p className='text-2xl text-white '>Next</p>
            </div>
          </div>
          <div>
      
    </div>
          <BackgroundImage />
        </main>
      </div>
    </>
  );
};

export default Home;
