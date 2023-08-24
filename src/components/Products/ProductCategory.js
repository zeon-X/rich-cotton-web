"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ProductCategory = ({ productsData, productsTitle, parentCategory }) => {
  const router = useRouter();

  const categories = productsData.map((product) => product.category);
  const uniqueCategories = [...new Set(categories)];

  const [selectedCategory, setSelectedCategory] = useState("");
  const [displayProducts, setDisplayProducts] = useState(productsData);

  const handleCatSelection = (cat) => {
    setSelectedCategory(cat);
  };

  useEffect(() => {
    if (productsData) {
      if (selectedCategory !== "") {
        let filteredProducts = productsData.filter(
          (product) => product.category === selectedCategory
        );
        setDisplayProducts(filteredProducts);
      } else setDisplayProducts(productsData);
    }
  }, [selectedCategory, productsData]);

  return (
    <div className="lg:px-6 md:px-4 sm:px-3 py-6">
      {/* TITLE */}
      <h1 className="text-3xl text-center mx-auto my-4 uppercase">
        {productsTitle ? productsTitle : "Rich Cotton Ltd Products"}
      </h1>

      {/* CATEGORY  */}
      <div className="max-w-[800px] mx-auto flex flex-wrap justify-center items-start gap-2">
        <button
          onClick={() => handleCatSelection("")}
          className="px-4 py-2 hover:bg-mgreen hover:text-white cursor-pointer border rounded text-xs"
        >
          Show All
        </button>
        {uniqueCategories?.map((catName, index) => {
          return (
            <button
              onClick={() => handleCatSelection(catName)}
              className="px-4 py-2 hover:bg-mgreen hover:text-white cursor-pointer border rounded text-xs"
            >
              {catName}
            </button>
          );
        })}
      </div>

      {/* PRODUCTS */}

      <div className="flex flex-wrap gap-6 justify-center items-start mt-8">
        {displayProducts?.map((product, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                router.push(
                  `products/${parentCategory}/${product?.productCode}`
                );
              }}
              className="w-[280px] border cursor-pointer hover:scale-95"
            >
              <Image
                src={product?.img}
                height={240}
                width={240}
                alt={product?.product}
                className="mx-auto my-6"
              />
              <div className="bg-lgreen py-3">
                <h1 className="text-xl text-center">{product?.productCode}</h1>
                <h2 className="text-md text-center">{product?.category}</h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductCategory;
