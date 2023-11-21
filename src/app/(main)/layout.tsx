

import React from "react";
import Menu from "@/components/menu";

type Props = {
  children: React.ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <div
      className={` flex w-full overflow-hidden md:h-[calc(100%-6rem)] h-[calc(100%-4rem)]   `}
    >
      <Menu />

      <div className="bg-secondary  md:rounded-[50px_0_0_0] h-full   overflow-x-hidden  snap-x snap-mandatory flex-1   ">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;