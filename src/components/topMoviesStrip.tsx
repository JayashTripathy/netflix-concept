"use client";
import { Movie } from "@/types/movies";
import React, { useEffect, useRef, useState } from "react";
import moviesData from "@/movies.json";
import { getGenreStyle } from "@/utils/getGenreStyle";

type Props = {};

function TopMoviesStrip({}: Props) {
  const [bannerMoviesData, setBannerMoviesData] = useState<Movie[]>([]);
  const [currIndex, setCurrIndex] = useState(0);
  const movieContainerRef = useRef<HTMLDivElement | null>(null);
  const [bannerWidth, setBannerWidth] = useState(500);

  function getBannerMovies(array: Movie[], count: number) {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
  }

  const handleScroll = (e: any) => {
    const element = e.target;

    const left = element.scrollLeft;
    const width = bannerWidth + gap;
    const index = Math.floor(left / width);
    const offset = left % width;

    const nextIndex = offset > width / 2 ? index + 1 : index;
    setCurrIndex(nextIndex);
  };

  const gap = 24;

  const getBannerWidth = () => {
    const screenWidth = window.innerWidth;

    if (screenWidth < 768) {
      return 300;
    } else {
      return 500;
    }
  };

  useEffect(() => {
    const data = getBannerMovies(moviesData, 10);
    setBannerMoviesData(data);
    setBannerWidth(getBannerWidth());
  }, []);

  useEffect(() => {
    const width = bannerWidth + gap;
    const intervalId = setInterval(() => {
      if (movieContainerRef.current) {
        if (
          currIndex === bannerMoviesData.length - 2 ||
          currIndex === bannerMoviesData.length - 1
        ) {
          movieContainerRef.current.scrollLeft = 0;
        } else {
          movieContainerRef.current.scrollLeft = (currIndex + 1) * width;
        }
      }
    }, 3000);
    setBannerWidth(getBannerWidth());

    return () => {
      clearInterval(intervalId);
    };
  }, [currIndex]);

  return (
    <div
      className="flex    overflow-auto w-[full] p-6 md:p-12  scroll-smooth "
      onScroll={handleScroll}
      ref={movieContainerRef}
      style={{
        gap: `${gap}px`,
      }}
    >
      {bannerMoviesData.map((movie, index) => (
        <div
          className=" shrink-0 rounded-3xl    h-[300px] relative shadow-xl  snap-start transition-all duration-200 ease-in-out z-10  "
          key={movie.imdbid}
          style={{
            background: `url(${movie.big_image})`,
            backgroundPosition: "center",
            width: `${bannerWidth}px`,
            scale: currIndex === index ? 1.05 : 1,
            zIndex: currIndex === index ? 10 : 0,
            opacity: currIndex === index ? 1 : 0.6,
          }}
        >
          <div className="absolute h-full w-full top-0 bg-gradient-to-t from-black  to-transparent rounded-3xl  "></div>
          <div className="absolute bottom-0 font-bold p-3">
            {movie.title}
            <div
              className="text-xs  text-gray-500 text-normal "
              style={{
                color: getGenreStyle(movie.genre[0])?.background,
              }}
            >
              {movie.genre[0]}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopMoviesStrip;
