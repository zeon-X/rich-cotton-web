"use client";
import ClientsTable from "@/adminpanel/dashboard/ClientsTable";
import DashboardHeader from "@/adminpanel/shared/DashboardHeader";
// import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { clientData } from "../../../../public/assets/data/clientData";
import axiosInstance from "@/utilities/axiosInstance";

const page = () => {
  const [data, setData] = useState([]);
  const [changeValue, handleDataChange] = useState(0);

  useEffect(() => {
    // Define an async function to fetch the data
    async function fetchData() {
      try {
        Swal.showLoading();

        const response = await axiosInstance.get("/client/get");

        response?.data?.length !== 0
          ? setData([...response?.data, ...clientData])
          : setData([...clientData]);

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
        title={"All Clients"}
        nav={"/rich-cotton-admin-panel/create-client"}
        btnName={"Create Client"}
      />

      <ClientsTable
        data={data}
        handleDataChange={handleDataChange}
        changeValue={changeValue}
      />
    </div>
  );
};

export default page;
