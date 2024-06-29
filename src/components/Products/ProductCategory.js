import { useEffect, useState } from "react";
import CategoryProductComponent from "./CategoryProductComponent";

const ProductCategory = ({ productsData, productsTitle, parentCategory }) => {
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

      <div className="flex flex-wrap gap-2 justify-center items-start mt-8">
        {displayProducts?.map((product, index) => {
          return <CategoryProductComponent key={index} product={product} />;
        })}
      </div>
    </div>
  );
};

export default ProductCategory;
