"use client";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import axiosInstance from "@/utilities/axiosInstance";

const PhotoGallerySection = () => {
  const [photoGallery, setPhotoGallery] = useState([]); // Holds gallery images
  const [width, setWidth] = useState(300);

  const parentRef = useRef(null);

  useEffect(() => {
    fetchGallery();
  }, []);

  useEffect(() => {
    if (parentRef.current) {
      console.log(parentRef.current.offsetWidth); // Correct property
      setWidth(parentRef.current.offsetWidth);
    }
  }, []); // Runs once after mount

  const fetchGallery = async () => {
    try {
      Swal.showLoading();
      const response = await axiosInstance.get("/app-basic/get");
      if (response?.data?.length > 0) {
        setPhotoGallery(response.data[0].photoGallery || []);
      }
      Swal.close();
    } catch (error) {
      console.error("Error fetching data:", error);
      Swal.close();
    }
  };

  return (
    <section className="lg:px-6 md:px-4 sm:px-3">
      <section id="client" className="max-w-[1080px] w-full mx-auto pt-24">
        <div className="flex flex-col justify-center items-center">
          <h1 className="lg:text-4xl md:text-3xl sm:text-3xl font-medium">
            Photo Gallery
          </h1>
          <h2 className="text-xs text-center mt-3 text-green-600">
            Capturing Moments, One Frame at a Time
          </h2>

          {/*  */}
          <div
            ref={parentRef}
            className="mt-14 w-full flex flex-wrap justify-center items-center gap-4"
          >
            {photoGallery?.map((img, index) => {
              let isEvenIndex = index % 2 === 0;
              // let imageWidth = 240;

              let imageWidth =
                width > 620
                  ? width / 4 - 16 * 4
                  : width > 480
                  ? width / 3 - 16 * 3
                  : width;

              let rowNumber = Math.floor(index / 4);
              return (
                // <PhotoCard
                //   img={img}
                //   key={index}
                //   isEvenIndex={isEvenIndex}
                //   imageWidth={imageWidth}
                // />
                <PhotoCard
                  img={img}
                  key={index}
                  isEvenIndex={
                    width >= 620
                      ? rowNumber % 2 === 0
                        ? !isEvenIndex
                        : isEvenIndex
                      : isEvenIndex
                  }
                  imageWidth={imageWidth}
                />
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default PhotoGallerySection;

const PhotoCard = ({ img, imageWidth, isEvenIndex }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img?.url})`,
        height: imageWidth,
        width: isEvenIndex ? imageWidth * (4 / 3) : imageWidth,
      }}
      alt="Gallery"
      className={` bg-cover bg-center rounded-md flex justify-start items-end`}
    >
      <p className="p-4 text-[12px]  text-white">{img?.caption}</p>
    </div>
  );
};
