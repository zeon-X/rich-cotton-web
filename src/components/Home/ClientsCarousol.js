"use client";
import Carousel from "nuka-carousel";
import { useEffect, useRef, useState } from "react";
let cli = [
  {
    title: "Clothing Buyer List 1",
    img: "https://i.ibb.co/QCpK0vb/Screenshot-2023-08-04-at-12-54-13-Clothing-Buyer-List-List-of-100-Garment-Buyers-in-Bangladesh.png",
    link: "",
  },
  {
    title: "Zara",
    img: "https://i.ibb.co/LYynd61/1024px-Zara-Logo-svg.png",
    link: "https://www.zara.com",
  },
  {
    title: "Asda",
    img: "https://i.ibb.co/hmT37RB/Asda-Resized-20150223115224441.jpg",
    link: "https://www.asda.com",
  },
  {
    title: "Target",
    img: "https://i.ibb.co/McGLmNQ/Target-2018-svg.png",
    link: "https://www.target.com",
  },
  {
    title: "C&A",
    img: "https://i.ibb.co/2sFbdBR/c-a-logo-188-D81-EBFB-seeklogo-com.png",
    link: "https://www.c-and-a.com",
  },
  {
    title: "Clothing Buyer List 2",
    img: "https://i.ibb.co/nLpMQQp/Screenshot-2023-08-04-at-12-54-35-Clothing-Buyer-List-List-of-100-Garment-Buyers-in-Bangladesh.png",
    link: "",
  },
  {
    title: "Clothing Buyer List 3",
    img: "https://i.ibb.co/5jBp12t/Screenshot-2023-08-04-at-12-54-26-Clothing-Buyer-List-List-of-100-Garment-Buyers-in-Bangladesh.png",
    link: "",
  },
  {
    title: "Clothing Buyer List 4",
    img: "https://i.ibb.co/f1gKmBy/Screenshot-2023-08-04-at-12-54-20-Clothing-Buyer-List-List-of-100-Garment-Buyers-in-Bangladesh.png",
    link: "",
  },
];
const ClientsCarousol = () => {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [slidesToScroll, setSlidesToScroll] = useState(3);
  const [cellSpacing, setCellSpacing] = useState(20);

  // const windowSize = useRef([window.innerWidth, window.innerHeight]);
  // const w = windowSize.current[0];

  // useEffect(() => {
  //   if (w <= 480) {
  //     setSlidesToShow(3);
  //     setSlidesToScroll(2);
  //     setCellSpacing(10);
  //   } else if (w > 480 && w < 1024) {
  //     setSlidesToShow(3);
  //     setSlidesToScroll(2);
  //     setCellSpacing(15);
  //   }
  // }, [w]);

  // console.log(w);

  return (
    <Carousel
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToScroll}
      cellAlign="left"
      cellSpacing={cellSpacing}
      wrapAround={true}
      zoomScale={0.8}
      renderCenterLeftControls={({ previousSlide }) => (
        <button className="p-1 border rounded-full" onClick={previousSlide}>
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
        <button className="p-1 border rounded-full" onClick={nextSlide}>
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
            <img src={x?.img} height={110} width={110} alt="" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default ClientsCarousol;
