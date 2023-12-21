import useWindowDimensions from "@/utilities/hooks/useWindowDimensions";
import { useEffect, useState } from "react";
import { useSpring, useTrail, animated } from "react-spring";
import Image from "next/image";
import { useInView } from "react-intersection-observer"; // Import the useInView hook
import { serviceData } from "../../../../public/assets/data/serviceData";

let sdlen = 6;
const Carousol3 = () => {
  const [carousolHeight, setCarousolHeight] = useState(685);
  const [sd, setCd] = useState(serviceData);
  const { height, width } = useWindowDimensions();
  const [animationsPlayed, setAnimationsPlayed] = useState(false); // Flag to track if animations have played

  useEffect(() => {
    setCarousolHeight(Math.ceil((width * 685) / 1920));
  }, [width]);

  const [ref, inView] = useInView({ threshold: 0.8 }); // Set the threshold to 80%

  const trailDivs = useTrail(sdlen, {
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
        height: carousolHeight < 280 ? "auto" : `${carousolHeight}px`,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: `${
          width *
          (width > 1280 ? 0.4 : width > 1080 ? 0.7 : width > 680 ? 0.6 : 0.8)
        }px`,
      }}
      className={
        "lg:mt-[-28px]  sm:mt-[0px]  lg:bg-transparent md:bg-transparent  sm:bg-[#ffffff87] lg:p-0 md:p-0 sm:p-4"
      }
    >
      {trailHead.map((props, index) => (
        <animated.h1
          style={props}
          key={index}
          className="lg:text-[44px] md:text-2xl sm:text-md font-bold uppercase  lg:mb-12 md:mb-6 sm:mb-2"
        >
          Our Services
        </animated.h1>
      ))}
      <div>
        <div
          ref={ref}
          className="flex flex-wrap justify-center items-start lg:gap-4 md:gap-4 sm:gap-2   mx-auto"
        >
          {trailDivs.map((props, index) => (
            <animated.div style={props} key={index} className={""}>
              <div className=" lg:flex md:hidden sm:hidden justify-center items-center ">
                <Image
                  src={sd[index]?.icon}
                  height={60}
                  width={60}
                  alt={sd[index]?.title}
                />
              </div>
              <div className=" lg:hidden md:flex sm:hidden justify-center items-center ">
                <Image
                  src={sd[index]?.icon}
                  height={40}
                  width={40}
                  alt={sd[index]?.title}
                />
              </div>
              <div className="w-full h-full lg:hidden md:hidden sm:flex justify-center items-start ">
                <Image
                  src={sd[index]?.icon}
                  height={26}
                  width={26}
                  alt={sd[index]?.title}
                />
              </div>
              <h2 className="lg:text-[14px]  md:text-xs sm:text-[6px] lg:mt-4 md:mt-2 sm:mt-2 lg:max-w-[120px] md:max-w-[80px] sm:max-w-[40px] text-center font-medium ">
                {sd[index]?.title}
              </h2>
            </animated.div>
          ))}
        </div>
      </div>
    </animated.div>
  );
};

export default Carousol3;
