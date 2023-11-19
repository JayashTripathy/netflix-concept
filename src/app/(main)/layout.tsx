import Header from "@/components/header";
import React from "react";

type Props = {
  children: React.ReactNode;
};

function MainLayout({ children }: Props) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

export default MainLayout;
