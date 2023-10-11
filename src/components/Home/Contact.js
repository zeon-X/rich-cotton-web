import React from "react";
import { email, location, phone } from "../../../public/assets/svg";
import contactUsData from "../../../public/assets/data/contactUsData";

const ContactDetailsContainer = ({ data }) => {
  return (
    <div className="lg:w-auto sm:w-full">
      <div className="">
        <iframe
          src={data?.location}
          width="480"
          height="280"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className=" roundedxl"
        ></iframe>
      </div>

      <div className=" mt-6">
        <h1 className="lg:text-xl md:text-md sm:text-md  mb-2">{data?.name}</h1>

        <div className="mt-2 flex flex-col gap-4 text-sm">
          <div className="flex gap-4 items-center">
            {location}
            <p>{data?.address}</p>
          </div>
          <div className="flex gap-4 items-center">
            {phone}
            <a target="_blank" href={`tel:${data?.phone.replace(/\s/g, "")}`}>
              {data?.phone}
            </a>
          </div>
          <div className="flex gap-4 items-center">
            {email}
            <a
              target="_blank"
              href={`mailto:${data?.email.replace(/\s/g, "")}`}
            >
              {data?.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="lg:px-6 md:px-4 sm:px-3">
      <section id="product" className="max-w-[1190px] w-full mx-auto pt-24 ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="lg:text-4xl md:text-3xl sm:text-3xl font-medium">
            Contact Us
          </h1>
          <h2 className="text-xs text-center mt-3 text-greenxx ">
            We've compiled the best real-life examples of Contact Us pages on
            the web plus some affordable templates to inspire your own.
          </h2>
        </div>

        <div className="mt-14 w-full flex lg:flex-row justify-center sm:flex-col gap-8">
          {contactUsData?.map((x, index) => {
            return <ContactDetailsContainer data={x} />;
          })}
        </div>
      </section>
    </section>
  );
};

export default Contact;
