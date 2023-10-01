"use client";

import React, { useState } from "react";
import parentCategory from "../../../public/assets/data/parentCategory";
import axios from "axios";
import Swal from "sweetalert2";
import axiosInstance from "@/utilities/axiosInstance";

let inputDivCss = "border rounded-lg py-2 px-4 w-full";
let labelCss = "block uppercase text-gray-700 text-xs font-bold mb-2";
let outerDivCss = "mb-4 w-[280px] ";
let wrappingDivCss = "flex flex-wrap gap-4 justify-even mt-4";

function CreateClient() {
  const [formData, setFormData] = useState({
    title: "",
    img: null,
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // Handle file input separately
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files[0], // Store the first selected file
      });
    } else {
      setFormData({
        ...formData,
        [name]: value, // Escape single quotes in the value
      });
    }
  };

  const handleImageUpload = async () => {
    let API = "f31ce5befe994fec2a0257d5c9b59d4a";
    if (formData.img) {
      try {
        const formDataImgBB = new FormData();
        formDataImgBB.append("image", formData.img);

        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${API}`,
          formDataImgBB
        );

        if (response.status === 200) {
          const imageUrl = response.data.data.url;
          return imageUrl;
        } else {
          console.error("Error uploading image to ImgBB:", response.statusText);
          return null;
        }
      } catch (error) {
        console.error("Error uploading image to ImgBB:", error);
        return null;
      }
    } else {
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the formData to your API for client creation here
    // You can use the fetch API or any HTTP library of your choice.
    // Example: fetch('/api/clients', { method: 'POST', body: JSON.stringify(formData) })

    // console.log(formData);
    Swal.showLoading();

    const imageUrl = await handleImageUpload();

    if (imageUrl !== null) {
      try {
        const response = await axiosInstance.post("client", {
          ...formData,
          img: imageUrl, // Use the ImgBB image URL
          clientStatus: 1,
          // id: new Date().getTime().toString(),
        });

        Swal.close();

        if (response.status === 201) {
          setFormData({
            title: "",
            img: null,
          });

          alert("Client created successfully");
        } else {
          alert("Client creation failed");
        }
      } catch (error) {
        console.error("Error creating client:", error);
      }
    }
  };

  return (
    <div className="bg-white p-4 ">
      <form onSubmit={handleSubmit}>
        {/* Add input fields for all your client properties */}
        {/* BASIC */}
        <div className={wrappingDivCss}>
          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="title">
              Title
            </label>{" "}
            {/* <br /> */}
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className={inputDivCss}
              required={false}
            />
          </div>

          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="img">
              Image
            </label>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*" // Allow only image files
              onChange={handleChange}
              className="border rounded-lg py-2 px-4 w-full"
              required={false}
            />
          </div>
        </div>{" "}
        {/* SUBMIT BUTTON */}
        <div className={outerDivCss}>
          <input
            type="submit"
            className="btn w-full text-black font-bold mt-8 py-2 px-4 rounded-none"
            value={" Create Client"}
          />
        </div>
      </form>
    </div>
  );
}

export default CreateClient;
