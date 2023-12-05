"use client";
import React from "react";
import {
  Clapperboard,
  Home,
  HomeIcon,
  ListVideo,
  Monitor,
  Plus,
  Search,
  Shuffle,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Main } from "next/document";

type Props = {};

const menuItems = [
  {
    name: "Search",
    path: "/allGenre",
    icon: <Search size={30} />,
  },
  {
    name: "home",
    path: "/",
    icon: <Home size={30} />,
  },
  {
    name: "movies",
    path: "/movies",
    icon: <Clapperboard size={30} />,
  },
  {
    name: "tvshows",
    path: "/tvshows",
    icon: <Monitor size={30} />,
  },
  {
    name: "WatchList",
    path: "/watchlist",
    icon: <Shuffle size={30} />,
  },
];

function MainLeftNav({}: Props) {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "flex gap-2  border-b-2 border-b-primary pb-1 hover:bg-secondary text-white text-2xl items-center   cursor-pointer transition-all duration-100 ease-in-out"
      : "flex gap-2 hover:border-b-2 border-b-primary pb-1 text-2xl items-center  cursor-pointer transition-all duration-100 ease-in-out";
  };
  return (
    <div className="md:flex flex-col gap-10 justify-center hidden  mt-8 mx-8 text-font-secondary fixed left-0 top-40 ">
      {menuItems.map((item, ind) => (
        <Link
          href={item.path}
          key={item.name}
          className={`${getLinkClass(item.path)} `}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}

export default MainLeftNav;
