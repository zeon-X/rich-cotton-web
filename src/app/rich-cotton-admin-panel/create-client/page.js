import CreateClient from "@/adminpanel/create/CreateClient";
import DashboardCreateHeader from "@/adminpanel/shared/DashboardCreateHeader";
import React from "react";

const page = () => {
  return (
    <div>
      <DashboardCreateHeader
        title={"Client"}
        nav={"/rich-cotton-admin-panel/clients"}
      />

      <CreateClient />
    </div>
  );
};

export default page;
