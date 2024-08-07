"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import parentCategory from "../../../public/assets/data/parentCategory";
import Image from "next/image";
import axiosInstance from "@/utilities/axiosInstance";
import { useRouter } from "next/navigation";

let inputDivCss = "border rounded-lg py-2 px-4 w-full";
let labelCss = "block uppercase text-gray-700 text-xs font-bold mb-2";
let outerDivCss = "mb-4 w-[280px] ";
let wrappingDivCss = "flex flex-wrap gap-4 justify-even mt-4";

const UpdateProduct = () => {
  const [changes, setChanges] = useState(0);
  const router = useRouter();
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    parentCategory: "",
    productCode: "",
    category: "",
    product: "",
    img: "",
    imagesArray: [],
    fabric: "",
    wash: "",
    price: "",
    deliveryTime: "",
    slug: "",
  });

  // const [imagesArray, setImagesArray] = useState([]);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("updateProductData"));

    setFormData({
      _id: data?._id || "",
      title: data?.title || "",
      parentCategory: data?.parentCategory || "",
      productCode: data?.productCode || "",
      category: data?.category || "",
      product: data?.product || "",
      img: data?.img || null,
      imagesArray: data?.imagesArray || [],
      fabric: data?.fabric || "",
      wash: data?.wash || "",
      price: data?.price || "",
      deliveryTime: data?.deliveryTime || "",
      slug: data?.slug || "",
    });

    // setImagesArray(data?.imagesArray || []);
  }, [changes]);

  // console.log("Form Data", formData);

  const handleImageUpload = async (reqImage) => {
    let API = "f31ce5befe994fec2a0257d5c9b59d4a";
    console.log("Req Image:");

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
  const handleImageArrayUpload = async (reqImageArray) => {
    let API = "f31ce5befe994fec2a0257d5c9b59d4a";
    let imgArrayUrl = [];
    if (reqImageArray.length > 0) {
      Swal.showLoading();
      for (let img of reqImageArray) {
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
            Swal.close();
            return null;
          }
        } catch (error) {
          console.error("Error uploading image to ImgBB:", error);
          Swal.close();
          return null;
        }
      }
      Swal.close();
      return imgArrayUrl;
    } else {
      Swal.close();
      return null;
    }
  };

  const handleChange = async (e) => {
    const { name, value, type, files } = e.target;
    // console.log(files[0]);

    // Handle file input separately
    if (type === "file") {
      // Swal.showLoading();
      await handleImageUpload(files[0]).then((imageUrl) => {
        setFormData({
          ...formData,
          [name]: imageUrl, // Store the first selected file
        });
      });
      //   .then(() =>
      //   Swal.close()
      // );
    } else {
      setFormData({
        ...formData,
        [name]: value, // Escape single quotes in the value
      });
    }
  };
  const handleChangeImageArray = async (e) => {
    const { name, value, type, files } = e.target;
    // Swal.showLoading();
    await handleImageArrayUpload(files).then((imageArrayUrl) => {
      setFormData({
        ...formData,
        [name]: imageArrayUrl, // Store the first selected file
      });
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send the formData to your API for product creation here
    // You can use the fetch API or any HTTP library of your choice.
    // Example: fetch('/api/products', { method: 'POST', body: JSON.stringify(formData) })

    // console.log(formData);
    Swal.showLoading();

    // const imageUrl = await handleImageUpload();

    // const imageArrayUrl = await handleImageArrayUpload();

    // console.log(imageUrl, imageArrayUrl);

    // if (imageUrl !== null) {
    try {
      const response = await axiosInstance.post(
        `product/update/${formData?._id}`,
        {
          ...formData,
          // img: imageUrl, // Use the ImgBB image URL
          // productStatus: 1,
          // id: new Date().getTime(),
        }
      );

      Swal.close();

      if (response.status === 200) {
        console.log(response?.data);
        localStorage.setItem(
          "updateProductData",
          JSON.stringify(response?.data || null)
        );
        setChanges((current) => current + 1);
        // alert("Product Updated successfully");
        Swal.fire({
          text: "Product Updated successfully",
          icon: "success",
        }).then(() => router.push("/rich-cotton-admin-panel/products"));
      } else {
        alert("Product update failed");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
    // }
  };

  return (
    <div className="bg-white p-4  ">
      <form onSubmit={handleSubmit}>
        {/* Add input fields for all your product properties */}
        {/* SLUG */}
        <div className={wrappingDivCss}>
          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="slug">
              slug
            </label>{" "}
            {/* <br /> */}
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
              {/* <option value="">Select Parent Category</option> */}

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
            {/* <br /> */}
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
            {/* <br /> */}
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
            <label className={labelCss} htmlFor="product">
              product
            </label>{" "}
            {/* <br /> */}
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
        </div>
        <div className={wrappingDivCss}>
          <div className={outerDivCss}>
            <div>
              <Image src={formData?.img} height={200} width={200} alt="" />
            </div>
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
        </div>
        <div className={"flex flex-wrap gap-4 justify-even mt-4 bg-red-500"}>
          <div className={"mb-4   "}>
            <div className="flex flex-wrap gap-4 mb-4">
              {formData?.imagesArray?.map((x, ind) => {
                return (
                  <Image
                    key={ind}
                    src={x || ""}
                    height={200}
                    width={200}
                    alt=""
                  />
                );
              })}
            </div>

            <label
              className={"block uppercase text-red-700 text-xs font-bold mb-2 "}
              htmlFor="imagesArray"
            >
              Update the whole Image Array (Select all the images with the
              updated ones)
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
        </div>
        {/* <div className={wrappingDivCss}>
          {imagesArray?.map((x, index) => {
            return (
              <div className={outerDivCss}>
                <div>
                  <Image src={x} height={200} width={200} alt="" />
                </div>
                <label className={labelCss} htmlFor="img">
                  Image Array No {index + 1}
                </label>
                <input
                  type="file"
                  id="imagesArray"
                  name="imagesArray"
                  accept="image/*" // Allow only image files
                  onChange={handleChange}
                  className="border rounded-lg py-2 px-4 w-full"
                  required={false}
                />
                <p
                  className="w-full btn btn-warning mt-2 cursor-pointer"
                  onClick={() =>
                    setImagesArray((prevState) =>
                      prevState.filter((_, ind) => ind !== index)
                    )
                  }
                >
                  REMOVE
                </p>
              </div>
            );
          })}
        </div> */}
        {/* DETAILS */}
        <div className={wrappingDivCss}>
          <div className={outerDivCss}>
            <label className={labelCss} htmlFor="fabric">
              fabric
            </label>{" "}
            {/* <br /> */}
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
            {/* <br /> */}
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
            {/* <br /> */}
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
            {/* <br /> */}
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
