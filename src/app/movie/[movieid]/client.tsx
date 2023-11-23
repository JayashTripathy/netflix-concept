"use client";
import React from "react";
import MoviesData from "@/movies.json";
import { LucidePlayCircle, LucideShare2 } from "lucide-react";
import { getGenreStyle } from "@/utils/getGenreStyle";
import Badge from "@/components/ui/badge";
import BackButton from "@/components/ui/backButton";
import { WhatsappShareButton } from "react-share";
import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

type Props = {
  movieid: string;
};

function Client({ movieid }: Props) {
  const movie = MoviesData.find((movie) => movie.imdbid === movieid);
  const pathname = usePathname();

  const movieDetails = [
    {
      name: "Rank",
      value: movie?.rank,
      className: "bg-primary text-red-200",
    },
    {
      name: "IMDB",
      value: movie?.rating,
      className: "bg-yellow-500 text-yellow-200",
    },
    {
      name: "Year",
      value: movie?.year,
      className: "bg-slate-100 text-slate-800",
    },
  ];
  return (
    <div className="relative w-full md:h-[calc(100%-6rem)] h-[calc(100%-4rem)]     ">
      <div className=" md:w-3/4 w-full px-4  py-10  mx-auto h-full z-10 relative  flex   flex-col md:flex-row items-center gap-3 overflow-auto pb-20 no-scrollbar  ">
        <div className=" md:py-8  md:pr-8 w-full">
          <div className="text-3xl md:text-5xl font-bold flex gap-2">
            <BackButton className="mb-2" />
            {movie?.title}
          </div>
          <div className="flex  mt-3  gap-2  w-full overflow-auto flex-wrap">
            {movie?.genre.map(
              (genre, index) =>
                index <= 1 && (
                  <Badge
                    title={genre}
                    color={getGenreStyle(genre)?.background}
                  />
                )
            )}
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
                  />
                )
            )}
          </div>
          <div className="py-3 text-gray-500">{movie?.description}</div>
          <div className="flex gap-2">
            <div className=" whitespace-nowrap text-primary flex gap-2 justify-center items-center border-2 border-solid border-primary md:p-3 p-1 md:px-5 px-3 rounded-3xl hover:bg-secondary md:text-base text-sm ">
              Watch Now <LucidePlayCircle className=" text-primary" size={25} />{" "}
            </div>
            <WhatsappShareButton
              title={movie?.title}
              url={`https://netflix-concept.vercel.app/${pathname}`}
            >
              <div className="  bg-secondary flex gap-2 justify-center items-center  md:p-3 p-1 md:px-5 px-3 rounded-3xl md:text-base text-sm  relative">
                Share <FaWhatsapp size={30} />
              </div>
            </WhatsappShareButton>
          </div>

          <div className="  overflow-hidden max-h-[15rem] aspect-video my-6">
            <iframe
              className="rounded-3xl  h-full w-full"
              src={movie?.trailer_embed_link}
            ></iframe>
          </div>
        </div>
        <div className="flex md:flex-col gap-3 md:h-full md:py-3 w-full md:w-auto  ">
          {movieDetails.map((detail, index) => (
            <div
              key={index}
              className={`rounded-xl font-bold justify-center items-center flex gap-1 flex-col md:w-20  md:h-20 h-16 w-16 md:text-lg ${detail.className}`}
            >
              {detail.name}
              <div
                className={`w-full text-center  block  before:absolute before:w-full relative before:content-[''] before:inset-0 before:h-[1px] before:bg-secondary before:-translate-y-[5px] before:opacity-30 `}
              >
                {detail.value}
              </div>
            </div>
          ))}
        </div>
        <div
          className="aspect-[9/16]  max-h-full h-full  rounded-3xl shadow-2xl md:block hidden "
          style={{
            background: `url(${movie?.image}) no-repeat center center/cover`,
          }}
        ></div>
      </div>

      {/* this the blurred backdrop   */}
      <div
        className="h-full w-full overflow-x-hidden blur-3xl  brightness-[.3] fixed inset-0 -z-1  "
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
