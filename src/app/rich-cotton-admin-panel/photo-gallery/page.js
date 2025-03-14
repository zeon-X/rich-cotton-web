"use client";
import DashboardHeader from "@/adminpanel/shared/DashboardHeader";
import React, { useEffect, useRef, useState } from "react";
import Swal from "sweetalert2";
import axiosInstance from "@/utilities/axiosInstance";
import axios from "axios";

const PhotoGalleryAdmin = () => {
  const [photoGallery, setPhotoGallery] = useState([]); // Holds gallery images
  const [appBasicId, setAppBasicId] = useState(null); // Holds AppBasic document ID
  const [selectedFiles, setSelectedFiles] = useState(null); // Stores selected images
  const [caption, setCaption] = useState(""); // Stores selected images
  const fileInputRef = useRef(null); // Reference to file input

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      Swal.showLoading();
      const response = await axiosInstance.get("/app-basic/get");
      if (response?.data?.length > 0) {
        setPhotoGallery(response.data[0].photoGallery || []);
        setAppBasicId(response.data[0]._id);
      }
      Swal.close();
    } catch (error) {
      console.error("Error fetching data:", error);
      Swal.close();
    }
  };

  const handleFileChange = (e) => {
    setSelectedFiles(e.target.files[0]);
  };
  const handleCaption = (e) => {
    setCaption(e.target.value);
  };

  const handleImageUpload = async () => {
    if (selectedFiles === null) {
      Swal.fire(
        "No Image Selected",
        "Please select images to upload",
        "warning"
      );
      return;
    }

    Swal.showLoading();
    let uploadedImageUrls = [];

    try {
      const formData = new FormData();
      formData.append("image", selectedFiles);

      const response = await axios.post(
        `https://api.imgbb.com/1/upload?key=f31ce5befe994fec2a0257d5c9b59d4a`,
        formData
      );

      if (response.status === 200) {
        uploadedImageUrls.push({
          url: response.data.data.url,
          caption: caption,
        });
      }

      const updatedGallery = [...photoGallery, ...uploadedImageUrls];
      // console.log(updatedGallery);

      await updateGallery(updatedGallery);

      setSelectedFiles([]); // Clear selected files
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Clear input field
        setCaption((prev) => "");
      }

      Swal.fire("Success", "Images uploaded successfully", "success");
    } catch (error) {
      console.error("Error uploading images:", error);
      Swal.fire("Error", "Failed to upload images", "error");
    } finally {
      Swal.close();
    }
  };

  const updateGallery = async (updatedGallery) => {
    if (!appBasicId) {
      Swal.fire("Error", "Gallery ID not found", "error");
      return;
    }

    try {
      await axiosInstance.post(`/app-basic/update/${appBasicId}`, {
        photoGallery: updatedGallery,
      });
      setPhotoGallery(updatedGallery); // Update UI
    } catch (error) {
      console.error("Error updating gallery:", error);
      Swal.fire("Error", "Could not update gallery", "error");
    }
  };

  const handleRemoveImage = async (imageUrl) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this image?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it",
    });

    if (confirm.isConfirmed) {
      const updatedGallery = photoGallery.filter((img) => img !== imageUrl);
      await updateGallery(updatedGallery);
      Swal.fire("Deleted!", "The image has been removed.", "success");
    }
  };

  return (
    <div>
      <DashboardHeader title="Photo Gallery" />
      <PhotoGallery
        photoGallery={photoGallery}
        handleFileChange={handleFileChange}
        handleImageUpload={handleImageUpload}
        caption={caption}
        handleCaption={handleCaption}
        handleRemoveImage={handleRemoveImage}
        fileInputRef={fileInputRef}
      />
    </div>
  );
};

export default PhotoGalleryAdmin;

const PhotoGallery = ({
  photoGallery,
  handleFileChange,
  caption,
  handleCaption,
  handleImageUpload,
  handleRemoveImage,
  fileInputRef,
}) => {
  return (
    <div className="mt-6">
      <div className="mb-12">
        <p className="underline">Image Upload </p>
        <div className="flex flex-col gap-4 items-start mb-4">
          <input
            ref={fileInputRef}
            type="file"
            multiple={false}
            onChange={handleFileChange}
          />

          <textarea
            cols="30"
            rows="10"
            className="border p-4"
            onChange={handleCaption}
            value={caption}
            placeholder="Write a Caption"
          />
        </div>

        <button
          onClick={handleImageUpload}
          className="bg-blue-500 text-white p-2 rounded-md mt-2"
        >
          Upload
        </button>
      </div>

      <p className="underline">Display Image</p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        {photoGallery.map((img, index) => (
          <div key={index} className="relative">
            <div>
              <img
                src={img?.url}
                alt="Gallery"
                className="w-full h-auto rounded-md"
              />
              <p className="mt-2 text-[12px]">Caption: {img?.caption}</p>
            </div>

            <button
              className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded-full"
              onClick={() => handleRemoveImage(img)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
