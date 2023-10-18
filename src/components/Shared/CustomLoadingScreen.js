import Image from "next/image";
import React from "react";
import { logo } from "../../../public";

const CustomLoadingScreen = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full max-h-[660px] h-screen">
      <Image src={logo} height={70} width={60} alt="" className="" />
      <h1>Loading...</h1>
    </div>
  );
};

export default CustomLoadingScreen;
