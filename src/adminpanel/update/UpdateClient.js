"use client";
import axiosInstance from "@/utilities/axiosInstance";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

let inputDivCss = "border rounded-lg py-2 px-4 w-full";
let labelCss = "block uppercase text-gray-700 text-xs font-bold mb-2";
let outerDivCss = "mb-4 w-[280px] ";
let wrappingDivCss = "flex flex-wrap gap-4 justify-even mt-4";

const UpdateClient = () => {
  const [changes, setChanges] = useState(0);

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    img: "",
  });

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("updateClientData"));

    setFormData({
      _id: data?._id || "",
      title: data?.title || "",
      img: data?.img || null,
    });
  }, [changes]);

  const handleImageUpload = async (reqImage) => {
    let API = "f31ce5befe994fec2a0257d5c9b59d4a";

    if (reqImage) {
      try {
        const formDataImgBB = new FormData();
        formDataImgBB.append("image", reqImage);

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

  const handleChange = async (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      const imageUrl = await handleImageUpload(files[0]);
      setFormData({
        ...formData,
        [name]: imageUrl,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    Swal.showLoading();

    try {
      const response = await axiosInstance.post(
        `client/update/${formData?._id}`,
        {
          ...formData,
        }
      );

      Swal.close();

      if (response.status === 200) {
        localStorage.setItem(
          "updateClientData",
          JSON.stringify(response?.data || null)
        );
        setChanges((current) => current + 1);
        alert("Client Updated successfully");
      } else {
        alert("Client update failed");
      }
    } catch (error) {
      console.error("Error updating client:", error);
    }
  };

  return (
    <div className="bg-white p-4  ">
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className={wrappingDivCss}>
          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="title">
              Title
            </label>
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
        </div>

        {/* Image */}
        <div className={wrappingDivCss}>
          <div className={outerDivCss}>
            <div>
              {formData.img && (
                <img src={formData.img} height={200} width={200} alt="" />
              )}
            </div>
            <label className={labelCss} htmlFor="img">
              Image
            </label>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*"
              onChange={handleChange}
              className="border rounded-lg py-2 px-4 w-full"
              required={false}
            />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className={outerDivCss}>
          <input
            type="submit"
            className="btn w-full text-black font-bold mt-8 py-2 px-4 rounded-none"
            value="Update Client"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateClient;
