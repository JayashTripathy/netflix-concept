"use client";
import React from "react";
import { HomeIcon, ListVideo, Zap } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type Props = {};

const menuItems = [
  {
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    name: "My List",
    path: "/mylist",
    icon: <ListVideo />,
  },
  {
    name: "Genre",
    path: "/genre",
    icon: <Zap />,
  },
];

function BottomNav({}: Props) {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "flex gap-2 hover:bg-secondary text-primary items-center p-3 rounded-3xl cursor-pointer transition-all duration-100 ease-in-out"
      : "flex gap-2 hover:bg-secondary text-2xl items-center  p-3 rounded-3xl cursor-pointer transition-all duration-100 ease-in-out";
  };
  return (
    <div className="md:hidden sticky h-16 bottom-0 left-0 z-40 flex  w-full justify-evenly backdrop-blur-3xl ">
     
        
        {menuItems.map((item) => (
          <Link href={item.path} className={getLinkClass(item.path)}>
            {item.icon} 
          </Link>
        ))}
     
    </div>
  );
}

export default BottomNav;
