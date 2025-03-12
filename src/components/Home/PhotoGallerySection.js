"use client";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import axiosInstance from "@/utilities/axiosInstance";

const PhotoGallerySection = () => {
  const [photoGallery, setPhotoGallery] = useState([]);
  const [currentPhotoInView, setCurrentPhotoInView] = useState(0);
  const [isModalOpen, setModalOpen] = useState(false);
  const [width, setWidth] = useState(300);

  const parentRef = useRef(null);

  useEffect(() => {
    fetchGallery();
  }, []);

  useEffect(() => {
    if (parentRef.current) {
      setWidth(parentRef.current.offsetWidth);
    }
  }, [window.innerWidth]);

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
          <div
            ref={parentRef}
            className="mt-14 w-full flex flex-wrap justify-center items-center gap-4"
          >
            {photoGallery?.map((img, index) => {
              let isEvenIndex = index % 2 === 0;
              let imageWidth =
                width > 620
                  ? width / 4 - 16 * 4
                  : width > 480
                  ? width / 3 - 16 * 3
                  : width;

              let rowNumber = Math.floor(index / 4);
              return (
                <PhotoCard
                  img={img}
                  key={index}
                  index={index}
                  isEvenIndex={
                    width >= 620
                      ? rowNumber % 2 === 0
                        ? !isEvenIndex
                        : isEvenIndex
                      : isEvenIndex
                  }
                  imageWidth={imageWidth}
                  setModalOpen={setModalOpen}
                  setCurrentPhotoInView={setCurrentPhotoInView}
                />
              );
            })}
          </div>
        </div>
      </section>
      {isModalOpen && (
        <PhotoModal
          photos={photoGallery}
          currentIndex={currentPhotoInView}
          setCurrentIndex={setCurrentPhotoInView}
          setModalOpen={setModalOpen}
        />
      )}
    </section>
  );
};

const PhotoCard = ({
  img,
  imageWidth,
  index,
  isEvenIndex,
  setCurrentPhotoInView,
  setModalOpen,
}) => {
  return (
    <div
      style={{
        backgroundImage: `url(${img?.url})`,
        height: imageWidth,
        width: isEvenIndex ? imageWidth * (4 / 3) : imageWidth,
      }}
      className="bg-cover bg-center cursor-pointer"
      onClick={() => {
        setModalOpen(true);
        setCurrentPhotoInView(index);
      }}
    >
      <div className="bg-gradient-to-tr from-[#171717a1] via-transparent to-transparent h-full w-full flex justify-start items-end">
        <p className="p-4 text-[12px] text-white">{img?.caption}</p>
      </div>
    </div>
  );
};

const PhotoModal = ({
  photos,
  currentIndex,
  setCurrentIndex,
  setModalOpen,
}) => {
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : photos.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < photos.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="relative w-full max-w-4xl p-4">
        <button
          className="absolute top-4 right-4 text-white text-3xl"
          onClick={() => setModalOpen(false)}
        >
          ×
        </button>
        <button
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full text-2xl"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <div className="w-full max-h-[80vh] ">
          <img
            src={photos[currentIndex]?.url}
            alt="Gallery Image"
            className="w-full max-h-[80vh] object-contain"
          />

          <p className="px-8 py-2 text-white font-semibold">
            {photos[currentIndex]?.caption}
          </p>
        </div>
        <button
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full text-2xl"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default PhotoGallerySection;
