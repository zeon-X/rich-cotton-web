import Image from "next/image";
import React from "react";

const Team = () => {
  let te = [
    {
      name: "John Doe",
      position: "CEO",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image:
        "https://i.ibb.co/hCT0wDq/325620427-864220961566491-3111134461485886854-n.jpg",
    },
    {
      name: "Jane Smith",
      position: "Creative Director",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image: "https://i.ibb.co/qC7mDxT/Hem-Web-Dev.jpg",
    },
    {
      name: "Michael Johnson",
      position: "Head Designer",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image:
        "https://i.ibb.co/S0HxRWC/354085759-1001092221232940-76132798777896077252-n.jpg",
    },
    {
      name: "Emily Williams",
      position: "Marketing Manager",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image: "https://i.ibb.co/3dmKF5c/1680664886137.jpg",
    },
    {
      name: "David Anderson",
      position: "Production Manager",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image:
        "https://i.ibb.co/WD2p9gj/284790552-1033679694192381-6059023917274549591-n.jpg",
    },
    {
      name: "Sarah Lee",
      position: "Customer Relations",
      social: {
        fb: "",
        insta: "",
        linkedin: "",
        twitter: "",
      },
      image:
        "https://i.ibb.co/c6Mz643/326330018-865900591346454-4335407135782960927-n.jpg",
    },
  ];

  return (
    <div className="lg:px-6 md:px-4 sm:px-3">
      <section id="team" className="max-w-[1190px] w-full mx-auto py-14">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-4xl font-medium">Our Team</h1>
          <h2 className="text-xs mt-3 text-green">
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
                    <a className="rounded-full p-2 border" href={x?.social?.fb}>
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
