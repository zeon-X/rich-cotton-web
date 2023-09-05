"use client";

import { useRouter } from "next/navigation";
import React from "react";

const DashboardCreateHeader = ({ title, nav }) => {
  const router = useRouter();
  return (
    <div className="flex justify-between items-center">
      <p className="text-2xl font-semibold  ">
        Add New {title ? title : "title"}
      </p>
      <button
        onClick={() =>
          router.push(`${nav ? "" + nav : "/rich-cotton-admin-panel"}`)
        }
        type=""
        className="text-[16px] btn flex gap-2 justify-center items-center "
      >
        Cancel
      </button>
    </div>
  );
};

export default DashboardCreateHeader;
