"use client";
import DashboardHeader from "@/adminpanel/shared/DashboardHeader";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axiosInstance from "@/utilities/axiosInstance";

const SettingsPageAdmin = () => {
  return (
    <div>
      <DashboardHeader title="Settings" />
      <SettingsPage />
    </div>
  );
};

export default SettingsPageAdmin;

const SettingsPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [pdfUrl, setPdfUrl] = useState(null);

  // Fetch the latest uploaded PDF
  useEffect(() => {
    fetchPdf();
  }, []);

  const fetchPdf = async () => {
    try {
      const response = await axiosInstance.get("/app-basic/pdf"); // Endpoint for single file
      setPdfUrl(response.data.pdf);
    } catch (error) {
      console.error("Error fetching PDF:", error);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      Swal.fire("No file selected", "Please choose a PDF file", "warning");
      return;
    }

    const formData = new FormData();
    formData.append("pdf", selectedFile);

    try {
      Swal.fire({
        title: "Uploading...",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });

      await axiosInstance.post("/app-basic/upload-single-pdf", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      Swal.fire("Success", "PDF uploaded successfully!", "success");
      setSelectedFile(null);
      fetchPdf(); // Refresh the latest PDF
    } catch (error) {
      console.error("Upload failed:", error);
      Swal.fire("Error", "Failed to upload PDF", "error");
    }
  };

  return (
    <div className="mt-6 p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Upload & Manage PDF</h2>

      {/* PDF Upload Section */}
      <div className="mb-6">
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
        />
        <button
          onClick={handleUpload}
          className="ml-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Update PDF
        </button>
      </div>

      {/* PDF Display Section */}
      {pdfUrl ? (
        <div className="mt-4">
          <h3 className="text-md font-semibold">Latest Uploaded PDF</h3>
          <iframe
            src={pdfUrl}
            className="w-full min-h-[600px] border"
            title="Company Profile PDF"
          ></iframe>
          {/* <a href={pdfUrl} download className="ml-4 text-green-500">
            Download PDF
          </a> */}
        </div>
      ) : (
        <p className="text-gray-500">No PDF uploaded yet.</p>
      )}
    </div>
  );
};
