"use client";
import ProductDetails from "@/components/Products/ProductDetails";
import SimilarProductSuggestion from "@/components/Products/SimilarProductSuggestion";
import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

// const findProductByCodeAndCategory = (products, productCode, parentCategory) =>
//   products.find(
//     (product) =>
//       product.productCode === productCode &&
//       product.parentCategory === parentCategory
//   );

const filterProductsByCategoryAndExclude = (
  products,
  category,
  excludedProductCode
) =>
  products.filter(
    (product) =>
      product.category === category &&
      product.productCode !== excludedProductCode
  );

const page = ({ params }) => {
  const productId = params.product;
  const slug = params.slug;

  const [data, setData] = useState([]);
  //   console.log(productId, slug);
  const [productDetailsData, setProductDetailsData] = useState({});
  const [similarProductsData, setSimilarProductsData] = useState([]);

  useEffect(() => {
    async function fetchProductData() {
      try {
        Swal.showLoading();
        const response = await axios.get(`/api/products/${productId}`);
        setProductDetailsData(response?.data?.product);
        console.log(response?.data?.product);
        Swal.close();
      } catch (error) {
        console.error("Error fetching data:", error);
        Swal.close();
      }
    }

    // Define an async function to fetch the data
    async function fetchAllData() {
      try {
        Swal.showLoading();
        const response = await axios.get("/api/products");
        setData(response?.data?.product);
        Swal.close();
      } catch (error) {
        console.error("Error fetching data:", error);
        Swal.close();
      }
    }

    // Call the fetchData function
    fetchAllData();
    fetchProductData();
  }, []); // The empty dependency array ensures this effect runs only once, similar to componentDidMount

  useEffect(() => {
    const filteredProducts = filterProductsByCategoryAndExclude(
      data,
      productDetailsData?.category,
      productId
    );
    setSimilarProductsData(filteredProducts);
    // console.log(filteredProducts);
  }, [slug, productId, data, productDetailsData]);

  return (
    <section className="max-w-[1190px] w-full mx-auto py-12">
      <ProductDetails productDetails={productDetailsData} />
      <SimilarProductSuggestion similarProductsData={similarProductsData} />
    </section>
  );
};

export default page;
