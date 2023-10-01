import React from "react";
import aboutUsData from "../../../public/assets/data/aboutUsData";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-[1190px] w-full mx-auto py-6 lg:px-6 md:px-4 sm:px-6"
    >
      {aboutUsData.map((section, index) => (
        <div key={index} className="mt-8">
          <h1 className="lg:text-3xl md:text-2xl sm:text-2xl font-semibold  mb-6">
            {section?.section}
          </h1>
          {section.bannerImage ? (
            <div
              className={
                index % 2 === 0
                  ? "flex lg:flex-row md:flex-row sm:flex-col mb-8 gap-4 "
                  : "flex lg:flex-row-reverse md:flex-row-reverse sm:flex-col-reverse mb-8 gap-4"
              }
            >
              <p className="lg:text-lg md:text-md sm:text-md lg:w-1/2 md:w-1/2 sm:w-full ">
                {section.content}
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
            <p className="lg:text-lg md:text-md sm:text-md mb-6">
              {section?.content}
            </p>
          )}
        </div>
      ))}
    </section>
  );
};

export default About;
