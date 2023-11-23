import { useLocalStorage } from "@/hooks/useLocalStorage";
import React from "react";
import Client from "./client";

type Props = {};

function page({}: Props) {
  return <Client />;
}

export default page;
