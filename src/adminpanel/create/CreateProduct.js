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

function CreateProduct() {
  const [formData, setFormData] = useState({
    title: "",
    parentCategory: "",
    productCode: "",
    category: "",
    product: "",
    img: null,
    imagesArray: [],
    fabric: "",
    wash: "",
    price: "",
    deliveryTime: "",
    slug: "",
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

  const handleChangeImageArray = (e) => {
    const { name, value, type, files } = e.target;

    // Handle file input separately
    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files, // Store the first selected file
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
  const handleImageArrayUpload = async () => {
    let API = "f31ce5befe994fec2a0257d5c9b59d4a";
    let imgArrayUrl = [];
    if (formData.imagesArray.length > 0) {
      for (let img of formData.imagesArray) {
        try {
          const formDataImgBB = new FormData();
          formDataImgBB.append("image", img);

          const response = await axios.post(
            `https://api.imgbb.com/1/upload?key=${API}`,
            formDataImgBB
          );

          if (response.status === 200) {
            const imageUrl = response.data.data.url;
            imgArrayUrl.push(imageUrl);
          } else {
            console.error(
              "Error uploading image to ImgBB:",
              response.statusText
            );
            return null;
          }
        } catch (error) {
          console.error("Error uploading image to ImgBB:", error);
          return null;
        }
      }

      return imgArrayUrl;
    } else {
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the formData to your API for product creation here
    // You can use the fetch API or any HTTP library of your choice.
    // Example: fetch('/api/products', { method: 'POST', body: JSON.stringify(formData) })

    // console.log(formData);
    Swal.showLoading();

    const imageUrl = await handleImageUpload();
    const imageArrayUrl = await handleImageArrayUpload();

    // console.log(imageArrayUrl);

    if (imageUrl !== null) {
      try {
        const response = await axiosInstance.post("product", {
          ...formData,
          img: imageUrl, // Use the ImgBB image URL
          productStatus: 1,
          imagesArray: imageArrayUrl !== null ? imageArrayUrl : [],
          // id: new Date().getTime(),
        });

        Swal.close();

        if (response.status === 201) {
          setFormData({
            title: "",
            parentCategory: "",
            productCode: "",
            category: "",
            product: "",
            img: null,
            imagesArray: [],
            fabric: "",
            wash: "",
            price: "",
            deliveryTime: "",
            slug: "",
          });

          alert("Product created successfully");
        } else {
          alert("Product creation failed");
        }
      } catch (error) {
        console.error("Error creating product:", error);
      }
    }
  };
  // console.log(formData);
  return (
    <div className="bg-white p-4 ">
      <form onSubmit={handleSubmit}>
        {/* Add input fields for all your product properties */}
        {/* SLUG */}
        <div className={wrappingDivCss}>
          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="slug">
              slug
            </label>{" "}
            <input
              type="text"
              id="slug"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              className={inputDivCss}
              required={false}
            />
          </div>
        </div>{" "}
        {/* CATEGORY */}
        <div className={wrappingDivCss}>
          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="parentCategory">
              Parent Category
            </label>
            <select
              id="parentCategory"
              name="parentCategory"
              value={formData.parentCategory}
              onChange={handleChange}
              className="border rounded-lg py-2 px-4 w-full"
              required={false}
            >
              <option value="">Select Parent Category</option>

              {parentCategory?.map((x, index) => {
                return <option value={x?.link}>{x?.link}</option>;
              })}
              {/* Add more options as needed */}
            </select>
          </div>
          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="category">
              category
            </label>{" "}
            <input
              type="text"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              className={inputDivCss}
              required={false}
            />
          </div>

          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="productCode">
              Product Code
            </label>{" "}
            <input
              type="text"
              id="productCode"
              name="productCode"
              value={formData.productCode}
              onChange={handleChange}
              className={inputDivCss}
              required={false}
            />
          </div>
        </div>{" "}
        {/* TITLE */}
        <div className={wrappingDivCss}>
          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="title">
              Title
            </label>{" "}
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
            <label className={labelCss} htmlFor="product">
              product
            </label>{" "}
            <input
              type="text"
              id="product"
              name="product"
              value={formData.product}
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
          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="img">
              Image Array
            </label>
            <input
              type="file"
              id="imagesArray"
              name="imagesArray"
              accept="image/*" // Allow only image files
              onChange={handleChangeImageArray}
              className="border rounded-lg py-2 px-4 w-full"
              required={false}
              multiple={true}
            />
          </div>
        </div>{" "}
        {/* DETAILS */}
        <div className={wrappingDivCss}>
          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="fabric">
              fabric
            </label>{" "}
            <input
              type="text"
              id="fabric"
              name="fabric"
              value={formData.fabric}
              onChange={handleChange}
              className={inputDivCss}
              required={false}
            />
          </div>
          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="wash">
              wash
            </label>{" "}
            <input
              type="text"
              id="wash"
              name="wash"
              value={formData.wash}
              onChange={handleChange}
              className={inputDivCss}
              required={false}
            />
          </div>
          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="product">
              price
            </label>{" "}
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className={inputDivCss}
              required={false}
            />
          </div>
          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="deliveryTime">
              deliveryTime
            </label>{" "}
            <input
              type="text"
              id="deliveryTime"
              name="deliveryTime"
              value={formData.deliveryTime}
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
            value={" Create Product"}
          />
        </div>
      </form>
    </div>
  );
}

export default CreateProduct;
