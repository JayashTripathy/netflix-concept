import Top10Movies from "@/components/top10Movies";
import TopMoviesStrip from "@/components/topMoviesStrip";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      {/* <TopMoviesStrip />
      <Top10Movies /> */}

      <div className="flex bg-secondary max-h-[600px] w-full justify-between overflow-hidden">
        <div className="flex flex-col justify-center pl-20 z-10 text-center w-full ">
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
        </div>

        <img src="/mh-2.png" className=" scale-150"></img>
        <div className="absolute h-full w-full top-0 bg-gradient-to-r from-30% to-70%  from-black  to-transparent"></div>
        <div className="absolute h-full w-full top-0 bg-gradient-to-t from-30% to-60%   from-black  to-transparent"></div>
      </div>
    </div>
  );
}
