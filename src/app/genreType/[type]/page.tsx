import React from "react";
import Client from "./client";

type Props = {
  params: {
    type: string;
  };
};
function Page({ params }: Props) {
  return <Client genreType={params.type} />;
}

export default Page;
