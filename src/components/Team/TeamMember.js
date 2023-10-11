"use client";
import Image from "next/image";
import { profileImage } from "../../../public";
import {
  emailSvg,
  fb,
  insta,
  linkedin,
  phoneSvg,
  twitter,
} from "../../../public/assets/svg";
import { useRouter } from "next/navigation";

const TeamMember = ({ x }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`/team/${x?.id}`)}
      className="cursor-pointer bg-white opacity-1 hover:opacity-[0.9] hover:shadow transition-all ease-in-out  lg:min-h-[340px]  md:min-h-[280px] sm:min-h-[240px]  lg:w-[280px] md:w-[220px] sm:w-[190px] p-2 roundedlg border flex flex-col justify-center items-center"
    >
      <Image
        src={x?.image === "" ? profileImage : x?.image}
        height={120}
        width={120}
        alt={x?.name}
        className="rounded-full lg:block md:hidden sm:hidden"
      />
      <Image
        src={x?.image === "" ? profileImage : x?.image}
        height={100}
        width={100}
        alt={x?.name}
        className="rounded-full lg:hidden md:block sm:hidden"
      />
      <Image
        src={x?.image === "" ? profileImage : x?.image}
        height={80}
        width={80}
        alt={x?.name}
        className="rounded-full lg:hidden md:hidden sm:block"
      />
      <h1 className="lg:text-md sm:text-sm text-primary uppercase  font-semibold text-center mt-4">
        {x?.name}
      </h1>

      <h2 className="lg:text-sm sm:text-xs text-center  ">{x?.position}</h2>

      {/* <div className="max-w-[160px] mx-auto flex flex-wrap justify-center items-center lg:gap-2 md:gap-2 sm:gap-1 mt-6"> */}
      <div className="max-w-[160px] mx-auto flex  justify-center items-center lg:gap-2 md:gap-2 sm:gap-1 mt-6">
        <a
          className="rounded-full p-2 border"
          href={x?.social?.fb}
          aria-label="Facebook"
          target="_blank"
        >
          <div className="h-[16px] w-[16px]">{fb}</div>
        </a>
        <a
          className="rounded-full p-2 border"
          href={x?.social?.insta}
          aria-label="Instagram"
          target="_blank"
        >
          <div className="h-[16px] w-[16px]">{insta}</div>
        </a>
        <a
          className="rounded-full p-2 border"
          href={x?.social?.linkedin}
          aria-label="Linked In"
          target="_blank"
        >
          <div className="h-[16px] w-[16px]">{linkedin}</div>
        </a>
        <a
          className="rounded-full p-2 border"
          href={x?.social?.twitter}
          aria-label="Twitter"
          target="_blank"
        >
          <div className="h-[16px] w-[16px]">{twitter}</div>
        </a>
        {/* <a
                      className="rounded-full p-2 border"
                      href={x?.phone}
                      aria-label="Twitter"
                      target="_blank"
                    >
                      <div className="h-[16px] w-[16px]">{phoneSvg}</div>
                    </a>
                    <a
                      className="rounded-full p-2 border"
                      href={x?.email}
                      aria-label="Twitter"
                      target="_blank"
                    >
                      <div className="h-[16px] w-[16px]">{emailSvg}</div>
                    </a> */}
      </div>
    </div>
  );
};

export default TeamMember;
