"use client";
import { useEffect, useState } from "react";
import useWindowDimensions from "@/utilities/hooks/useWindowDimensions";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";

import axiosInstance from "@/utilities/axiosInstance";
import { clientData } from "../../../public/assets/data/clientData";
import Image from "next/image";

const ClientCarousolNew = () => {
  const [slidesToShow, setSlidesToShow] = useState(5);
  const [slidesToScroll, setSlidesToScroll] = useState(1);
  const [cellSpacing, setCellSpacing] = useState(2);
  const [carousolWidth, setCarousolWidth] = useState(1080);

  const [cli, setCli] = useState(clientData);

  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (width <= 600) {
      setSlidesToShow(3);
      setSlidesToScroll(1);
      setCellSpacing(2);
      setCarousolWidth(width - 60);
    } else if (width > 600 && width < 1024) {
      setSlidesToShow(4);
      setSlidesToScroll(1);
      setCellSpacing(5);
      setCarousolWidth(width - 140);
    } else if (width >= 1080) {
      setCarousolWidth(1080);
    }
  }, [width]);

  useEffect(() => {
    // Define an async function to fetch the data
    async function fetchData() {
      try {
        // Swal.showLoading();
        const response = await axiosInstance.get("/client/get");
        let fetchedClients = response?.data;
        setCli([...cli, ...fetchedClients]);
        // Swal.close();
      } catch (error) {
        console.error("Error fetching data:", error);
        // Swal.close();
      }
    }

    // Call the fetchData function
    fetchData();
  }, []); // The empty dependency array ensures this effect runs only once, similar to componentDidMount

  return (
    <Swiper
      //   modules={[Autoplay, Pagination]}
      modules={[Autoplay]}
      style={{ width: `${carousolWidth}px` }}
      autoplay={{ delay: 1500 }}
      spaceBetween={cellSpacing}
      slidesPerView={slidesToShow}
      //   pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {cli?.map((x, index) => {
        return (
          <SwiperSlide
            key={index}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className=" lg:flex md:flex sm:hidden justify-center items-center pb-10">
              <Image src={x?.img} height={110} width={110} alt={x?.title} />
            </div>
            <div className=" w-full h-full lg:hidden md:hidden sm:flex justify-center items-start pb-6">
              <Image src={x?.img} height={80} width={80} alt={x?.title} />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ClientCarousolNew;
