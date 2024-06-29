"use client";
import ProductDetails from "@/components/Products/ProductDetails";
import SimilarProductSuggestion from "@/components/Products/SimilarProductSuggestion";
import CustomLoadingScreen from "@/components/Shared/CustomLoadingScreen";
import axiosInstance from "@/utilities/axiosInstance";
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
) => {
  // console.log(products, category, excludedProductCode);
  return products?.filter(
    (product) =>
      product.category === category && product.slug !== excludedProductCode
  );
};

const page = ({ params }) => {
  const productId = params.product;
  const slug = params.slug;

  const [data, setData] = useState([]);
  console.log(slug, productId);
  const [productDetailsData, setProductDetailsData] = useState(null);
  const [similarProductsData, setSimilarProductsData] = useState(null);

  useEffect(() => {
    async function fetchProductData() {
      try {
        // Swal.showLoading();
        const response = await axiosInstance.get(
          `/product/findByProductSlug/${productId}`
        );

        // const response = await axiosInstance.get(
        //   `/product/findByProductId/${productId}`
        // );

        // console.log(response);
        setProductDetailsData(response?.data);
        // console.log(response);
        // Swal.close();
      } catch (error) {
        console.error("Error fetching data:", error);
        // Swal.close();
      }
    }

    // Define an async function to fetch the data
    async function fetchAllData() {
      try {
        // Swal.showLoading();
        const response = await axiosInstance.get(
          `/product/findByCategory/${slug}`
        );
        console.log(response?.data);
        setData(response?.data);
        // Swal.close();
      } catch (error) {
        setData([]);
        console.error("Error fetching data:", error);
        // Swal.close();
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

  // console.log(similarProductsData);
  // console.log(productDetailsData);

  return (
    <section className="max-w-[1190px] w-full mx-auto py-12">
      {productDetailsData === null && similarProductsData === null ? (
        <CustomLoadingScreen />
      ) : (
        <>
          <ProductDetails productDetails={productDetailsData} />
          {similarProductsData === null ? (
            <></>
          ) : (
            <SimilarProductSuggestion
              similarProductsData={similarProductsData}
            />
          )}
        </>
      )}
    </section>
  );
};

export default page;
