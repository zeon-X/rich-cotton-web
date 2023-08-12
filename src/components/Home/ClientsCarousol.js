"use client";
import useWindowDimensions from "@/utilities/hooks/useWindowDimensions";
import Image from "next/image";
import Carousel from "nuka-carousel";
import { useEffect, useRef, useState } from "react";
const cli = [
  {
    title: "Ardene Logo",
    img: "https://i.ibb.co/gWYsYc3/ardene-logo-vector.png",
  },
  {
    title: "Franchetti Logo",
    img: "https://i.ibb.co/WktK7pf/Franchetti-Logo-01.jpg",
  },
  { title: "J Brand Logo", img: "https://i.ibb.co/tPpVZmt/J-Brand-logo.png" },
  {
    title: "Goodyear Blimp",
    img: "https://i.ibb.co/1vXHP18/kisspng-goodyear-blimp-car-goodyear-tire-and-rubber-compan-years-vector-5adc6628cf0f84-0252681215243.jpg",
  },
  { title: "Landi Logo", img: "https://i.ibb.co/Y8F4hPB/Landi-svg.png" },
  {
    title: "Lee Cooper Logo",
    img: "https://i.ibb.co/stMcLTv/Lee-Cooper-logo.jpg",
  },
  {
    title: "Logo Image",
    img: "https://i.ibb.co/ZJg6sY1/Logo-3392173f-5946-4ec1-a863-0a88a9be61bc-2000x.webp",
  },
  { title: "Carry Logo", img: "https://i.ibb.co/3vvGKPd/logo-Carry.jpg" },
  {
    title: "GT Logo",
    img: "https://i.ibb.co/VHXjm6h/logo-guidelines-fy21-GTlogo-wordmark-en-colour.jpg",
  },
  {
    title: "Londre Textiles Logo",
    img: "https://i.ibb.co/9WPny1T/Londre-Textiles-logo-RGB.jpg",
  },
  {
    title: "Malwee Kids Logo",
    img: "https://i.ibb.co/j6dqCjP/Malwee-Kids-logo-final-575.png",
  },
  { title: "Marcus Logo", img: "https://i.ibb.co/BKz6d2x/marcus-logo-01.jpg" },
  {
    title: "MRP Logo",
    img: "https://i.ibb.co/BK8ZRGp/MRP-JO-BIG-569a1f5a.png",
  },
  {
    title: "Pick n Pay Logo",
    img: "https://i.ibb.co/LnZ3JjF/Pick-n-Pay-logo-carousel.png",
  },
  {
    title: "Sports Direct Logo",
    img: "https://i.ibb.co/hcMPxqF/Sports-Direct-Liverpool-ONE.jpg",
  },
  {
    title: "Walmart Logo",
    img: "https://i.ibb.co/0h9KwX9/Walmart-logo-svg.png",
  },
  {
    title: "Image",
    img: "https://i.ibb.co/qRrtnnL/0fee0c3f36a7fb8118b4f2526fa4a37d.png",
  },
  { title: "5-10-15 Logo", img: "https://i.ibb.co/x87N4h3/5-10-15.jpg" },
  {
    title: "Lonsdale Logo",
    img: "https://i.ibb.co/hRntxLb/2560px-Lonsdale-Logo-svg.png",
  },
  { title: "Image", img: "https://i.ibb.co/LnPfND3/1570816708084.jpg" },
];

const ClientsCarousol = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [slidesToScroll, setSlidesToScroll] = useState(3);
  const [cellSpacing, setCellSpacing] = useState(10);

  // const windowSize = useRef([window.innerWidth, window.innerHeight]);
  // const w = windowSize?.current[0];

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (width <= 480) {
      setSlidesToShow(3);
      setSlidesToScroll(2);
      setCellSpacing(2);
    } else if (width > 480 && width < 1024) {
      setSlidesToShow(3);
      setSlidesToScroll(2);
      setCellSpacing(5);
    }
  }, [width]);

  console.log(width);

  return (
    <div className="w-full overflow-hidden">
      <Carousel
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
        cellAlign="left"
        cellSpacing={cellSpacing}
        wrapAround={true}
        zoomScale={0.8}
        renderCenterLeftControls={({ previousSlide }) => (
          <button
            className="p-1 border rounded-full"
            onClick={previousSlide}
            aria-label="click left"
          >
            <svg
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
            </svg>
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button
            className="p-1 border rounded-full"
            onClick={nextSlide}
            aria-label="click right"
          >
            <svg
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
            </svg>
          </button>
        )}
      >
        {cli?.map((x, index) => {
          return (
            <div
              key={index}
              className=" w-full h-full flex justify-center items-center"
            >
              <Image src={x?.img} height={110} width={110} alt={x?.title} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ClientsCarousol;
