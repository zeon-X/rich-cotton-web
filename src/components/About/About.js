import React from "react";
import {
  aboutUsData,
  FactoryData,
} from "../../../public/assets/data/aboutUsData";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-[1080px] w-full mx-auto py-6 lg:px-6 md:px-4 sm:px-6"
    >
      {aboutUsData.map((section, index) => {
        // console.log(section);
        return (
          <div key={index} className="mt-8">
            <h1 className="lg:text-[24px] md:text-[22px] sm:text-[20px] font-semibold text-primary uppercase  mb-6">
              {section?.section}
            </h1>
            {section?.bannerImage ? (
              <div
                className={
                  index % 2 === 0
                    ? "flex lg:flex-row md:flex-row sm:flex-col mb-8 gap-4 "
                    : "flex lg:flex-row-reverse md:flex-row-reverse sm:flex-col-reverse mb-8 gap-4"
                }
              >
                <p className="lg:text-[16px] md:text-[14px] sm:text-[12px] lg:w-1/2 md:w-1/2 sm:w-full ">
                  {section?.content}
                </p>

                <div className="lg:w-1/2 md:w-1/2 sm:w-full">
                  <Image
                    src={section.bannerImage}
                    alt={`${section.section} Banner`}
                    width={500} // Set your desired image width
                    height={500} // Set your desired image height
                  />
                </div>
              </div>
            ) : (
              <p className="lg:text-[16px] md:text-[14px] sm:text-[12px] mb-6">
                {section?.content}
              </p>
            )}
          </div>
        );
      })}

      {FactoryData.map((section, index) => {
        console.log(section);
        return (
          <div key={index} className="mt-8">
            <h1 className="lg:text-[24px] md:text-[22px] sm:text-[20px] font-semibold text-primary uppercase  mb-6">
              {section?.section}
            </h1>
            {section?.bannerImage ? (
              <div
                className={
                  index % 2 === 0
                    ? "flex lg:flex-row md:flex-row sm:flex-col mb-8 gap-4 "
                    : "flex lg:flex-row-reverse md:flex-row-reverse sm:flex-col-reverse mb-8 gap-4"
                }
              >
                <p className="lg:text-[16px] md:text-[14px] sm:text-[12px] lg:w-1/2 md:w-1/2 sm:w-full ">
                  {section?.content}
                </p>

                <div className="lg:w-1/2 md:w-1/2 sm:w-full">
                  <Image
                    src={section.bannerImage}
                    alt={`${section.section} Banner`}
                    width={500} // Set your desired image width
                    height={500} // Set your desired image height
                  />
                </div>
              </div>
            ) : (
              <p className="lg:text-[16px] md:text-[14px] sm:text-[12px] mb-6">
                {section?.content}
              </p>
            )}
          </div>
        );
      })}

      <p>Please click on the below link To know more about our factory </p>
    </section>
  );
};

export default About;
