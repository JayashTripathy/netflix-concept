"use client";
import React from "react";
import { Clapperboard, Home, HomeIcon, ListVideo, Monitor, Plus, Search, Zap } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {};

const menuItems = [
  {
    name: "Search",
    path: "/search",
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
    icon: <Clapperboard  size={30} />,
  },
  {
    name: "tvshows",
    path: "/tvshows",
    icon: <Monitor  size={30} />,
  },
  {
    name: "WatchList",
    path: "/watchlist",
    icon: <Plus size={30} />,
  },
]
function BottomNav({}: Props) {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "flex gap-2 hover:bg-secondary text-primary items-center p-3 rounded-3xl cursor-pointer transition-all duration-100 ease-in-out"
      : "flex gap-2 hover:bg-secondary text-2xl items-center  p-3 rounded-3xl cursor-pointer transition-all duration-100 ease-in-out";
  };
  return (
    <div className="md:hidden fixed h-14 bottom-0 left-0 z-40 flex  w-full justify-evenly bg-secondary py-3 ">
      {menuItems.map((item, ind) => (
        <Link href={item.path} key={ind} className={getLinkClass(item.path)}>
          {item.icon}
        </Link>
      ))}
    </div>
  );
}

export default BottomNav;
