"use client";
import ProductsTable from "@/adminpanel/dashboard/ProductsTable";
import DashboardHeader from "@/adminpanel/shared/DashboardHeader";
import axiosInstance from "@/utilities/axiosInstance";
// import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

const page = () => {
  const [data, setData] = useState([]);
  const [changeValue, handleDataChange] = useState(0);

  useEffect(() => {
    // Define an async function to fetch the data
    async function fetchData() {
      try {
        Swal.showLoading();
        const response = await axiosInstance.get("/product/get");
        console.log(response?.data);
        setData(response?.data);
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
        title={"All Products"}
        nav={"/rich-cotton-admin-panel/create-product"}
        btnName={"Create Product"}
      />

      <ProductsTable
        data={data}
        handleDataChange={handleDataChange}
        changeValue={changeValue}
      />
    </div>
  );
};

export default page;
