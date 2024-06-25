import CreateTeam from "@/adminpanel/create/CreateTeam";
import DashboardCreateHeader from "@/adminpanel/shared/DashboardCreateHeader";
import React from "react";

const page = () => {
  return (
    <div>
      <DashboardCreateHeader
        title={"Team Member"}
        nav={"/rich-cotton-admin-panel/team"}
      />

      <CreateTeam />
    </div>
  );
};

export default page;
