"use client";
import "animate.css";
import useWindowDimensions from "@/utilities/hooks/useWindowDimensions";
import { useEffect, useState } from "react";

const C2 = () => {
  const [carousolHeight, setCarousolHeight] = useState(665);

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    setCarousolHeight(Math.ceil((width * 665) / 1920));
  }, [width]);

  return (
    <div
      style={{
        height: `${carousolHeight}px`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 className="text-5xl font-bold uppercase mb-4 animate__animated animate__slideInDown ">
        RichCotton Ltd
      </h1>
      <p className="text-2xl uppercase tracking-wide mb-12 animate__animated animate__delay-1s animate__fadeIn ">
        Fashion is our passion
      </p>

      <div className="flex  justify-center items-center">
        <div className="h-[100px] flex flex-col justify-center pr-6 fade-innn">
          <p className="text-lg uppercase tracking-widest text-right font-semibold animate__animated animate__delay-2s animate__zoomIn ">
            Global Sourcing
          </p>
          <p className="text-lg uppercase tracking-widest text-right font-semibold  animate__animated animate__delay-2s animate__zoomIn ">
            Quality Assurance
          </p>
        </div>

        <div className="h-[100px] border animate__animated animate__delay-2s animate__zoomIn " />
        <div className=" h-[100px] flex flex-col justify-center pl-6 fade-innn">
          <p className="text-lg uppercase tracking-widest text-left font-semibold  animate__animated animate__delay-2s animate__zoomIn ">
            Compilance
          </p>
          <p className="text-lg uppercase tracking-widest text-left font-semibold  animate__animated animate__delay-2s animate__zoomIn   ">
            Product Development
          </p>
        </div>
      </div>
    </div>
  );
};

export default C2;
