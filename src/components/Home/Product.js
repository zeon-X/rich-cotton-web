"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Product = () => {
  const router = useRouter();
  let pro = [
    {
      title: "Men's Clothing",
      img: " https://i.ibb.co/ZfNb2CS/Depositphotos-208473398-XL-scaled.jpg",
      category: "Shirts, T-Shirts, Polo Shirts",
      link: "",
    },
    {
      title: "Womans's Clothing",
      img: "https://i.ibb.co/0M1Y2RC/V-neck-Blouses.png",
      category: "Shirts, Tops, T-Shirts, Polo Shirts",
      link: "",
    },
    {
      title: "Kid's Boys",
      img: "https://i.ibb.co/kDsZ8vZ/boys-fashion.jpg",
      category: "Shirts, Pant, Panjabi",
      link: "",
    },

    {
      title: "Kid's Girls",
      img: "https://i.ibb.co/WnbBrGb/dolce-and-gabbana-childrenswear-kidswear-kids-children-girls-wear-clothes-apparel.jpg",
      category: "Shirts, Tops, T-Shirts, Polo Shirts",
      link: "",
    },
  ];
  //   style={{
  //     backgroundImage: `url(${x?.img})`,
  //   }}
  return (
    <div className="lg:px-6 md:px-4 sm:px-3">
      <section id="product" className="max-w-[1190px] w-full mx-auto py-12">
        <div className="flex flex-col justify-center items-center">
          <h1 className="lg:text-4xl md:text-3xl sm:text-3xl font-medium">
            Our Products
          </h1>
          <h2 className="text-xs mt-3 text-greenxx">
            Click on the product category to see our full range of products.
          </h2>

          <div className="mt-10 w-full grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {/* <div className="mt-14 w-full flex flex-wrap justify-center gap-6"> */}
            {pro?.map((x, index) => {
              return (
                <div
                  onClick={() => {
                    router.push("/products");
                  }}
                  className="max-h-[360px] h-full w-full relative shadow rounded"
                >
                  <img
                    src={x?.img}
                    height={270}
                    className="rounded w-full h-full"
                  />

                  <div className="absolute top-0 h-full w-full  ">
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,0.8)",
                      }}
                      className="h-[360px] opacity-0 hover:cursor-pointer hover:opacity-1"
                    ></div>
                    <div className="absolute bg-black  bottom-0 p-6  w-full rounded-bl rounded-br">
                      <h1 className="text-white font-semibold text-2xl">
                        {x?.title}
                      </h1>
                      <h2 className="text-white  text-md">{x?.category}</h2>
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
