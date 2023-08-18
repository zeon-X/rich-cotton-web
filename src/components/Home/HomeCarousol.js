"use client";
import Image from "next/image";
import Carousel from "nuka-carousel";
import { hCar1, hCar2, hCar3 } from "../../../public";

const HomeCarousol = () => {
  return (
    <section id="home" className="">
      <div className="w-full overflow-hidden">
        <Carousel
          slidesToShow={1}
          slidesToScroll={1}
          autoplay={true}
          cellAlign="left"
          cellSpacing={0}
          wrapAround={true}
          renderCenterLeftControls={({ previousSlide }) => (
            <button
              // className="p-1 border rounded-full"
              onClick={previousSlide}
              aria-label="click left"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                  clipRule="evenodd"
                />
              </svg> */}
            </button>
          )}
          renderCenterRightControls={({ nextSlide }) => (
            <button
              // className="p-1 border rounded-full"
              onClick={nextSlide}
              aria-label="click right"
            >
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg> */}
            </button>
          )}
        >
          <div className="w-full h-full relative">
            <Image src={hCar1} height={660} width={1800} alt={""} />
            <div className="absolute top-2/4 left-2/4"></div>
          </div>
          <div className="w-full h-full relative">
            <Image src={hCar2} height={660} width={1800} alt={""} />
            <div className="absolute top-2/4 left-2/4"></div>
          </div>
          <div className="w-full h-full relative">
            <Image src={hCar3} height={660} width={1800} alt={""} />
            <div className="absolute top-2/4 left-2/4"></div>
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default HomeCarousol;
