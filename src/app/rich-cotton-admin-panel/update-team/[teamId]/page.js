import DashboardHeader from "@/adminpanel/shared/DashboardHeader";
import UpdateTeam from "@/adminpanel/update/UpdateTeam";
import React from "react";

const page = () => {
  return (
    <div>
      <DashboardHeader
        title={"Update Member"}
        btnName={"Back"}
        nav={"/rich-cotton-admin-panel/team"}
      />

      <UpdateTeam />
    </div>
  );
};

export default page;
