"use client";

import { useRouter } from "next/navigation";
import React from "react";

const DashboardHeader = ({ title, nav, btnName }) => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center">
      <p className="text-2xl font-semibold">{title ? title : "title"}</p>

      {btnName != "" && (
        <button
          onClick={() => {
            router.push(`${nav ? "" + nav : "/rich-cotton-admin-panel"}`);
            // localStorage.removeItem("updateCampign");
          }}
          type=""
          className="bg-secondary btn hover:bg-warning hover:scale-95 transition-all ease-in-out px-6 py-4 text-[16px] "
        >
          {btnName}
        </button>
      )}
    </div>
  );
};

export default DashboardHeader;
