"use client";
import useWindowDimensions from "@/utilities/hooks/useWindowDimensions";
import Image from "next/image";
import Carousel from "nuka-carousel";
import { useEffect, useState } from "react";
import { clientData } from "../../../public/assets/data/clientData";
import Swal from "sweetalert2";
import axios from "axios";

const ClientsCarousol = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);
  const [slidesToScroll, setSlidesToScroll] = useState(3);
  const [cellSpacing, setCellSpacing] = useState(10);
  const [cli, setCli] = useState(clientData);

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

  // console.log(width);

  // const [data, setData] = useState([]);

  useEffect(() => {
    // Define an async function to fetch the data
    async function fetchData() {
      try {
        Swal.showLoading();
        const response = await axios.get("/api/clients");
        let fetchedClients = response?.data?.clients;
        // setData(fetchedClients);
        // let tem = [...cli, ...fetchedClients];
        setCli([...cli, ...fetchedClients]);
        Swal.close();
      } catch (error) {
        console.error("Error fetching data:", error);
        Swal.close();
      }
    }

    // Call the fetchData function
    fetchData();
  }, []); // The empty dependency array ensures this effect runs only once, similar to componentDidMount

  return (
    <section className="w-full overflow-hidden">
      <Carousel
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}
        cellAlign="left"
        cellSpacing={cellSpacing}
        wrapAround={true}
        autoplay={true}
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
    </section>
  );
};

export default ClientsCarousol;
