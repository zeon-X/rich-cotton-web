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
    <div>
      <section id="product" className="max-w-[1190pxpx] w-full mx-auto py-12">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-medium">Our Products</h1>
          <h2 className="text-lg mt-3">
            Click on the product category to see our full range of products.
          </h2>

          {/* <div className="mt-10 w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6"> */}
          <div className="mt-14 w-full flex flex-wrap justify-center gap-6">
            {pro?.map((x, index) => {
              return (
                <div
                  onClick={() => {
                    router.push("/products");
                  }}
                  className="h-[360px] w-[400px] relative shadow rounded-xl"
                >
                  <img src={x?.img} height={270} className="rounded-xl" />

                  <div className="absolute top-0 h-full w-full  ">
                    <div
                      style={{
                        backgroundColor: "rgba(0,0,0,0.8)",
                      }}
                      className="h-full opacity-0 hover:cursor-pointer hover:opacity-1"
                    ></div>
                    <div className="absolute bg-lgreen  bottom-0 p-6  w-full rounded-bl-xl rounded-br-xl">
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
