
import Image from "next/image";
import React from "react";
import Header from "../common/header";

export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
     <main>
        <Header/>
        {children}</main>
    );
  }
  
