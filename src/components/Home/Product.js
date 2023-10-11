"use client";
import { useRouter } from "next/navigation";
import React from "react";
import parentCategory from "../../../public/assets/data/parentCategory";
import Image from "next/image";

const Product = () => {
  const router = useRouter();
  // let pro = parentCategory;

  //   style={{
  //     backgroundImage: `url(${x?.img})`,
  //   }}
  return (
    <div className="lg:px-6 md:px-4 sm:px-3">
      <section id="product" className="max-w-[1190px] w-full mx-auto pt-24 ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="lg:text-4xl md:text-3xl sm:text-3xl font-medium">
            Our Products
          </h1>
          <h2 className="text-xs text-center mt-3 text-greenxx ">
            Click on the product category to see our full range of products.
          </h2>

          {/* <div className="mt-10 w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6"> */}
          <div className="mt-14 w-full flex flex-wrap justify-center items-center gap-6">
            {parentCategory?.map((x, index) => {
              return (
                <div
                  onClick={() => {
                    router.push(`/products/${x?.link}`);
                  }}
                  className="h-[240px]  w-[320px] relative border rounded"
                >
                  <Image
                    src={x?.img}
                    height={240}
                    width={320}
                    className="roundedonly w-full h-full"
                  />

                  <div className="absolute top-0 h-[240px] w-full opacity-1 hover:cursor-pointer hover:opacity-[0.8] hover:shadow ">
                    <div className="h-[160px] " />
                    <div
                      style={{
                        backgroundColor: "rgb(22, 170, 27, 0.9)",
                      }}
                      className="absolute bottom-0 px-6 py-4 h-[80px] w-full roundedonlyl roundedonlyr"
                    >
                      <h1 className="text-white  text-lg  font-bold">
                        {x?.title}
                      </h1>
                      <h2 className="text-white  text-sm   font-semibold">
                        {x?.category}
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
