import React from "react";

import contactUsData from "../../../public/assets/data/contactUsData";
import Image from "next/image";
import {
  email_icon,
  location_icon,
  phone_icon,
  web_icon,
} from "../../../public";

const ContactDetailsContainer = ({ data }) => {
  return (
    <div className="w-full max-w-[520px] mx-auto p-4">
      <div className="">
        <iframe
          src={data?.location}
          height="280"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full roundedxl"
        ></iframe>
      </div>

      <div className=" mt-6">
        <h1 className="lg:text-[18px] md:text-md sm:text-md text-primary uppercase font-bold mb-6">
          {data?.name}
        </h1>

        <div className="mt-2 flex flex-col gap-4 text-[14px]">
          <div className="flex gap-6 items-center">
            <Image src={location_icon} height={20} width={20} alt="" />
            <p>
              <span className="font-medium">Address:</span> {data?.address}
            </p>
          </div>
          <div className="flex gap-6 items-center">
            <Image src={phone_icon} height={20} width={20} alt="" />

            <a target="_blank" href={`tel:${data?.phone.replace(/\s/g, "")}`}>
              <span className="font-medium">Phone:</span> {data?.phone}
            </a>
          </div>
          <div className="flex gap-6 items-center">
            <Image src={email_icon} height={20} width={20} alt="" />

            <a
              target="_blank"
              href={`mailto:${data?.email.replace(/\s/g, "")}`}
            >
              <span className="font-medium">Email:</span> {data?.email}
            </a>
          </div>
          {data?.web && (
            <div className="flex gap-6 items-center">
              <Image src={web_icon} height={20} width={20} alt="" />

              <a target="_blank" href={data?.web}>
                <span className="font-medium">Website:</span>{" "}
                richcottonapparels.net
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="lg:px-6 md:px-4 sm:px-3">
      <section id="product" className="max-w-[1080px] w-full mx-auto pt-24 ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="lg:text-4xl md:text-3xl sm:text-3xl font-medium">
            Contact Us
          </h1>
          <h2 className="text-xs text-center mt-3 text-greenxx ">
            We've compiled the best real-life examples of Contact Us pages on
            the web plus some affordable templates to inspire your own.
          </h2>
        </div>

        <div className="mt-14 w-full flex flex-wrap justify-center items-start  gap-8">
          {contactUsData?.map((x, index) => {
            return <ContactDetailsContainer key={index} data={x} />;
          })}
        </div>
      </section>
    </section>
  );
};

export default Contact;
