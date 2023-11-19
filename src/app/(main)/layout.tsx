import Header from "@/components/header";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <div
      className={` grid  md:grid-cols-[250px_minmax(900px,_1fr)] w-full overflow-hidden md:h-[calc(100%-6rem)] h-[calc(100%-4rem)]  `}
    >
      <div className="max-w-[200px] md:block hidden  ">options</div>

      <div className="bg-secondary    md:rounded-[50px_0_0_0] h-full   overflow-hidden  snap-x snap-mandatory   ">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
