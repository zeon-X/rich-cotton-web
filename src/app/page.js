"use client";
import React, { useState, useEffect } from "react";
import HomeCarousolNew from "@/components/Home/HomeCarousolNew";
import Product from "@/components/Home/Product";
import Services from "@/components/Home/Services";
import Clients from "@/components/Home/Clients";
import Team from "@/components/Team/Team";
import Contact from "@/components/Home/Contact";
import { logo } from "../../public";
import Image from "next/image";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  // Hide the splash screen after 2 seconds
  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 1000); // 2 seconds

    return () => clearTimeout(splashTimeout);
  }, []);

  return (
    <main className="m-0 p-0 overflow-hidden">
      {showSplash ? (
        <div className="flex flex-col justify-center items-center h-[660px]">
          <Image src={logo} height={70} width={60} alt="" className="" />
          <h1>Loading...</h1>
        </div>
      ) : (
        <>
          <HomeCarousolNew />
          <Product />
          <Services />
          <Clients />
          <Team />
          <Contact />
        </>
      )}
    </main>
  );
}
