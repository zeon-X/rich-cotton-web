"use client";
import useWindowDimensions from "@/utilities/hooks/useWindowDimensions";
import Carousel from "nuka-carousel";
import { useEffect, useState } from "react";
import TeamMember from "./TeamMember";

const MemberSuggestionCarousol = ({ suggestionData }) => {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [slidesToScroll, setSlidesToScroll] = useState(1);
  const [cellSpacing, setCellSpacing] = useState(2);

  // const windowSize = useRef([window.innerWidth, window.innerHeight]);
  // const w = windowSize?.current[0];

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (width <= 480) {
      setSlidesToShow(2);
      setSlidesToScroll(1);
      setCellSpacing(2);
    } else if (width > 480 && width < 1024) {
      setSlidesToShow(3);
      setSlidesToScroll(1);
      setCellSpacing(5);
    }
  }, [width]);

  //   console.log(slidesToShow, slidesToScroll, cellSpacing);
  //   console.log(suggestionData);

  return (
    <section className="w-full overflow-hidden ">
      <Carousel
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
        cellAlign="left"
        cellSpacing={cellSpacing}
        wrapAround={true}
        autoplay={true}
        zoomScale={0.8}
        autoplayInterval={4000}
        renderCenterLeftControls=""
        renderCenterRightControls=""
      >
        {suggestionData?.map((member, index) => {
          return (
            <div
              key={index}
              className="w-full h-full flex justify-center items-center"
            >
              <TeamMember x={member} />
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default MemberSuggestionCarousol;
