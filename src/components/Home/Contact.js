import React from "react";
import { email, location, phone } from "../../../public/assets/svg";

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

        <div className="mt-14 w-full flex lg:flex-row sm:flex-col gap-8">
          <div className="lg:w-auto sm:w-full">
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.4971187951469!2d90.42092812889469!3d23.8190088556666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7339a734e41%3A0xeec56338507709ec!2sAleeha%20Technologies!5e0!3m2!1sen!2sbd!4v1692461705786!5m2!1sen!2sbd"
                width="600"
                height="280"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="w-full rounded-xl"
              ></iframe>
            </div>

            <div className="w-full mt-6">
              <h1 className="lg:text-2xl md:text-xl sm:text-xl mb-2">
                Rich Cotton Ltd.
              </h1>

              <div className="mt-2 flex flex-col gap-4">
                <div className="flex gap-4">
                  {location}
                  <p>
                    House 411 (2nd Floor), Road - 7, DOHS, Baridhara,
                    Dhaka-1206, Bangladesh
                  </p>
                </div>
                <div className="flex gap-4">
                  {phone}

                  <p>+88-02-8416886, +88-02-8416887, +88-02-8416887 (FAX)</p>
                </div>
                <div className="flex gap-4">
                  {email}

                  <p> info@clothingpartner.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-auto sm:w-full">
            <div className="w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.4971187951469!2d90.42092812889469!3d23.8190088556666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7339a734e41%3A0xeec56338507709ec!2sAleeha%20Technologies!5e0!3m2!1sen!2sbd!4v1692461705786!5m2!1sen!2sbd"
                width="600"
                height="280"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="w-full rounded-xl"
              ></iframe>
            </div>

            <div className="w-full mt-6">
              <h1 className="lg:text-2xl md:text-xl sm:text-xl mb-2">
                Rich Cotton Ltd.
              </h1>

              <div className="mt-2 flex flex-col gap-4">
                <div className="flex gap-4">
                  {location}
                  <p>
                    House 411 (2nd Floor), Road - 7, DOHS, Baridhara,
                    Dhaka-1206, Bangladesh
                  </p>
                </div>
                <div className="flex gap-4">
                  {phone}

                  <p>+88-02-8416886, +88-02-8416887, +88-02-8416887 (FAX)</p>
                </div>
                <div className="flex gap-4">
                  {email}

                  <p> info@clothingpartner.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
