"use client";
import ProductCategory from "@/components/Products/ProductCategory";
import parentCategory from "../../../../public/assets/data/parentCategory";
// import { productFakeData } from "../../../../public/assets/data/productFakeData";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

// let data = productFakeData;
let parentCategoryData = parentCategory;

const page = ({ params }) => {
  const category = params.slug;
  console.log(category);

  const [data, setData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Define an async function to fetch the data
    async function fetchData() {
      // Swal.showLoading();

      let timerInterval;
      Swal.fire({
        title: "Loading!",
        html: "It will close in <b></b> milliseconds.",
        timer: 4000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
          const b = Swal.getHtmlContainer().querySelector("b");
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft();
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });

      try {
        const response = await axios.get("/api/products");
        setData(response?.data?.product);

        console.log(response?.data?.product);
        // FILTERING PRODUCTS BY MAIN CATEGORY
        let temFilteredProducts = response?.data?.product?.filter(
          (product) => product.parentCategory == category
        );

        setFilteredProducts(temFilteredProducts);
        Swal.close();
      } catch (error) {
        console.error("Error fetching data:", error);
        Swal.close();
      }
    }

    // Call the fetchData function
    fetchData();
  }, []);

  console.log(data);

  // console.log(filteredProducts);

  let matchedTitle = parentCategoryData.find((item) => item?.link == category);

  if (matchedTitle) {
    matchedTitle = matchedTitle?.title;
  } else {
    matchedTitle = "Rich Cotton Ltd Products";
  }

  console.log(matchedTitle);

  return (
    <section className="max-w-[1190px] min-h-screen w-full mx-auto py-12">
      <ProductCategory
        productsData={filteredProducts}
        productsTitle={matchedTitle}
        parentCategory={category}
      />
    </section>
  );
};

export default page;
