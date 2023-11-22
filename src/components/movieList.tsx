"use client";
import { Movie } from "@/types/movies";
import React from "react";
import Badge from "./ui/badge";
import Link from "next/link";

type Props = {
  movies: Movie[];
};

function MovieList({ movies }: Props) {
  return (
    <div className=" flex flex-col gap-4  overflow-auto">
      {movies.map((movie) => (
        <Link
          href={`/movie/${movie.imdbid}`}
          key={movie.id}
          className=" p-3 rounded-3xl   flex items-center bg-[#181818] gap-3 shadow-xl  "
        >
          <div className="flex  md:text-2xl  gap-3 items-center">
            <img
              src={movie.thumbnail}
              className="h-24 aspect-[9/16] rounded-xl"
            />
            <div className=" flex gap-1 flex-col ">
              {movie.title}
              <div className="flex gap-2 flex-wrap">
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
                      <Badge
                        key={ind}
                        title={item.placeholder + " " + item.title}
                        className="text-xs md:text-sm border-gray-500 text-gray-500 py-[1px]"
                      />
                    )
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default MovieList;
