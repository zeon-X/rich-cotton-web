// "use client";
// import { useRouter } from "next/navigation";
import React from "react";

const Contact = () => {
  //   const router = useRouter();
  //   let pro = [
  //     {
  //       title: "Men's Wear",
  //       img: " https://i.ibb.co/ZfNb2CS/Depositphotos-208473398-XL-scaled.jpg",
  //       category: "Shirts, T-Shirts, Polo Shirts",
  //       link: "",
  //     },
  //     {
  //       title: "Ladies's Wear",
  //       img: "https://i.ibb.co/0M1Y2RC/V-neck-Blouses.png",
  //       category: "Shirts, Tops, T-Shirts, Polo Shirts",
  //       link: "",
  //     },
  //     {
  //       title: "Kid's Wear",
  //       img: "https://i.ibb.co/kDsZ8vZ/boys-fashion.jpg",
  //       category: "Shirts, Pant, Panjabi",
  //       link: "",
  //     },

  //     {
  //       title: "Active Wear",
  //       img: "https://i.ibb.co/WnbBrGb/dolce-and-gabbana-childrenswear-kidswear-kids-children-girls-wear-clothes-apparel.jpg",
  //       category: "Shirts, Tops, T-Shirts, Polo Shirts",
  //       link: "",
  //     },
  //     {
  //       title: "Work Wear",
  //       img: "https://i.ibb.co/WnbBrGb/dolce-and-gabbana-childrenswear-kidswear-kids-children-girls-wear-clothes-apparel.jpg",
  //       category: "Shirts, Tops, T-Shirts, Polo Shirts",
  //       link: "",
  //     },
  //   ];

  return (
    <section id="contact" className="lg:px-6 md:px-4 sm:px-3">
      <section id="product" className="max-w-[1190px] w-full mx-auto py-12">
        <div className="flex flex-col justify-center items-center">
          <h1 className="lg:text-4xl md:text-3xl sm:text-3xl font-medium">
            Contact Us
          </h1>
          <h2 className="text-xs text-center mt-3 text-greenxx ">
            We've compiled the best real-life examples of Contact Us pages on
            the web plus some affordable templates to inspire your own.
          </h2>
        </div>

        <div className="mt-14 w-full flex lg:flex-row sm:flex-col-reverse lg:gap-8 sm:gap-8">
          <div className="lg:w-1/2 sm:w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d912.4971187951469!2d90.42092812889469!3d23.8190088556666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7339a734e41%3A0xeec56338507709ec!2sAleeha%20Technologies!5e0!3m2!1sen!2sbd!4v1692461705786!5m2!1sen!2sbd"
              width="600"
              height="350"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
          </div>

          <div className="lg:w-1/2 sm:w-full">
            <h1 className="lg:text-2xl md:text-xl sm:text-xl">
              Richcotton Ltd.
            </h1>

            <div className="mt-6 flex flex-col gap-4">
              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.69 18.933l.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 00.281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 103 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 002.273 1.765 11.842 11.842 0 00.976.544l.062.029.018.008.006.003zM10 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                <p>
                  House 411 (2nd Floor), Road - 7, DOHS, Baridhara, Dhaka-1206,
                  Bangladesh
                </p>
              </div>
              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                    clipRule="evenodd"
                  />
                </svg>

                <p>+88-02-8416886, +88-02-8416887, +88-02-8416887 (FAX)</p>
              </div>
              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                </svg>

                <p> info@clothingpartner.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
