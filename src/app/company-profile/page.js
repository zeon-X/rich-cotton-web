"use client";

import React, { useState, useEffect } from "react";
import axiosInstance from "@/utilities/axiosInstance";

const CompanyProfilePage = () => {
  const [pdfUrl, setPdfUrl] = useState(null);

  // Fetch the latest company profile PDF
  useEffect(() => {
    const fetchPdf = async () => {
      try {
        const response = await axiosInstance.get("/app-basic/pdf"); // API endpoint to fetch PDF URL
        setPdfUrl(response.data.pdf);
      } catch (error) {
        console.error("Error fetching PDF:", error);
      }
    };
    fetchPdf();
  }, []);

  return (
    <section
      id="company-profile"
      className="max-w-[1080px] w-full min-h-[480px] mx-auto py-6 lg:px-6 md:px-4 sm:px-6"
    >
      <div>
        <div className="w-full flex justify-between items-center mb-6">
          <h1 className="lg:text-[24px] md:text-[22px] sm:text-[20px] font-semibold text-primary uppercase">
            Company Profile
          </h1>
          {pdfUrl && (
            <a
              href={pdfUrl}
              target="_blank"
              download
              className="px-8 py-2.5 rounded bg-primary text-white"
            >
              Download
            </a>
          )}
        </div>

        {/* PDF Viewer */}
        <div className="w-full mt-2">
          {pdfUrl ? (
            <iframe
              src={pdfUrl}
              className="w-full min-h-[600px] border"
              title="Company Profile PDF"
            ></iframe>
          ) : (
            <p className="text-gray-500">No PDF available.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CompanyProfilePage;
