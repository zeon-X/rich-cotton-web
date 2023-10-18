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
import Carousol2 from "./HomeSlides/Carousol2";
import Carousol3 from "./HomeSlides/Carousol3";

const HomeCarousolNew = () => {
  const [carousolHeight, setCarousolHeight] = useState(665);

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    let predictedHeight = Math.ceil((width * 665) / 1920);
    setCarousolHeight(predictedHeight < 400 ? 400 : predictedHeight);
  }, [width]);

  return (
    <Swiper
      modules={[Autoplay]}
      style={{ width: `${width - 20}px` }}
      autoplay={{ delay: 4000 }}
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
          backgroundPosition: "left",
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
        <Carousol2 />
      </SwiperSlide>
      <SwiperSlide
        style={{
          height: `${carousolHeight}px`,
          backgroundImage: `url(${hCar3.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Carousol3 />
      </SwiperSlide>
    </Swiper>
  );
};

export default HomeCarousolNew;
