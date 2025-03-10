"use client";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axiosInstance from "@/utilities/axiosInstance";

const PhotoGallerySection = () => {
  const [photoGallery, setPhotoGallery] = useState([]); // Holds gallery images

  useEffect(() => {
    fetchGallery();
  }, []);

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
          <div className="mt-14 w-full flex flex-wrap justify-center items-center gap-4">
            {photoGallery?.map((img, index) => {
              let isEvenIndex = index % 2 === 0; // Alternates between even & odd

              return (
                <>
                  <div
                    style={{ backgroundImage: `url(${img?.url})` }}
                    alt="Gallery"
                    className={` h-[220px] bg-cover bg-center rounded-md ${
                      isEvenIndex ? "w-[220px]" : "w-[320px]"
                    }`}
                  />
                  {/* <p className="mt-[-8px] text-[12px] text-center">
                    {img?.caption}
                  </p> */}
                </>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default PhotoGallerySection;
