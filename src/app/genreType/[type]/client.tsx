"use client";
import MovieList from "@/components/movieList";
import BackButton from "@/components/ui/backButton";
import { GroupedGenre } from "@/types/movies";
import { getGenreStyle } from "@/utils/getGenreStyle";
import { getGoupedGenreMovies } from "@/utils/getGoupedGenreMovies";
import React, { useMemo } from "react";

type Props = {
  genreType: string;
};

function client({ genreType }: Props) {
  const color = getGenreStyle(genreType)?.background;
  const moviesByGenre: GroupedGenre = useMemo(getGoupedGenreMovies, []);
  const genreData = moviesByGenre[genreType];

  return (
    <div className=" md:w-3/4 mx-auto  md:h-full h-[calc(100%-7.5rem)]  flex flex-col   ">
      <div className="w-full  bg-secondary md:h-[85%] h-full md:rounded-3xl   md:p-6 py-4 px-2 flex flex-col  ">
        <div
          className=" text-2xl md:text-6xl font-bold md:pb-7 pb-5 flex gap-3 items-center "
          style={{
            color: color,
          }}
        >
        <BackButton />
          {genreType}
        </div>

        <MovieList movies={genreData} />
      </div>
    </div>
  );
}

export default client;
