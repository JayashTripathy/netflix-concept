"use client";
import React from "react";
import MoviesData from "@/movies.json";
import Link from "next/link";
import { LucidePlayCircle, LucideShare2 } from "lucide-react";

type Props = {
  movieid: string;
};

function Client({ movieid }: Props) {
  const movie = MoviesData.find((movie) => movie.imdbid === movieid);
  return (
    <div className="relative w-full md:h-[calc(100%-6rem)] h-[calc(100%-4rem)] overflow-auto     ">
      <div className=" w-3/4 py-10  mx-auto h-full z-10 relative  flex   flex-col md:flex-row items-center gap-3">
        <div className="h-full md:py-8 flex-1 md:pr-8">
          <div className="text-3xl md:text-5xl font-bold">{movie?.title}</div>
          <div className="py-3 text-font-secondary">{movie?.description}</div>
          <div className="flex gap-2">
            <div className="text-xl whitespace-nowrap text-primary flex gap-2 justify-center items-center border-2 border-solid border-primary p-3 px-5 rounded-3xl hover:bg-secondary ">
              Watch Now <LucidePlayCircle className=" text-primary" size={40} />
            </div>
            <div className="text-xl  bg-secondary flex gap-2 justify-center items-center  p-3 px-5 rounded-3xl ">
              Share <LucideShare2 />
            </div>
          </div>
          <br />
          <div className="  overflow-hidden max-h-[15rem] aspect-video my-6">
            <iframe
              className="rounded-3xl  h-full w-full"
              src={movie?.trailer_embed_link}
            ></iframe>
          </div>
        </div>
        <div className="flex md:flex-col gap-3 h-full py-3 w-full md:w-auto ">
          <div className="rounded-xl text-secondary font-bold justify-center items-center flex gap-1 flex-col w-20  h-20 bg-amber-500 ">
            RANK
            <div className=" w-full text-2xl text-center text-amber-200 block text23xl before:absolute before:w-full relative before:content-[''] before:inset-0 before:h-[1px] before:bg-secondary before:-translate-y-[5px] before:opacity-30 ">
              {movie?.rank}
            </div>{" "}
          </div>
          <Link
            href={movie?.imdb_link as unknown as URL}
            className="rounded-xl text-secondary font-bold justify-center items-center flex gap-1 flex-col w-20  h-20 bg-yellow-500 "
          >
            {" "}
            IMDB
            <div className="w-full text-center text-yellow-200 block text-2xl before:absolute before:w-full relative before:content-[''] before:inset-0 before:h-[1px] before:bg-secondary before:-translate-y-[5px] before:opacity-30 ">
              {movie?.rating}{" "}
            </div>
          </Link>
          <div className="rounded-xl text-secondary font-bold justify-center items-center flex gap-1 flex-col w-20  h-20 bg-slate-500 ">
            {" "}
            YEAR
            <div className="w-full text-center text-slate-200 block text-2xl before:absolute before:w-full relative before:content-[''] before:inset-0 before:h-[1px] before:bg-secondary before:-translate-y-[5px] before:opacity-30 ">
              {movie?.year}
            </div>
          </div>
        </div>
        <div
          className="aspect-[9/16]  max-h-full h-full  rounded-3xl shadow-2xl md:block hidden "
          style={{
            background: `url(${movie?.image}) no-repeat center center/cover`,
          }}
        ></div>
      </div>

      {/* this the blurred backdrop   */}
      <div
        className="h-full w-full overflow-x-hidden blur-3xl  brightness-[.3] fixed inset-0 -z-1  "
        style={{
          backgroundImage: `url(${movie?.image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
}

export default Client;
