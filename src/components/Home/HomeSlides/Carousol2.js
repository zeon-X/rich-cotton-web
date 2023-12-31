import useWindowDimensions from "@/utilities/hooks/useWindowDimensions";
import { useEffect, useState } from "react";
import { useSpring, useTrail, animated } from "react-spring";
import { clientData } from "../../../../public/assets/data/clientData";
import Image from "next/image";
import { useInView } from "react-intersection-observer"; // Import the useInView hook

let cdlen = 16;
const Carousol2 = () => {
  const [carousolHeight, setCarousolHeight] = useState(685);
  const [cd, setCd] = useState(clientData?.slice(0, 16));

  const { height, width } = useWindowDimensions();
  const [animationsPlayed, setAnimationsPlayed] = useState(false); // Flag to track if animations have played

  useEffect(() => {
    setCarousolHeight(Math.ceil((width * 685) / 1920));

    if (width <= 480) {
      setCd(clientData?.slice(0, 6));
      cdlen = 6;
    } else if (width > 480 && width < 880) {
      setCd(clientData?.slice(0, 10));
      cdlen = 10;
    } else {
      setCd(clientData?.slice(0, 16));
      cdlen = 16;
    }
  }, [width]);

  const [ref, inView] = useInView({ threshold: 0.8 }); // Set the threshold to 80%

  const trailDivs = useTrail(cdlen, {
    from: { opacity: 0 },
    to: { opacity: inView ? 1 : 0 }, // Trigger opacity animation based on inView state and animationsPlayed flag
    config: { tension: 60, friction: 14 },
    delay: (index) => (inView ? index * 1000 : 0), // Delay animation if inView is true and animationsPlayed is false
  });

  // Handle the flag when animations have played
  useEffect(() => {
    if (inView) {
      setAnimationsPlayed(true);
    }
  }, [inView]);

  // Rest of your code...
  const trailHead = useTrail(1, {
    from: { transform: "translateX(-100px)", opacity: 0 },
    to: {
      transform: inView ? "translateX(0px)" : "translateX(-100px)",
      opacity: inView ? 1 : 0,
    },
    config: { tension: 60, friction: 14 },
    delay: [0],
  });

  return (
    <animated.div
      style={{
        height: `${carousolHeight}px`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      className={"lg:mt-[-28px]  sm:mt-[0px]"}
    >
      {trailHead.map((props, index) => (
        <animated.h1
          style={props}
          key={index}
          className="lg:text-[52px] md:text-2xl sm:text-md font-bold uppercase text-white lg:mb-16 md:mb-6 sm:mb-4"
        >
          Our Clients
        </animated.h1>
      ))}
      <div>
        <div
          ref={ref}
          className="flex flex-wrap justify-center items-center gap-6 max-w-[980px] px-4 mx-auto"
        >
          {trailDivs.map((props, index) => (
            <animated.div style={props} key={index}>
              <div className=" lg:flex md:flex sm:hidden justify-center items-center ">
                <Image
                  src={cd[index]?.img}
                  height={90}
                  width={90}
                  alt={cd[index]?.title}
                />
              </div>
              <div className="w-full h-full lg:hidden md:hidden sm:flex justify-center items-start ">
                <Image
                  src={cd[index]?.img}
                  height={60}
                  width={60}
                  alt={cd[index]?.title}
                />
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </animated.div>
  );
};

export default Carousol2;
