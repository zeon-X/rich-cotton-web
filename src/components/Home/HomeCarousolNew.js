"use client";
import { useEffect, useState } from "react";
import useWindowDimensions from "@/utilities/hooks/useWindowDimensions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import { hCar1, hCar2, hCar3 } from "../../../public";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Carousol1 from "./HomeSlides/Carousol1";

const HomeCarousolNew = () => {
  const [carousolHeight, setCarousolHeight] = useState(665);

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    setCarousolHeight(Math.ceil((width * 665) / 1920));
  }, [width]);

  return (
    <Swiper
      //   modules={[Autoplay]}
      style={{ width: `${width}px` }}
      //   autoplay={{ delay: 1500 }}
      className=" overflow-x-hidden"
      spaceBetween={0}
      slidesPerView={1}
      //   onSlideChange={() => console.log("slide change")}
      //   onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide
        style={{
          height: `${carousolHeight}px`,
          backgroundImage: `url(${hCar1.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Carousol1 />
      </SwiperSlide>

      <SwiperSlide
        style={{
          height: `${carousolHeight}px`,
          backgroundImage: `url(${hCar2.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Carousol1 />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeCarousolNew;
