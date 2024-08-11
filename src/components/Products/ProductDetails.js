"use client";
import Image from "next/image";
import React, { useState } from "react";
import Swal from "sweetalert2";
import CustomLoadingScreen from "../Shared/CustomLoadingScreen";
import ReactImageZoom from "react-image-zoom";
import useWindowDimensions from "@/utilities/hooks/useWindowDimensions";

const ProductDetails = ({ productDetails }) => {
  // console.log(productDetails);

  const [dp, setDp] = useState(productDetails?.img || "");

  console.log(productDetails);
  const { height, width } = useWindowDimensions();

  // console.log(width);

  if (productDetails) {
    return (
      <div className="lg:px-6 md:px-4 sm:px-3 py-6">
        <div className=" flex lg:flex-row md:flex-row sm:flex-col justify-between gap-8">
          {/* IMAGE */}
          {/* <div className="lg:w-6/12 md:w-6/12  sm:w-full border"> */}
          <div className="flex lg:flex-row md:flex-row sm:flex-col-reverse gap-8">
            {productDetails?.imagesArray.length > 0 && (
              <div className="flex lg:flex-col md:flex-col sm:flex-row gap-6">
                {[...productDetails?.imagesArray, productDetails?.img].map(
                  (x, index) => {
                    return (
                      <Image
                        key={index}
                        onClick={() => setDp((preState) => x)}
                        src={x}
                        height={100}
                        width={75}
                        alt={x}
                        className="border cursor-pointer"
                      />
                    );
                  }
                )}
              </div>
            )}
            <div className=" border cursor-zoom-in flex justify-center items-center">
              {/* <Image
              src={productDetails?.img}
              height={300}
              width={300}
              alt={productDetails?.product}
              className="w-full h-full"
            /> */}

              <ReactImageZoom
                width={300}
                height={400}
                zoomWidth={500}
                img={dp || productDetails?.img}
                offset={{ vertical: 0, horizontal: 10 }}
                zoomPosition={width <= 768 ? "bottom" : "right"}
                // zoomLensStyle={{
                //   "box-shadow":
                //     "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                //   border: "1px solid red",
                // }}
                // zoomStyle={{
                //   border: "1px solid red",
                // }}
              />
            </div>
          </div>

          {/* DETAILS ABOUT THE PRODUCT */}
          <div className="lg:w-4/12 md:w-5/12 sm:w-full">
            <h1 className="text-3xl">{productDetails?.product}</h1>
            <h3 className="text-md font-semibold text-gray-500 my-4">
              {productDetails?.category}
            </h3>

            <div className="py-4 border-b flex gappp items-center">
              <p className="text-md w-4/12">Product: </p>
              <p className="text-sm text-gray-500 w-8/12">
                {productDetails?.product}
              </p>
            </div>
            <div className="py-4 border-b flex gappp items-center">
              <p className="text-md w-4/12">Fabric: </p>
              <p className="text-sm text-gray-500 w-8/12">
                {productDetails?.fabric}
              </p>
            </div>
            <div className="py-4 border-b flex gappp items-center">
              <p className="text-md w-4/12">Wash: </p>
              <p className="text-sm text-gray-500 w-8/12">
                {productDetails?.wash}
              </p>
            </div>
            <div className="py-4 border-b flex gappp items-center">
              <p className="text-md w-4/12">Price: </p>
              <p className="text-sm text-gray-500 w-8/12">
                {productDetails?.price}
              </p>
            </div>
            <div className="py-4  flex gappp items-center">
              <p className="text-md w-4/12">Delivery time: </p>
              <p className="text-sm text-gray-500 w-8/12">
                {productDetails?.deliveryTime}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <>
        <CustomLoadingScreen />
      </>
    );
};

export default ProductDetails;
