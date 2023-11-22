"use client";
import React from "react";

type Props = {
  genreType: string;
};

function client({ genreType }: Props) {
    console.log(genreType)
  return <div>{genreType}</div>;
}

export default client;
