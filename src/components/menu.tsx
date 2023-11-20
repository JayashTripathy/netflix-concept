"use client";
import React from "react";
import { HomeIcon, ListVideo, Zap } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

function Menu({}: Props) {
  const pathname = usePathname();

  const getLinkClass = (path: string) => {
    return pathname === path
      ? "flex gap-2 hover:bg-secondary text-primary text-2xl items-center p-3 rounded-3xl cursor-pointer transition-all duration-100 ease-in-out"
      : "flex gap-2 hover:bg-secondary text-2xl items-center  p-3 rounded-3xl cursor-pointer transition-all duration-100 ease-in-out";
  };
  return (
    <div className="md:block hidden max-w-[200px] w-full mt-8 mx-8 text-font-secondary">
      <br />
      <h1 className="">Menu</h1>
      <br />
      {menuItems.map((item) => (
        <Link href={item.path} className={getLinkClass(item.path)}>
          {item.icon} {item.name}
        </Link>
      ))}
    </div>
  );
}

export default Menu;
