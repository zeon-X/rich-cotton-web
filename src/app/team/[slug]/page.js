"use client";
import React, { useEffect, useState } from "react";
// import { teamData } from "../../../../public/assets/data/teamData";
import Image from "next/image";
import { fb, insta, linkedin, twitter } from "../../../../public/assets/svg";
import { profileImage } from "../../../../public";
import MemberSuggestion from "@/components/Team/MemberSugestion";
import axiosInstance from "@/utilities/axiosInstance";
import CustomLoadingScreen from "@/components/Shared/CustomLoadingScreen";

const page = ({ params }) => {
  const slug = params.slug;

  const [memberData, setMemberData] = useState({});
  const [suggestionData, setSuggestionData] = useState([]);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const splashTimeout = setTimeout(() => {
      setShowSplash(false);
    }, 1000); // 2 seconds

    return () => clearTimeout(splashTimeout);
  }, []);

  useEffect(() => {
    // Define an async function to fetch the data
    async function fetchData() {
      try {
        const response = await axiosInstance.get("/team/get");

        let memberData = response?.data?.find((x) => x.slug == slug);
        setMemberData(memberData);
        let suggestionData = response?.data?.filter((x) => x.slug != slug);
        setSuggestionData(suggestionData);

        console.log(response?.data);
        // Swal.close();
      } catch (error) {
        console.error("Error fetching data:", error);
        // Swal.close();
      }
    }

    // Call the fetchData function
    fetchData();
  }, []);

  // console.log(memberData);

  return (
    <>
      {showSplash ? (
        <CustomLoadingScreen />
      ) : (
        <section className="max-w-[1190px] w-full mx-auto py-14 lg:px-6 md:px-4 sm:px-2">
          <div className="flex lg:flex-row md:flex-row sm:flex-col justify-between items-center gap-8  lg:p-12 md:p-8 sm:p-4  ">
            <div className="lg:w-5/12 md:w-5/12 sm:w-full">
              <Image
                src={
                  memberData?.image === "" ? profileImage : memberData?.image
                }
                height={680}
                width={680}
                alt=""
              />
            </div>

            <div className="lg:w-6/12 md:w-6/12 sm:w-full">
              <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-bold mb-4">
                {memberData?.name}
              </h1>
              <h2 className="text-md text-green font-bold mb-4">
                {memberData?.position}
              </h2>
              <p className="text-lg mb-6">{memberData?.details}</p>

              <div className="grid grid-cols-2 gap-4 border-t border-b py-8 mb-6">
                <div className="">
                  <h2 className="text-md font-bold mb-0">Contact Me: </h2>
                  <p>{memberData?.phone}</p>
                </div>
                <div className="">
                  <h2 className="text-md font-bold mb-0">Email: </h2>
                  <p>{memberData?.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-md font-bold  mb-0">Follow me on: </p>

                <div className=" flex  lg:gap-2 md:gap-2 sm:gap-1 ">
                  <a
                    className="rounded-full p-2 border"
                    href={memberData?.social?.fb}
                    aria-label="Facebook"
                    target="_blank"
                  >
                    <div className="h-[16px] w-[16px]">{fb}</div>
                  </a>
                  <a
                    className="rounded-full p-2 border"
                    href={memberData?.social?.insta}
                    aria-label="Instagram"
                    target="_blank"
                  >
                    <div className="h-[16px] w-[16px]">{insta}</div>
                  </a>
                  <a
                    className="rounded-full p-2 border"
                    href={memberData?.social?.linkedin}
                    aria-label="Linked In"
                    target="_blank"
                  >
                    <div className="h-[16px] w-[16px]">{linkedin}</div>
                  </a>
                  <a
                    className="rounded-full p-2 border"
                    href={memberData?.social?.twitter}
                    aria-label="Twitter"
                    target="_blank"
                  >
                    <div className="h-[16px] w-[16px]">{twitter}</div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:px-6 md:px-6 sm:px-0 w-full flex flex-col justify-center gap-10 mt-12">
            <div>
              <h1 className=" lg:text-4xl md:text-3xl sm:text-xl text-green font-bold uppercase text-center">
                The Textiles Experts!
              </h1>
              <h2 className="text-xs text-center mt-3 mb-4 text-greenxx ">
                Unraveling the World of Textiles
              </h2>
            </div>
            <MemberSuggestion suggestionData={suggestionData} />
          </div>
        </section>
      )}
    </>
  );
};

export default page;
