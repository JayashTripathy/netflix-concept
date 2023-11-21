"use client";
import React from "react";
import moviesData from "@/movies.json";
import Link from "next/link";

type Props = {};

function Top10Movies({}: Props) {
  const top10Movies = moviesData
    .filter((movie) => movie.rank <= 10)
    .sort((a, b) => a.rank - b.rank);

  return (
    <div>
      <br />
      <h1 className="text-3xl font-semibold px-6">Top 10</h1>
      <br />
      <div className="flex gap-3 md:gap-2 overflow-hidden overflow-x-auto p-3 md:p-6 ">
        {top10Movies.map((movie, ind) => (
          <Link
            href={`movie/${movie.imdbid}`}
            className="flex gap-2 bg-[#161616] p-2 rounded-3xl shadow-2xl items-end "
          >
            <div
              className="md:h-80  h-60 aspect-[9/16] rounded-3xl relative flex items-end shadow-xl "
              style={{
                background: `url(${movie.image})`,
                backgroundPosition: "center",
              }}
            >
              <div className="absolute h-full w-full top-0 bg-gradient-to-t from-black  to-transparent rounded-3xl  "></div>

              <div
                className="absolute bottom-0 right-0 text-8xl font-extrabold"
                style={{
                  textShadow:
                    "1px 6px 0px black, 1px 7px 0px black, 1px 8px 0px black, 1px 9px 0px black, 1px 10px 0px black, 1px 11px 0px black  ",
                }}
              >
                {ind + 1}
              </div>
            </div>
            <div className=" w-28 mb-3 ">{movie.title}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Top10Movies;
