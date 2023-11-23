"use client";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import React from "react";
import MoviesData from "@/movies.json";
import MovieList from "@/components/movieList";

type Props = {};

function client({}: Props) {
  const [watchlist, setWatchlist] = useLocalStorage<String[]>("watchlist", []);
  const watchListMovies = MoviesData.filter((movie) => {
    return watchlist?.includes(movie.imdbid);
  });
  return (
    <div className=" pb-16 md:pb-0 md:pt-8 h-full overflow-hidden">
      <div className="w-full  bg-secondary  h-full md:rounded-3xl   md:p-6 pt-4 px-2 flex flex-col  ">
        <div className=" text-2xl md:text-6xl font-bold md:pb-7 pb-5 flex gap-3 items-center ">
          WatchList
        </div>

        {watchListMovies.length > 0 ? (
          <MovieList movies={watchListMovies} />
        ) : (
          <div className="  text-gray-500  text-left py-5 h-full w-full flex justify-center  ">
            watchlist is empty{" "}
          </div>
        )}
      </div>
    </div>
  );
}

export default client;
