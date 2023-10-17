"use client";
import useWindowDimensions from "@/utilities/hooks/useWindowDimensions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { useEffect, useState } from "react";
import CategoryProductComponent from "./CategoryProductComponent";

const SimilarProductSuggestion = ({ similarProductsData }) => {
  const [slidesToShow, setSlidesToShow] = useState(3);
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
      {similarProductsData?.map((product, index) => {
        return (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className=" w-full h-full flex justify-center items-center">
              <CategoryProductComponent key={index} product={product} />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SimilarProductSuggestion;

// "use client";
// import useWindowDimensions from "@/utilities/hooks/useWindowDimensions";
// import Carousel from "nuka-carousel";
// import { useEffect, useState } from "react";
// import CategoryProductComponent from "./CategoryProductComponent";

// const SimilarProductSuggestion = ({ similarProductsData }) => {
//   const [slidesToShow, setSlidesToShow] = useState(4);
//   const [slidesToScroll, setSlidesToScroll] = useState(3);
//   const [cellSpacing, setCellSpacing] = useState(2);

//   const { height, width } = useWindowDimensions();

//   useEffect(() => {
//     if (width <= 480) {
//       setSlidesToShow(1);
//       setSlidesToScroll(1);
//       setCellSpacing(2);
//     } else if (width > 480 && width < 1024) {
//       setSlidesToShow(2);
//       setSlidesToScroll(1);
//       setCellSpacing(2);
//     }
//   }, [width]);

//   console.log(similarProductsData);

//   return (
//     <section className="w-full lg:px-6 md:px-4 sm:px-3 py-6">
//       <h1 className="mb-6 text-3xl">Similar Products</h1>
//       <Carousel
//         width={`${width}px`}
//         slidesToShow={slidesToShow}
//         slidesToScroll={slidesToScroll}
//         cellAlign="left"
//         cellSpacing={cellSpacing}
//         wrapAround={true}
//         autoplay={true}
//         renderCenterLeftControls={""}
//         renderCenterRightControls={""}

//       >
//         {similarProductsData?.map((product, index) => {
//           return (
//             <div className=" w-full h-full flex justify-center items-center">
//               <CategoryProductComponent key={index} product={product} />
//             </div>
//           );
//         })}
//       </Carousel>
//     </section>
//   );
// };

// export default SimilarProductSuggestion;
