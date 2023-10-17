"use client";
import useWindowDimensions from "@/utilities/hooks/useWindowDimensions";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { useEffect, useState } from "react";
import TeamMember from "./TeamMember";

const MemberSuggestion = ({ suggestionData }) => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [slidesToScroll, setSlidesToScroll] = useState(1);
  const [cellSpacing, setCellSpacing] = useState(2);
  const [carousolWidth, setCarousolWidth] = useState(1080);

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (width <= 600) {
      setSlidesToShow(2);
      setSlidesToScroll(1);
      setCellSpacing(2);
      setCarousolWidth(width - 60);
    } else if (width > 600 && width < 1024) {
      setSlidesToShow(3);
      setSlidesToScroll(1);
      setCellSpacing(5);
      setCarousolWidth(width - 140);
    } else if (width >= 1080) {
      setCarousolWidth(1080);
    }
  }, [width]);

  return (
    <Swiper
      modules={[Autoplay]}
      style={{ width: `${carousolWidth}px` }}
      autoplay={{ delay: 1500 }}
      spaceBetween={cellSpacing}
      slidesPerView={slidesToShow}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {suggestionData?.map((member, index) => {
        return (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TeamMember x={member} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default MemberSuggestion;
