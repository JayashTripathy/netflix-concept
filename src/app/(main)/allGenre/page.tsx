import React, { useMemo } from "react";
import { Movie } from "@/types/movies";
import MoviesData from "@/movies.json";
import { getGenreStyle } from "@/utils/getGenreStyle";
import Link from "next/link";

type Props = {};
type GroupedGenre = {
  [key: string]: Movie[];
};

function page({}: Props) {
  const moviesByGenre: GroupedGenre = useMemo(() => {
    const groupedMovies: GroupedGenre = {};
    MoviesData.forEach((movie) => {
      movie.genre.forEach((genre) => {
        if (groupedMovies[genre]) {
          groupedMovies[genre].push(movie);
        } else {
          groupedMovies[genre] = [movie];
        }
      });
    });
    return groupedMovies;
  }, [MoviesData]);

  return (
    <div className=" md:p-10 p-2 pb-20">
      <h1 className="md:text-6xl text-4xl md:mb-10 my-6">Genres</h1>

      <div className="grid lg:grid-cols-3 grid-cols-2 md:gap-4 gap-2 mt-4">
        {Object.keys(moviesByGenre)
          .map((genre) => ({
            genre,
            movies: moviesByGenre[genre],
          }))
          .map(({ genre, movies }) => {
            const style = getGenreStyle(genre);
            return (
              <Link
                href={`/genreType/${genre}`}
                key={genre}
                className=" md:h-[300px] h-[200px] rounded-3xl flex  p-4 font-bold relative overflow-hidden brightness-75 hover:brightness-100 transition-all duration-100 ease-in-out cursor-pointer shadow-2xl  group "
                style={{
                  border: `2px solid ${style?.background || "gray"}`,
                }}
              >
                <div
                  className="h-full w-full absolute inset-0"
                  style={{
                    background: `url(${movies[0].image})`,
                    filter: "blur(100px)",
                  }}
                ></div>
                <h1 className="md:text-4xl text-2xl">{genre}</h1>
                {movies.map(
                  (movie, ind) =>
                    ind <= 2 && (
                      <div
                        key={ind}
                        className=" absolute  -bottom-20 right-8 -rotate-12 h-full w-full flex justify-end items-end group-hover:-translate-y-5   transition-all duration-200 ease-in-out drop-shadow-2xl "
                      >
                        <div
                          key={movie.id}
                          className="flex flex-col gap-2 w-[100px]  md:w-[150px] aspect-[9/16] shadow-3xl drop-shadow-2xl rounded-3xl  "
                          style={{
                            backgroundImage: `url(${movie.image})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            transformOrigin: "bottom center",
                            transform: `rotate(${ind * 10}deg)`,
                          }}
                        ></div>
                      </div>
                    )
                )}
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default page;
