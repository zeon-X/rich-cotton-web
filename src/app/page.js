"use client";
import React, { useState, useEffect } from "react";
import HomeCarousolNew from "@/components/Home/HomeCarousolNew";
import Product from "@/components/Home/Product";
import Services from "@/components/Home/Services";
import Clients from "@/components/Home/Clients";
import Team from "@/components/Team/Team";
import Contact from "@/components/Home/Contact";
import CustomLoadingScreen from "@/components/Shared/CustomLoadingScreen";

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
    <main className="m-0 p-0 ">
      {showSplash ? (
        <CustomLoadingScreen />
      ) : (
        <div className="overflow-hidden">
          <HomeCarousolNew />
          <Product />
          <Services />
          <Clients />
          <Team />
          <Contact />
        </div>
      )}
    </main>
  );
}
