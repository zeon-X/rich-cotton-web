"use client";
import useWindowDimensions from "@/utilities/hooks/useWindowDimensions";
import React, { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { useSpring, useTrail, animated } from "react-spring";

const Carousol1 = () => {
  const [carousolHeight, setCarousolHeight] = useState(685);
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    setCarousolHeight(Math.ceil((width * 685) / 1920));
  }, [width]);

  console.log("carousolHeight", carousolHeight);

  // Use useInView to create a trigger when the component is in view
  const [ref, inView] = useInView({
    threshold: 1,
  });

  // useEffect(() => {
  //   setCarousolHeight(Math.ceil((width * 685) / 1920));
  // }, [width]);

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
  const borderSpringOpacity = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: showBorder ? 1 : 0,
    },
  });
  const borderSpringHeight = (h) =>
    useSpring({
      from: {
        height: 0,
      },
      to: {
        height: showBorder ? h : 0,
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
      className="lg:bg-transparent md:bg-transparent  sm:bg-[#ffffff87] lg:p-0 md:p-0 sm:p-4"
    >
      {trailHead.map((props, index) => (
        <animated.h1
          style={props}
          key={textContentLeft[index]} // Use textContentLeft for h1 elements
          className="lg:text-[64px]  md:text-3xl sm:text-lg font-bold uppercase lg:mb-6 md:mb-2 sm:mb-1"
        >
          Rich Cotton Ltd
        </animated.h1>
      ))}

      {trailSubHead.map((props, index) => (
        <animated.p
          style={props}
          key={textContentLeft[index]} // Use textContentLeft for p elements
          className="lg:text-[24px] md:text-lg sm:text-[10px] uppercase tracking-widest lg:mb-12 md:mb-6 sm:mb-4 text-primary"
        >
          FASHION WHEREVER YOU GO
        </animated.p>
      ))}

      <div className="flex  justify-center items-center">
        <div className=" lg:h-[52px] md:h-[40px] sm:h-[20px] flex flex-col justify-between  lg:pr-6 md:pr-4 sm:pl-2 fade-innn ">
          {trailLeft.map((props, index) => (
            <animated.p
              style={props}
              key={textContentLeft[index]} // Use textContentLeft for these elements
              className="lg:text-[22px] md:text-md sm:text-[8px] uppercase tracking-widiest text-right font-semibold text-[#3b3b3b]"
            >
              {textContentLeft[index]}
            </animated.p>
          ))}
        </div>

        <animated.div
          ref={ref}
          style={{
            height: borderSpringHeight(
              carousolHeight < 240 ? 32 : carousolHeight < 360 ? 48 : 80
            ).height.interpolate((height) => `${height}px`),
            opacity: borderSpringOpacity.opacity,
          }}
          className="lg:h-[80px] md:h-[50px] sm:h-[20px] border"
        />
        <div className=" lg:h-[52px] md:h-[40px]  sm:h-[20px] flex flex-col justify-between lg:pl-6 md:pl-4 sm:pl-2 fade-innn ">
          {trailRight.map((props, index) => (
            <animated.p
              style={props}
              key={textContentRight[index]} // Use textContentRight for these elements
              className="lg:text-[22px] md:text-md sm:text-[8px] uppercase tracking-widiest text-left font-semibold  text-[#3b3b3b]"
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
