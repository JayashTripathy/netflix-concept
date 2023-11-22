import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
};

function BackButton({ className }: Props) {
  const router = useRouter();
  return (
    <button
      onClick={() => router.back()}
      className={twMerge(
        `flex aspect-square md:p-4  p-2 justify-center items-center  rounded-2xl  bg-[#181818] text-white hover:brightness-100 brightness-75 transition-all duration-200 ease-in-out`,
        className
      )}
    >
      <MoveLeft />
    </button>
  );
}

export default BackButton;
