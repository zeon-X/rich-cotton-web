"use client";
import axiosInstance from "@/utilities/axiosInstance";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Image from "next/image";
import { useRouter } from "next/navigation";

let inputDivCss = "border rounded-lg py-2 px-4 w-full";
let labelCss = "block uppercase text-gray-700 text-xs font-bold mb-2";
let outerDivCss = "mb-4 w-[280px] ";
let wrappingDivCss = "flex flex-wrap gap-4 justify-even mt-4";

const UpdateClient = () => {
  const [changes, setChanges] = useState(0);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    position: "",
    phone: "",
    email: "",
    details: "",
    fb: "",
    insta: "",
    linkedin: "",
    twitter: "",
    image: null,
    priority: 9999,
  });

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("updateTeamData"));

    setFormData({
      _id: data?._id || "",
      name: data?.name || "",
      position: data?.position || "",
      phone: data?.phone || "",
      email: data?.email || "",
      details: data?.details || "",
      fb: data?.fb || "",
      insta: data?.insta || "",
      linkedin: data?.linkedin || "",
      twitter: data?.twitter || "",
      image: data?.image || null,
      priority: data?.priority || 9999,
    });
  }, [changes]);

  const handleImageUpload = async (reqImage) => {
    let API = "f31ce5befe994fec2a0257d5c9b59d4a";

    if (reqImage) {
      try {
        Swal.showLoading();
        const formDataImgBB = new FormData();
        formDataImgBB.append("image", reqImage);

        const response = await axios.post(
          `https://api.imgbb.com/1/upload?key=${API}`,
          formDataImgBB
        );

        if (response.status === 200) {
          const imageUrl = response.data.data.url;
          Swal.close();
          return imageUrl;
        } else {
          console.error("Error uploading image to ImgBB:", response.statusText);
          Swal.close();
          return null;
        }
      } catch (error) {
        console.error("Error uploading image to ImgBB:", error);
        Swal.close();
        return null;
      }
    } else {
      return null;
    }
  };

  const handleChange = async (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      await handleImageUpload(files[0]).then((imageUrl) => {
        console.log("img: ", imageUrl);
        setFormData({
          ...formData,
          [name]: imageUrl === null ? "" : imageUrl,
        });
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
        `team/update/${formData?._id}`,
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
        // alert("Team Updated successfully");
        Swal.fire({ text: "Team Updated successfully", icon: "success" }).then(
          () => router.push("/rich-cotton-admin-panel/team")
        );
      } else {
        alert("Team update failed");
      }
    } catch (error) {
      console.error("Error updating team:", error);
    }
  };

  return (
    <div className="bg-white p-4  ">
      <form onSubmit={handleSubmit}>
        {/* Add input fields for all your team properties */}
        {/* BASIC */}
        <div className={wrappingDivCss}>
          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={inputDivCss}
              required={false}
            />
          </div>

          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="position">
              Position
            </label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleChange}
              className={inputDivCss}
              required={false}
            />
          </div>

          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="phone">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={inputDivCss}
              required={false}
            />
          </div>

          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputDivCss}
              required={false}
            />
          </div>
          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="priority">
              Priority
            </label>
            <input
              type="number"
              id="priority"
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              className={inputDivCss}
              required={false}
            />
          </div>

          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="details">
              Details
            </label>
            <textarea
              type="text"
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              className={inputDivCss}
              required={false}
            />
          </div>

          <div className={outerDivCss}>
            <div>
              <Image
                src={formData?.image || ""}
                height={200}
                width={200}
                alt=""
              />
            </div>
            <label className={labelCss} htmlFor="image">
              Image
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*" // Allow only image files
              onChange={handleChange}
              className="border rounded-lg py-2 px-4 w-full"
              required={false}
            />
          </div>
        </div>
        <div className={wrappingDivCss}>
          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="fb">
              Facebook
            </label>
            <input
              type="text"
              id="fb"
              name="fb"
              value={formData.fb}
              onChange={handleChange}
              className={inputDivCss}
              required={false}
            />
          </div>
          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="insta">
              Instagram
            </label>
            <input
              type="text"
              id="insta"
              name="insta"
              value={formData.insta}
              onChange={handleChange}
              className={inputDivCss}
              required={false}
            />
          </div>
          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="linkedin">
              LinkedIn
            </label>
            <input
              type="text"
              id="linkedin"
              name="linkedin"
              value={formData.linkedin}
              onChange={handleChange}
              className={inputDivCss}
              required={false}
            />
          </div>
          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="twitter">
              Twitter
            </label>
            <input
              type="text"
              id="twitter"
              name="twitter"
              value={formData.twitter}
              onChange={handleChange}
              className={inputDivCss}
              required={false}
            />
          </div>
        </div>

        {/* SUBMIT BUTTON */}
        <div className={outerDivCss}>
          <input
            type="submit"
            className="btn w-full text-black font-bold mt-8 py-2 px-4 rounded-none"
            value={" Update Member"}
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateClient;
