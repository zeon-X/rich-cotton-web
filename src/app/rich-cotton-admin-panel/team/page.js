"use client";
import TeamsTable from "@/adminpanel/dashboard/TeamsTable";
import DashboardHeader from "@/adminpanel/shared/DashboardHeader";
// import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
// import { teamData } from "../../../../public/assets/data/teamData";
import axiosInstance from "@/utilities/axiosInstance";

const page = () => {
  const [data, setData] = useState([]);
  const [changeValue, handleDataChange] = useState(0);

  useEffect(() => {
    // Define an async function to fetch the data
    async function fetchData() {
      try {
        Swal.showLoading();

        const response = await axiosInstance.get("/team/get");

        // response?.data?.length !== 0
        //   ? setData([...response?.data, ...teamData])
        //   :setData([...teamData]);
        setData([...response?.data]);

        console.log(response?.data);
        Swal.close();
      } catch (error) {
        console.error("Error fetching data:", error);
        Swal.close();
      }
    }

    // Call the fetchData function
    fetchData();
  }, [changeValue]); // The empty dependency array ensures this effect runs only once, similar to componentDidMount

  // console.log(data);
  return (
    <div>
      <DashboardHeader
        title={"All Team Members"}
        nav={"/rich-cotton-admin-panel/create-team"}
        btnName={"Create Member"}
      />

      <TeamsTable
        data={data}
        handleDataChange={handleDataChange}
        changeValue={changeValue}
      />
    </div>
  );
};

export default page;
