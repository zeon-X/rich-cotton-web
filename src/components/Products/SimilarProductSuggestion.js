"use client";
import useWindowDimensions from "@/utilities/hooks/useWindowDimensions";
import Carousel from "nuka-carousel";
import { useEffect, useState } from "react";
import CategoryProductComponent from "./CategoryProductComponent";

const SimilarProductSuggestion = ({ similarProductsData }) => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [slidesToScroll, setSlidesToScroll] = useState(3);
  const [cellSpacing, setCellSpacing] = useState(2);

  // const windowSize = useRef([window.innerWidth, window.innerHeight]);
  // const w = windowSize?.current[0];

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (width <= 480) {
      setSlidesToShow(1);
      setSlidesToScroll(1);
      setCellSpacing(2);
    } else if (width > 480 && width < 1024) {
      setSlidesToShow(2);
      setSlidesToScroll(1);
      setCellSpacing(2);
    }
  }, [width]);

  //   console.log(slidesToShow, slidesToScroll, cellSpacing);
  console.log(similarProductsData);

  return (
    <section className="w-full lg:px-6 md:px-4 sm:px-3 py-6">
      <h1 className="mb-6 text-3xl">Similar Products</h1>
      <Carousel
        width={`${width}px`}
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
        cellAlign="left"
        cellSpacing={cellSpacing}
        wrapAround={true}
        autoplay={true}
        renderCenterLeftControls={""}
        renderCenterRightControls={""}
        // renderCenterLeftControls={({ previousSlide }) => (
        //   <button
        //     className="p-1 border rounded-full"
        //     onClick={previousSlide}
        //     aria-label="click left"
        //   ></button>
        // )}
        // renderCenterRightControls={({ nextSlide }) => (
        //   <button
        //     className="p-1 border rounded-full"
        //     onClick={nextSlide}
        //     aria-label="click right"
        //   ></button>
        // )}
      >
        {similarProductsData?.map((product, index) => {
          return (
            <div className=" w-full h-full flex justify-center items-center">
              <CategoryProductComponent key={index} product={product} />
            </div>
          );
        })}
      </Carousel>
    </section>
  );
};

export default SimilarProductSuggestion;
