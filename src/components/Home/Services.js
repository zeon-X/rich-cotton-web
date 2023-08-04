import Image from "next/image";
import React from "react";

const Services = () => {
  let ser = [
    {
      title: "Custom Design",
      description:
        "Bring your unique vision to life with our custom design services, tailored to your brand's identity and style.",
      icon: "https://i.ibb.co/2v4S4kx/custom-design.png",
    },
    {
      title: "Quality Craftsmanship",
      description:
        "Experience the finest quality as our skilled artisans meticulously craft each garment with attention to detail.",
      icon: "https://i.ibb.co/PMHzkQV/quality-craftmanship.png",
    },
    {
      title: "Fast Turnaround",
      description:
        "Need your products quickly? Our streamlined processes ensure a fast turnaround time without compromising on quality.",
      icon: "https://i.ibb.co/K2gHbfF/Fast-Turnaround.png",
    },
    {
      title: "Sustainable Practices",
      description:
        "Contribute to a greener world. We're committed to sustainability, using eco-friendly materials and ethical production methods.",
      icon: "https://i.ibb.co/KNCJvjh/Sustainable-Practices.png",
    },
    {
      title: "Global Shipping",
      description:
        "Reach customers worldwide with our reliable global shipping solutions, making your fashion line accessible to all.",
      icon: "https://i.ibb.co/K5zWdD3/Global-Shipping.png",
    },
    {
      title: "Personalized Styling",
      description:
        "Offer your customers an exceptional shopping experience with personalized styling advice and outfit recommendations.",
      icon: "https://i.ibb.co/tYGX4BV/Personalized-Styling.png",
    },
  ];

  return (
    <div>
      <section id="service" className="max-w-[1180px] w-full mx-auto py-12">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl font-medium">Our Services</h1>
          <h2 className="text-lg mt-3">
            Elevating Your Fashion Experience: Our Exceptional Services
          </h2>

          <div className="mt-14 w-full grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {ser?.map((x, index) => {
              return (
                <div className="border rounded-xl p-6 flex flex-col justify-center items-center">
                  <div className="h-[100px] w-[100px] border rounded-full flex justify-center items-center ">
                    <Image
                      src={x?.icon}
                      height={80}
                      width={80}
                      alt={x?.title}
                    />
                  </div>
                  <h1 className="text-center text-xl font-semibold mt-6">
                    {x?.title}
                  </h1>
                  <p className="text-center text-sm mt-4">{x?.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
