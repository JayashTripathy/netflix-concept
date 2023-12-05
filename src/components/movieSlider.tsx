"use client";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef } from "react";

type Props = {
  moviesData: any;
};

function MovieSlider({ moviesData }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="flex  gap-2 overflow-hidden overflow-x-auto py-2 w-full relative "
      ref={scrollRef}
    >
      {moviesData.map((movie: any, ind: number) => (
        <Link
          key={ind}
          href={`movie/${movie.imdbid}`}
          className="md:h-80  h-32 aspect-[9/16] rounded relative flex items-end shadow-xl "
          style={{
            background: `url(${movie.image})`,
            backgroundPosition: "center",
          }}
        ></Link>
      ))}

      <button
        className="  sticky right-2 md:right-5    z-10"
        onClick={() => {
          if (scrollRef.current) {
            console.log(
              scrollRef.current.scrollLeft,
              scrollRef.current.clientWidth,
              scrollRef.current.scrollWidth
            );
            if (
              Math.ceil(
                scrollRef.current.scrollLeft + scrollRef.current.clientWidth
              ) >= scrollRef.current.scrollWidth
            ) {
              scrollRef.current?.scrollTo({ left: 0, behavior: "smooth" });
            } else {
              scrollRef.current?.scrollBy({
                left: 500,
                behavior: "smooth",
              });
            }
          }
        }}
      >
        <div
          className="bg-gray-200  rounded-full  drop-shadow-2xl  p-1 md:p-2
    text-black "
        >
          <ChevronRight size={30} />
        </div>
      </button>
    </div>
  );
}

export default MovieSlider;
