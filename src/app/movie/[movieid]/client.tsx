"use client";
import React from "react";
import MoviesData from "@/movies.json";

type Props = {
  movieid: string;
};

function Client({ movieid }: Props) {
  const movie = MoviesData.find((movie) => movie.imdbid === movieid);
  return (
    <div className="relative w-full h-full overflow-auto">
      <div className=" w-3/4 p-6 mx-auto rounded-3xl z-10 relative my-8   ">
        <div
          className="aspect-[9/16] max-h-[600px]  rounded-3xl shadow-2xl "
          style={{
            background: `url(${movie?.image}) no-repeat center center / cover`,
          }}
        ></div>
      </div>

      {/* this the blurred backdrop   */}
      <div
        className="h-full w-full overflow-x-hidden blur-3xl  brightness-[.3] fixed inset-0 -z-1 "
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
