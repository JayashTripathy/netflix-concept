import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import MoviesData from "@/movies.json";
import Client from "./client";

type Props = {
  params: {
    movieid: string;
  };
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.movieid;
  const movie = MoviesData.find((movie) => movie.imdbid === id);
  const previousImages = (await parent).openGraph?.images || [];
 
  return {
    title: movie?.title,
    description: movie?.description,
    openGraph: {
      images: [movie?.image || "", ...previousImages],
    },
  };
}
// this is for Incremental Static Regeneration when will use some api to fetch data
// export const revalidate = 3600

export async function generateStaticParams() {
  return MoviesData.map((movie) => {
    return {
      movieid: movie.imdbid,
    };
  });
}

function Page({ params }: Props) {
  return <Client movieid={params.movieid} />;
}

export default Page;
