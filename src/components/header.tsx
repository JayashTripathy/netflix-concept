"use client";
import React from "react";
import Image from "next/image";
import { ChevronDown, MoreVertical, Search } from "lucide-react";
import Link from "next/link";

type Props = {};

function Header({}: Props) {
  return (
    <div className="flex p-2  md:p-6 items-center w-full justify-between text-font-secondary  sticky top-0 backdrop-blur-2xl z-50 md:h-24 h-16   ">
      <div className="text-font-secondary flex gap-3 md:gap-10 items-center w-full max-w-[700px]">
        <Link href="/">
          <Image
            src="/logo-large.png"
            width={180}
            height={180}
            alt="logo"
            className="hidden md:block"
          />
          <Image
            src="/logo.png"
            width={150}
            height={150}
            alt="logo"
            className=" md:hidden max-w-[40px]"
          />
        </Link>
        <div className="relative h-full flex-1 hidden md:block ">
          <input
            className="flex  bg-transparent rounded-2xl border-font-secondary border-2 border-solid p-2  pl-10 placeholder:text-font-secondary w-full   "
            placeholder="Search"
          />
          <div className="absolute left-0 h-full top-0 flex  items-center ml-3 ">
            <Search />
          </div>
        </div>
      </div>
      <div className="flex  gap-1 md:gap-3 items-center bg-secondary p-2 rounded-3xl cursor-pointer hover:opacity-90 transition-all  duration-200 ease-in-out ">
        {" "}
        <Image
          height={40}
          width={40}
          src={"/c-xyz.gif"}
          alt="logo"
          className=" h-6 w-6 md:h-[40px] md:w-[40px] "
        />{" "}
        <span className="hidden md:block">Character xyz </span>
        <ChevronDown width={30} />
      </div>
    </div>
  );
}

export default Header;
