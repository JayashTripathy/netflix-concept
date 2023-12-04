import React from "react";
import MainLeftNav from "@/components/navigation/MainLeftNav";

type Props = {
  children: React.ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <div
      className={` flex w-full overflow-hidden md:h-full h-[calc(100%-4rem)]    `}
    >
      <MainLeftNav />

      <div className="   h-full   overflow-x-hidden  snap-x snap-mandatory flex-1   ">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
