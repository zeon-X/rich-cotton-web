import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="lg:px-6 md:px-4 sm:px-6">
      <section id="about" className="max-w-[1190px] w-full mx-auto py-12">
        {/* <div className="flex flex-col justify-center items-center">
          <h1 className="lg:text-4xl md:text-3xl sm:text-3xl font-medium">About Us</h1>
          <h2 className="text-xs mt-3 text-greenxx">
            Celebrating Styles: Our Diverse Array of Satisfied Clients
          </h2>
        </div> */}

        <div className="mt-10 flex lg:flex-row md:flex-row sm:flex-col-reverse justify-between items-center gap-10">
          <div className="lg:w-5/12 md:w-5/12 sm:w-full">
            <div className=" w-full shadow-sm border p-6">
              <Image
                src={
                  "https://i.ibb.co/c6Mz643/326330018-865900591346454-4335407135782960927-n.jpg"
                }
                height={200}
                width={200}
                alt=""
                className="rounded-full mx-auto mb-0 sm:mb-4"
              />
              <div className="max-w-[420px] mx-auto w-full lg:p-6 sm:p-0">
                <h1 className="text-lg font-semibold text-center">
                  Message From Managing Director
                </h1>
                <p className="lg:text-md md:text-md sm:text-xs mt-4  text-center">
                  <i>
                    "Welcome to our website! As the managing director of this
                    company, I would like to thank you for taking the time to
                    visit us. Our team is dedicated to delivering exceptional
                    products and services, and we hope that you find the infor-
                    mation you are looking for on our site. Please feel free to
                    reach out to us with any questions or feedback, as we value
                    your input. We look forward to creating a positive experi-
                    ence for you as you explore what we have to offer. Thank you
                    for visiting and we hope to earn your business."
                  </i>
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-7/12 md:w-7/12 sm:w-full">
            <div className="flex flex-col lg:justify-start md:justify-start sm:justify-center lg:items-start md:items-start sm:items-center  mb-6">
              <h1 className="lg:text-4xl md:text-3xl sm:text-3xl font-medium ">
                About Us
              </h1>
              <h2 className="text-xs mt-2 text-greenxx">
                Celebrating Styles: Our Diverse Array of Satisfied Clients
              </h2>
            </div>

            <p className="lg:text-lg md:text-md sm:text-md ">
              Richcotton is one of the leading apparel sourcing, buying office
              and Woven factory in Bangladesh. Richcotton has been doing
              business with European, American, Canadian, British, Australian &
              South Africans clothing brands.
              <br /> <br />
              We are strongly capable to handle any products among Woven, Knit &
              Sweater. We are highly strong in denim items. Also we have a great
              number of sourcing of all kinds of raw materials and garment
              facto- ries, textile mills & washing plants.
              <br /> <br />
              We have skilled and well trained Merchandising team, Quality
              Assurance team, Gar- ment Technical team, Wash technical team,
              Planning team, Social compliance audit team, Commercial & Shipping
              team.
              <br /> <br />
              We have own development team with inhoused sample making facility.
              Our motto is{" "}
              <strong>
                <i>
                  "Deliver on time in undamaged condition at competitive price"
                </i>
              </strong>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
