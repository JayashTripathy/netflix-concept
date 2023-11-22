import { getGenreStyle } from "@/utils/getGenreStyle";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  title: string;
  color?: string;
  className?: string;
};

function Badge({ title, color, className }: Props) {
  return (
    <div
      className={twMerge(
        `  rounded-full p-1 px-2 text-xs border-[1px] border-solid whitespace-nowrap  `,
        className
      )}
      style={{
        borderColor: color ? color : "none",
        color: color ? color : "none",
      }}
    >
      {title}
    </div>
  );
}

export default Badge;
