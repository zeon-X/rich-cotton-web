"use client";
import Image from "next/image";
import Carousel from "nuka-carousel";
import { hCar1, hCar2, hCar3, gif1, gif2, gif3 } from "../../../public";
// import C1 from "./HomeSlides/C1";
// import C2 from "./HomeSlides/C2";

const HomeCarousol = () => {
  return (
    <section id="home" className="">
      <div className="w-full mx-auto overflow-hidden">
        <Carousel
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          autoplayInterval={10000}
          cellAlign="left"
          cellSpacing={0}
          wrapAround={true}
          pauseOnHover={false}
          withoutControls={true}
          renderCenterLeftControls={({ previousSlide }) => (
            <button
              // className="p-1 border rounded-full"
              onClick={previousSlide}
              aria-label="click left"
            ></button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button
              // className="p-1 border rounded-full"
              onClick={nextSlide}
              aria-label="click right"
            ></button>
          )}
        >
          <div className="w-full h-full flex justify-center items-center">
            <Image src={gif1} height={660} width={1800} alt={""} />
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <Image src={gif2} height={660} width={1800} alt={""} />
          </div>
          <div className="w-full h-full flex justify-center items-center">
            <Image src={gif3} height={660} width={1800} alt={""} />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default HomeCarousol;
