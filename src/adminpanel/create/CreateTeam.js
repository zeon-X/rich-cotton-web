"use client";

import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import axiosInstance from "@/utilities/axiosInstance";

let inputDivCss = "border rounded-lg py-2 px-4 w-full";
let labelCss = "block uppercase text-gray-700 text-xs font-bold mb-2";
let outerDivCss = "mb-4 w-[280px] ";
let wrappingDivCss = "flex flex-wrap gap-4 justify-even mt-4";

function CreateTeam() {
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
    if (formData.image) {
      try {
        const formDataImgBB = new FormData();
        formDataImgBB.append("image", formData.image);

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
    // Send the formData to your API for team creation here
    // You can use the fetch API or any HTTP library of your choice.
    // Example: fetch('/api/teams', { method: 'POST', body: JSON.stringify(formData) })

    console.log(formData);
    Swal.showLoading();

    const imageUrl = await handleImageUpload();

    if (imageUrl !== null) {
      let temp = {
        name: formData.name,
        position: formData.position,
        phone: formData.phone,
        email: formData.email,
        details: formData.details,
        priority: formData.priority,
        social: {
          fb: formData.fb,
          insta: formData.insta,
          linkedin: formData.linkedin,
          twitter: formData.twitter,
        },
      };
      console.log(temp);
      try {
        const response = await axiosInstance.post("team", {
          ...temp,
          image: imageUrl, // Use the ImgBB image URL
          status: true,
        });

        Swal.close();

        if (response.status === 201) {
          setFormData({
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

          alert("Team created successfully");
        } else {
          alert("Team creation failed");
        }
      } catch (error) {
        console.error("Error creating team:", error);
      }
    }
  };

  return (
    <div className="bg-white p-4 ">
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
            value={" Create Member"}
          />
        </div>
      </form>
    </div>
  );
}

export default CreateTeam;
