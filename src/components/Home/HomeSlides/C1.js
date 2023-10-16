import React from "react";
import "animate.css";

import { hCar1 } from "../../../../public";

const C1 = () => {
  return (
    <div
      className="h-[480px] w-full flex flex-col  justify-center items-center pl-24 overflow-hidden "
      style={{
        backgroundImage: `url(${hCar1.src})`,
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

export default C1;

const oldC1 = () => {
  return;
  <div className="flex flex-col justify-center items-center">
    <div
      className="h-[560px] w-full flex flex-col gap-4 justify-center items-center"
      style={{
        backgroundImage: `url(${hCar1.src})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1
        className="text-5xl font-bold uppercase  slide-in-from-left"
        style={{ "--delay": "0s" }}
      >
        RichCotton Ltd
      </h1>
      <p
        className="text-2xl uppercase tracking-widest fade-in-from-bottom"
        style={{ "--delay": "3s" }}
      >
        Fashion is our passion
      </p>

      <div className="grid grid-cols-2 justify-center items-center">
        <div className="h-[100px] flex flex-col justify-center pr-6 fade-innn">
          <p className="text-lg uppercase tracking-normal text-right font-semibold">
            Global Sourcing
          </p>
          <p className="text-lg uppercase tracking-normal text-right font-semibold">
            Quality Assurance
          </p>
        </div>
        <div className=" border-l-2 h-[100px] flex flex-col justify-center pl-6 fade-innn">
          <p className="text-lg uppercase tracking-normal text-left font-semibold">
            Compilance
          </p>
          <p className="text-lg uppercase tracking-normal text-left font-semibold">
            Product Development
          </p>
        </div>
      </div>
    </div>
  </div>;
};
