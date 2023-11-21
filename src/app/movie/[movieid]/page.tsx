import React from "react";
import type { Metadata, ResolvingMetadata } from "next";
import MoviesData from "@/movies.json";

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
    openGraph: {
      images: [movie?.thumbnail || "", ...previousImages],
    },
  };
}

function Page({ params }: Props) {
  return <div>test {params.movieid}</div>;
}

export default Page;
