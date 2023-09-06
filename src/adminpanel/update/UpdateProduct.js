"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import parentCategory from "../../../public/assets/data/parentCategory";

let inputDivCss = "border rounded-lg py-2 px-4 w-full";
let labelCss = "block uppercase text-gray-700 text-xs font-bold mb-2";
let outerDivCss = "mb-4 w-[280px] ";
let wrappingDivCss = "flex flex-wrap gap-4 justify-even mt-4";

const UpdateProduct = () => {
  let data = JSON.parse(localStorage.getItem("updateProductData"));
  // Set the initial form data with the retrieved data, using optional chaining
  const [formData, setFormData] = useState({
    title: data?.title || "",
    parentCategory: data?.parentCategory || "",
    productCode: data?.productCode || "",
    category: data?.category || "",
    product: data?.product || "",
    img: data?.img || null,
    fabric: data?.fabric || "",
    wash: data?.wash || "",
    price: data?.price || "",
    deliveryTime: data?.deliveryTime || "",
    slug: data?.slug || "",
  });

  useEffect(() => {
    setFormData({
      title: data?.title || "",
      parentCategory: data?.parentCategory || "",
      productCode: data?.productCode || "",
      category: data?.category || "",
      product: data?.product || "",
      img: data?.img || null,
      fabric: data?.fabric || "",
      wash: data?.wash || "",
      price: data?.price || "",
      deliveryTime: data?.deliveryTime || "",
      slug: data?.slug || "",
    });
  }, [data]);

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

  const handleChange = async (e) => {
    const { name, value, type, files } = e.target;

    // Handle file input separately
    if (type === "file") {
      const imageUrl = await handleImageUpload();
      setFormData({
        ...formData,
        [name]: imageUrl, // Store the first selected file
      });
    } else {
      setFormData({
        ...formData,
        [name]: value, // Escape single quotes in the value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the formData to your API for product creation here
    // You can use the fetch API or any HTTP library of your choice.
    // Example: fetch('/api/products', { method: 'POST', body: JSON.stringify(formData) })

    // console.log(formData);
    Swal.showLoading();

    // const imageUrl = await handleImageUpload();

    // if (imageUrl !== null) {
    try {
      const response = await axios.post(
        `/api/products/${formData?.id}`,
        {
          ...formData,
          // img: imageUrl, // Use the ImgBB image URL
          // productStatus: 1,
          // id: new Date().getTime(),
        },
        {
          headers: {
            "Content-Type": "application/json", // Ensure it's set to JSON
          },
        }
      );

      Swal.close();

      if (response.status === 201) {
        setFormData({
          title: "",
          parentCategory: "",
          productCode: "",
          category: "",
          product: "",
          img: null,
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
    // }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        {/* Add input fields for all your product properties */}
        {/* SLUG */}
        <div className={wrappingDivCss}>
          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="slug">
              slug
            </label>{" "}
            <br />
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
                return <option value={x?.title}>{x?.title}</option>;
              })}
              {/* Add more options as needed */}
            </select>
          </div>
          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="category">
              category
            </label>{" "}
            <br />
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
            <br />
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
            <br />
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
            <br />
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
        </div>{" "}
        {/* DETAILS */}
        <div className={wrappingDivCss}>
          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="fabric">
              fabric
            </label>{" "}
            <br />
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
            <br />
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
            <br />
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
            <br />
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
            value={" Update Product"}
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateProduct;
