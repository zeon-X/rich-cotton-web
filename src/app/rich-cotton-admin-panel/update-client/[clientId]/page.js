import DashboardHeader from "@/adminpanel/shared/DashboardHeader";
import UpdateClient from "@/adminpanel/update/UpdateClient";
import React from "react";

const page = () => {
  return (
    <div>
      <DashboardHeader
        title={"Update Product"}
        btnName={"Back"}
        nav={"/rich-cotton-admin-panel/products"}
      />

      <UpdateClient />
    </div>
  );
};

export default page;
