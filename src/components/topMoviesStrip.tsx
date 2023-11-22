"use client";
import { Movie } from "@/types/movies";
import React, { useEffect, useRef, useState } from "react";
import moviesData from "@/movies.json";
import { getGenreStyle } from "@/utils/getGenreStyle";
import Link from "next/link";
import Badge from "./ui/badge";
import { debounce } from "lodash";

type Props = {};

function TopMoviesStrip({}: Props) {
  const [bannerMoviesData, setBannerMoviesData] = useState<Movie[]>([]);
  const [currIndex, setCurrIndex] = useState(0);
  const movieContainerRef = useRef<HTMLDivElement | null>(null);
  const [bannerWidth, setBannerWidth] = useState(500);

  const margin = 24;
  function getBannerMovies(array: Movie[], count: number) {
    const shuffledArray = array.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
  }

  const handleScroll = debounce((e: any) => {
    const element = e.target;

    const left = element.scrollLeft;
    const width = bannerWidth + margin;
    const index = Math.floor(left / width);
    const offset = left % width;

    const nextIndex = offset > width / 2 ? index + 1 : index;
    setCurrIndex(nextIndex);
  }, 20);

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
    const width = bannerWidth + margin;
    const intervalId = setInterval(() => {
      if (movieContainerRef.current) {
        if (currIndex === bannerMoviesData.length - 1) {
          movieContainerRef.current.scrollLeft = 0;
        } else {
          movieContainerRef.current.scrollLeft = (currIndex + 1) * width;
        }
      }
    }, 4000);
    setBannerWidth(getBannerWidth());

    return () => {
      clearInterval(intervalId);
    };
  }, [currIndex]);

  return (
    <div
      className="flex    overflow-auto   scroll-smooth md:p-6 p-3 no-scrollbar"
      onScroll={handleScroll}
      ref={movieContainerRef}
    >
      {bannerMoviesData.map((movie, index) => (
        <Link
          href={`movie/${movie.imdbid}`}
          className=" shrink-0 rounded-3xl    h-[300px] relative shadow-xl  snap-start transition-all duration-200 ease-in-out z-10  "
          key={index}
          style={{
            background: `url(${movie.image})`,
            backgroundPosition: "center",
            width: `${bannerWidth}px`,
            scale: currIndex === index ? 1.05 : 1,
            zIndex: currIndex === index ? 10 : 0,
            opacity: currIndex === index ? 1 : 0.6,
            margin: `${margin / 2}px`,
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
        </Link>
      ))}

      {/* mock data  */}
      <>
        <div
          className=" shrink-0 rounded-3xl    h-[300px] relative shadow-xl  snap-start transition-all duration-200 ease-in-out z-10 opacity-0 hidden md:block  "
          style={{
            width: `${bannerWidth}px`,
            margin: `${margin / 2}px`,
          }}
        >
          <div className="absolute h-full w-full top-0 bg-gradient-to-t from-black  to-transparent rounded-3xl  "></div>
          <div className="absolute bottom-0 font-bold p-3">
            <div className="text-xs  text-gray-500 text-normal "></div>
          </div>
        </div>
        <div
          className=" shrink-0 rounded-3xl    h-[300px] relative shadow-xl  snap-start transition-all duration-200 ease-in-out z-10 opacity-0 hidden md:block   "
          style={{
            width: `${bannerWidth}px`,
            margin: `${margin / 2}px`,
          }}
        >
          <div className="absolute h-full w-full top-0 bg-gradient-to-t from-black  to-transparent rounded-3xl   "></div>
          <div className="absolute bottom-0 font-bold p-3">
            <div className="text-xs  text-gray-500 text-normal "></div>
          </div>
        </div>
      </>
    </div>
  );
}

export default TopMoviesStrip;
