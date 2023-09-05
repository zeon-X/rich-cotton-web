import CreateProduct from "@/adminpanel/create/CreateProduct";
import DashboardCreateHeader from "@/adminpanel/shared/DashboardCreateHeader";
import React from "react";

const page = () => {
  return (
    <div>
      <DashboardCreateHeader
        title={"Product"}
        nav={"/rich-cotton-admin-panel/products"}
      />

      <CreateProduct />
    </div>
  );
};

export default page;
