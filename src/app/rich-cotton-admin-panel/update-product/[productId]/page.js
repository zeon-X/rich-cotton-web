import DashboardHeader from "@/adminpanel/shared/DashboardHeader";
import UpdateProduct from "@/adminpanel/update/UpdateProduct";
import React from "react";

const page = () => {
  return (
    <div>
      <DashboardHeader
        title={"Product"}
        btnName={"Back"}
        nav={"/rich-cotton-admin-panel/products"}
      />

      <UpdateProduct />
    </div>
  );
};

export default page;
