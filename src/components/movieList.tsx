"use client";
import { Movie } from "@/types/movies";
import React from "react";
import Badge from "./ui/badge";
import Link from "next/link";
import WatchListButton from "./ui/watchListButton";

type Props = {
  movies: Movie[];
};

function MovieList({ movies }: Props) {
  return (
    <div className=" flex flex-col gap-4  overflow-auto h-full">
      {movies.map((movie) => (
        <Link
          href={`/movie/${movie.imdbid}`}
          key={movie.id}
          className=" p-3 rounded-3xl   flex items-center bg-[#181818] gap-3 shadow-xl  "
        >
          <div className="flex  md:text-xl  gap-3 items-center w-full  ">
            <img
              src={movie.thumbnail}
              className="h-24 aspect-[9/16] rounded-xl"
            />
            <div className="md:flex w-full  ">
              <div className=" flex gap-1 flex-col flex-1 ">
                {movie.title}
                <div className="flex md:gap-2 flex-wrap mb-2">
                  {[
                    {
                      title: movie?.director[0],
                      placeholder: "Directed By",
                    },
                    {
                      title: movie?.writers[0].split("(")[0],
                      placeholder: "Witten By",
                    },
                  ].map(
                    (item, ind) =>
                      item && (
                        <>
                          <Badge
                            key={ind}
                            title={item.placeholder + " " + item.title}
                            className="text-xs md:text-sm border-0 text-gray-500 py-[1px] px-0 leading-4"
                          />
                          {ind === 0 && (
                            <span className=" -translate-y-[2px] text-gray-500 hidden md:block ">
                              •
                            </span>
                          )}
                        </>
                      )
                  )}
                </div>
              </div>
              <WatchListButton movie={movie} />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
