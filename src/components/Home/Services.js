import Image from "next/image";
import React from "react";
import { serviceData } from "../../../public/assets/data/serviceData";

const Services = () => {
  let ser = serviceData;

  return (
    <div className="lg:px-6 md:px-4 sm:px-3">
      <section id="service" className="max-w-[1190px] w-full mx-auto pt-24 ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="lg:text-4xl md:text-3xl sm:text-3xl font-medium">
            Our Services
          </h1>
          <h2 className="text-xs  mt-3 text-greenxx  text-center">
            Elevating Your Fashion Experience: Our Exceptional Services
          </h2>

          {/* <div className="mt-14 w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 lg:gap-6 sm:gap-2"> */}
          <div className="mt-14 w-full flex flex-wrap justify-center items-start lg:gap-6 sm:gap-2">
            {ser?.map((x, index) => {
              return (
                <div
                  key={index}
                  className="lg:w-[260px] md:w-[220px] sm:w-[190px] lg:min-h-[320px]  md:min-h-[320px] sm:min-h-[210px] bg-white   border roundedlg lg:py-6 md:p-4 sm:p-3 flex flex-col justify-start items-center"
                >
                  <div className="lg:h-[100px] lg:w-[100px] md:h-[80px] md:w-[80px] sm:h-[70px] sm:w-[70px]  rounded-full flex justify-center items-center ">
                    <Image
                      src={x?.icon}
                      height={80}
                      width={80}
                      alt={x?.title}
                      className="lg:block md:hidden sm:hidden "
                    />
                    <Image
                      src={x?.icon}
                      height={60}
                      width={60}
                      alt={x?.title}
                      className="lg:hidden md:block sm:hidden "
                    />
                    <Image
                      src={x?.icon}
                      height={50}
                      width={50}
                      alt={x?.title}
                      className="lg:hidden md:hidden sm:block "
                    />
                  </div>
                  <h1 className="text-center lg:text-[14px] md:text-[14px] sm:text-[12px] font-medium lg:mt-3 sm:mt-2">
                    {x?.title}
                  </h1>
                  <p className="text-center lg:text-[12px] md:text-[12px] sm:text-[10px] lg:mt-2 sm:mt-1">
                    {x?.description}
                  </p>
                </div>
              );
            })}
          </div>
          {/* <div className="w-full overflow-x-hidden ">
            <div className={`mt-14 w-[${296 * ser?.length}px]  flex sm:gap-2`}>
              {ser?.map((x, index) => {
                return (
                  <div className="w-[280px] border roundedlg lg:p-6 md:p-4 sm:p-4 flex flex-col justify-start items-center">
                    <div className="h-[80px] w-[80px] border rounded-full flex justify-center items-center ">
                      <Image
                        src={x?.icon}
                        height={60}
                        width={60}
                        alt={x?.title}
                      />
                    </div>
                    <h1 className="text-center text-lg font-medium mt-6">
                      {x?.title}
                    </h1>
                    <p className="text-center text-sm mt-4">{x?.description}</p>
                  </div>
                );
              })}
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default Services;
