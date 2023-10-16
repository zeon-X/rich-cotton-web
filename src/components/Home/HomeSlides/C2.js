import React from "react";
import "animate.css";

import { hCar2 } from "../../../../public";

const C2 = () => {
  return (
    <div
      className="h-[480px] w-full flex flex-col  justify-center items-center pl-24  overflow-hidden"
      style={{
        backgroundImage: `url(${hCar2.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
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
          <p className="text-lg uppercase tracking-widest text-right font-semibold  animate__animated animate__delay-2s animate__zoomIn  ">
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
