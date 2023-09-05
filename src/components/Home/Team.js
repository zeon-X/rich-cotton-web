import Image from "next/image";
import React from "react";
import { teamData } from "../../../public/assets/data/teamData";

const Team = () => {
  let te = teamData;

  return (
    <div className="lg:px-6 md:px-4 sm:px-3">
      <section id="team" className="max-w-[1190px] w-full mx-auto py-14">
        <div className="flex flex-col justify-center items-center">
          <h1 className="lg:text-4xl md:text-3xl sm:text-3xl font-medium">
            Our Team
          </h1>
          <h2 className="text-xs text-center mt-3 text-greenxx ">
            Elevating Your Fashion Experience: Our Exceptional Team
          </h2>

          <div className="mt-14 w-full flex flex-wrap justify-center lg:gap-6 md:gap-4 sm:gap-2">
            {te?.map((x, index) => {
              return (
                <div className="lg:w-[260px] lg:h-[340px] md:w-[200px] md:h-[280px] sm:w-[160px] sm:h-[240px] rounded-lg border flex flex-col justify-center items-center">
                  <Image
                    src={x?.image}
                    height={140}
                    width={140}
                    alt={x?.name}
                    className="rounded-full lg:block md:hidden sm:hidden"
                  />
                  <Image
                    src={x?.image}
                    height={120}
                    width={120}
                    alt={x?.name}
                    className="rounded-full lg:hidden md:block sm:hidden"
                  />
                  <Image
                    src={x?.image}
                    height={100}
                    width={100}
                    alt={x?.name}
                    className="rounded-full lg:hidden md:hidden sm:block"
                  />
                  <h1 className="lg:text-lg sm:text-md  font-semibold mt-4">
                    {x?.name}
                  </h1>
                  <h2 className="lg:text-sm sm:text-xs ">{x?.position}</h2>
                  {/* 
                      
                      


*/}

                  <div className="flex lg:gap-2 md:gap-2 sm:gap-1 mt-6">
                    <a
                      className="rounded-full p-2 border"
                      href={x?.social?.fb}
                      aria-label="Facebook"
                      target="_blank"
                    >
                      {" "}
                      <Image
                        src={
                          "https://i.ibb.co/WFpLDq4/facebook-app-symbol-min.png"
                        }
                        height={14}
                        width={14}
                        alt=""
                      />{" "}
                    </a>
                    <a
                      className="rounded-full p-2 border"
                      href={x?.social?.insta}
                      aria-label="Instagram"
                      target="_blank"
                    >
                      {" "}
                      <Image
                        src={"https://i.ibb.co/Qr41Gcx/instagram-min.png"}
                        height={14}
                        width={14}
                        alt=""
                      />{" "}
                    </a>
                    <a
                      className="rounded-full p-2 border"
                      href={x?.social?.linkedin}
                      aria-label="Linked In"
                      target="_blank"
                    >
                      {" "}
                      <Image
                        src={"https://i.ibb.co/1Tn56Hd/linkedin-min.png"}
                        height={14}
                        width={14}
                        alt=""
                      />{" "}
                    </a>
                    <a
                      className="rounded-full p-2 border"
                      href={x?.social?.twitter}
                      aria-label="Twitter"
                      target="_blank"
                    >
                      {" "}
                      <Image
                        src={"https://i.ibb.co/BrDM9nQ/twitter-min.png"}
                        height={14}
                        width={14}
                        alt=""
                      />{" "}
                    </a>
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

export default Team;
