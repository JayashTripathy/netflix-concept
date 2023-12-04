import Top10Movies from "@/components/top10Movies";
import TopMoviesStrip from "@/components/topMoviesStrip";
import { Info, Play, PlayIcon, Plus } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* <TopMoviesStrip />
      <Top10Movies /> */}

      <div className="flex   w-full justify-between overflow-hidden h-[600px]   relative">
        <div className="hidden md:relative bottom-0 md:flex flex-col  justify-end pl-20 z-10    pb-16">
          <div className="flex gap-2 justify-start items-center ">
            <Image
              src="/logo.png"
              width={150}
              height={150}
              alt="logo"
              className=" max-w-[30px] z-10"
            />
            S E R I E S
          </div>
          <img
            src="/mh-1.png"
            className=" mix-blend-screen max-w-[400px] "
          ></img>
          <div className=" flex flex-col gap-4 py-8">
            <div className="z-10 flex items-center font-bold gap-2">
              <img src="/icons/IMDb.svg" className="w-16" /> 8.8/10
            </div>

            <div className="z-10 flex items-center gap-2 text-lg ">
              <span className="text-primary">2B+</span>Streams
            </div>
            <div className="text-lg flex gap-3">
              <button className="bg-primary text-white w-40 py-2 rounded-full">
                Play
              </button>
              <button className="bg-white text-black w-40 py-2 rounded-full">
                Watch Trailer
              </button>
            </div>
          </div>
        </div>
        <div className="md:hidden absolute bottom-0 z-10 w-full flex gap-5 flex-col justify-center items-center ">
          <div className="flex gap-2 justify-center items-center">
            <div className="font-bold text-center   border-2 aspect-square w-8 h-8 flex flex-col justify-center items-center">
              <div className="text-[.45rem]">TOP</div>
              <div className="text-xs leading-[.6]">10</div>
            </div>
            #1 in India Today
          </div>
          <div className=" flex  gap-5">
            <div className="flex flex-col items-center">
              <Plus /> My List
            </div>
            <div className="flex  gap-2  bg-gray-300  text-black px-4 py-2 rounded-md font-bold justify-center items-center">
              <PlayIcon /> Play
            </div>
            <div className="flex flex-col items-center">
              <Info /> Info
            </div>
          </div>
        </div>
        <div className="w-full max-h-[600px]  relative aspect-video bg-[url(/mh-2.png)] bg-cover bg-center bg-no-repeat">
          {/* <img src="/mh-2.png" className=" h-full bg-cover "></img> */}
          <div className="hidden md:block md:absolute h-full w-full top-0 bg-gradient-to-r from-10% to-40%  from-black  to-transparent z-0"></div>
          <div className="absolute h-full w-full top-0 bg-gradient-to-t from-10% to-50%   from-black  to-transparent z-0"></div>
        </div>
      </div>
    </div>
  );
}
