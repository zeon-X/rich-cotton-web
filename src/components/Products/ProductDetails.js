import Image from "next/image";
import React from "react";

const ProductDetails = ({ productDetails }) => {
  return (
    <div className="lg:px-6 md:px-4 sm:px-3 py-6">
      <div className=" flex lg:flex-row md:flex-row sm:flex-col justify-between gap-8">
        {/* IMAGE */}
        <div className="lg:w-6/12 md:w-6/12  sm:w-full">
          <Image
            src={productDetails?.img}
            height={300}
            width={300}
            alt={productDetails?.product}
            className="w-full h-full"
          />
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
};

export default ProductDetails;
