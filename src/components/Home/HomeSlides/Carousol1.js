"use client";
import useWindowDimensions from "@/utilities/hooks/useWindowDimensions";
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, useTrail, animated } from "react-spring";

const Carousol1 = () => {
  const [carousolHeight, setCarousolHeight] = useState(665);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    setCarousolHeight(Math.ceil((width * 665) / 1920));
  }, [width]);

  // Use useInView to create a trigger when the component is in view
  const [ref, inView] = useInView({
    threshold: 1,
  });

  useEffect(() => {
    setCarousolHeight(Math.ceil((width * 665) / 1920));
  }, [width]);

  // Define text content for animation
  const textContentLeft = ["Global Sourcing", "Quality Assurance"];
  const textContentRight = ["Compilance", "Product Development"];

  // Use useTrail to create a sequence of animations for text elements

  const trailHead = useTrail(1, {
    from: { transform: "translateX(-100px)", opacity: 0 },
    to: {
      transform: inView ? "translateX(0px)" : "translateX(-100px)",
      opacity: inView ? 1 : 0,
    },
    config: { tension: 100, friction: 10 },
    delay: [0],
  });
  const trailSubHead = useTrail(1, {
    from: { transform: "translateX(-100px)", opacity: 0 },
    to: {
      transform: inView ? "translateX(0px)" : "translateX(-100px)",
      opacity: inView ? 1 : 0,
    },
    config: { tension: 100, friction: 10 },
    delay: [0],
  });

  const trailLeft = useTrail(textContentLeft.length, {
    from: { transform: "translateX(-100px)", opacity: 0 },
    to: {
      transform: inView ? "translateX(0px)" : "translateX(-100px)",
      opacity: inView ? 1 : 0,
    },
    config: { tension: 100, friction: 10 },
    delay: [2000, 2000], // Delay for the left elements
  });

  const trailRight = useTrail(textContentRight.length, {
    from: { transform: "translateX(-100px)", opacity: 0 },
    to: {
      transform: inView ? "translateX(0px)" : "translateX(-100px)",
      opacity: inView ? 1 : 0,
    },
    config: { tension: 100, friction: 10 },
    delay: [2000, 2000], // Delay for the right elements
  });

  const [showBorder, setShowBorder] = useState(false);

  useEffect(() => {
    // Trigger the animation after a delay (adjust the delay as needed)
    const animationDelay = setTimeout(() => {
      setShowBorder(true);
    }, 500); // Delay in milliseconds

    // Clear the timeout to prevent memory leaks
    return () => clearTimeout(animationDelay);
  }, []);

  // Create a spring animation for the border
  const borderSpring = useSpring({
    from: {
      opacity: 0,
      height: 0,
    },
    to: {
      opacity: showBorder ? 1 : 0,
      height: showBorder ? 80 : 0,
    },
  });

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
      {trailHead.map((props, index) => (
        <animated.h1
          style={props}
          key={textContentLeft[index]} // Use textContentLeft for h1 elements
          className="lg:text-5xl md:text-3xl sm:text-md font-bold uppercase lg:mb-4 md:mb-2 sm:mb-1"
        >
          Rich Cotton Ltd
        </animated.h1>
      ))}

      {trailSubHead.map((props, index) => (
        <animated.p
          style={props}
          key={textContentLeft[index]} // Use textContentLeft for p elements
          className="lg:text-xl md:text-lg sm:text-sm uppercase tracking-widest lg:mb-12 md:mb-6 sm:mb-4"
        >
          FASHION WHEREVER YOU GO
        </animated.p>
      ))}

      <div className="flex  justify-center items-center">
        <div className="h-[80px] flex flex-col justify-center lg:pr-6 md:p-4 sm:pl-2 fade-innn">
          {trailLeft.map((props, index) => (
            <animated.p
              style={props}
              key={textContentLeft[index]} // Use textContentLeft for these elements
              className="lg:text-lg md:text-md sm:text-xs uppercase tracking-widest text-right font-semibold"
            >
              {textContentLeft[index]}
            </animated.p>
          ))}
        </div>

        <animated.div
          ref={ref}
          style={{
            height: borderSpring.height.interpolate((height) => `${height}px`),
            opacity: borderSpring.opacity,
          }}
          className="h-[80px] border"
        />
        <div className=" h-[80px] flex flex-col justify-center lg:pl-6 md:pl-4 sm:pl-2 fade-innn">
          {trailRight.map((props, index) => (
            <animated.p
              style={props}
              key={textContentRight[index]} // Use textContentRight for these elements
              className="lg:text-lg md:text-md sm:text-xs uppercase tracking-widest text-left font-semibold"
            >
              {textContentRight[index]}
            </animated.p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousol1;
