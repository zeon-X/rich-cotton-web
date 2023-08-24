"use client";
import ProductCategory from "@/components/Products/ProductCategory";
import { useRouter } from "next/navigation";

let data = [
  {
    parentCategory: "mens-wear",
    productCode: "MJ001",
    category: "Men's Jacket",
    product: "Leather Biker Jacket",
    img: "https://i.ibb.co/0y10ZS9/sp.jpg",
    fabric: "Genuine Leather",
    wash: "Dry Clean Only",
    price: 199.99,
    deliveryTime: "2-4 business days",
  },
  {
    parentCategory: "mens-wear",
    productCode: "MJ002",
    category: "Men's Jacket",
    product: "Quilted Bomber Jacket",
    img: "https://i.ibb.co/0y10ZS9/sp.jpg",
    fabric: "Polyester",
    wash: "Machine Washable",
    price: 149.99,
    deliveryTime: "3-5 business days",
  },
  {
    parentCategory: "mens-wear",
    productCode: "MDB001",
    category: "Men's Non Denim Bottoms",
    product: "Chinos",
    img: "https://i.ibb.co/0y10ZS9/sp.jpg",
    fabric: "Cotton",
    wash: "Machine Washable",
    price: 59.99,
    deliveryTime: "2-4 business days",
  },
  {
    parentCategory: "mens-wear",
    productCode: "MDB002",
    category: "Men's Non Denim Bottoms",
    product: "Cotton Khakis",
    img: "https://i.ibb.co/0y10ZS9/sp.jpg",
    fabric: "Cotton",
    wash: "Machine Washable",
    price: 49.99,
    deliveryTime: "2-4 business days",
  },
  {
    parentCategory: "mens-wear",
    productCode: "MST001",
    category: "Men's Shirts/T-Shirts/Polo Shirts",
    product: "Classic White Shirt",
    img: "https://i.ibb.co/0y10ZS9/sp.jpg",
    fabric: "Cotton",
    wash: "Machine Washable",
    price: 79.99,
    deliveryTime: "2-4 business days",
  },
  {
    parentCategory: "mens-wear",
    productCode: "MST002",
    category: "Men's Shirts/T-Shirts/Polo Shirts",
    product: "Striped Polo T-Shirt",
    img: "https://i.ibb.co/0y10ZS9/sp.jpg",
    fabric: "Cotton",
    wash: "Machine Washable",
    price: 29.99,
    deliveryTime: "2-4 business days",
  },
  {
    parentCategory: "mens-wear",
    productCode: "MS001",
    category: "Men's Shorts",
    product: "Cargo Shorts",
    img: "https://i.ibb.co/0y10ZS9/sp.jpg",
    fabric: "Cotton",
    wash: "Machine Washable",
    price: 39.99,
    deliveryTime: "2-4 business days",
  },
  {
    parentCategory: "mens-wear",
    productCode: "MS002",
    category: "Men's Shorts",
    product: "Denim Shorts",
    img: "https://i.ibb.co/0y10ZS9/sp.jpg",
    fabric: "Denim",
    wash: "Machine Washable",
    price: 49.99,
    deliveryTime: "2-4 business days",
  },
  {
    parentCategory: "mens-wear",
    productCode: "MSW001",
    category: "Men's Sweater",
    product: "Crewneck Sweater",
    img: "https://i.ibb.co/0y10ZS9/sp.jpg",
    fabric: "Wool",
    wash: "Dry Clean Only",
    price: 89.99,
    deliveryTime: "3-5 business days",
  },
  {
    parentCategory: "mens-wear",
    productCode: "MSW002",
    category: "Men's Sweater",
    product: "V-Neck Pullover",
    img: "https://i.ibb.co/0y10ZS9/sp.jpg",
    fabric: "Wool",
    wash: "Dry Clean Only",
    price: 79.99,
    deliveryTime: "3-5 business days",
  },
  {
    parentCategory: "mens-wear",
    productCode: "MSS001",
    category: "Men's Swim Short",
    product: "Patterned Swim Trunks",
    img: "https://i.ibb.co/0y10ZS9/sp.jpg",
    fabric: "Polyester",
    wash: "Machine Washable",
    price: 34.99,
    deliveryTime: "2-4 business days",
  },
  {
    parentCategory: "mens-wear",
    productCode: "MJH001",
    category: "Men’s Joggers/Hoodies",
    product: "Fleece Hoodie",
    img: "https://i.ibb.co/0y10ZS9/sp.jpg",
    fabric: "Fleece",
    wash: "Machine Washable",
    price: 69.99,
    deliveryTime: "2-4 business days",
  },
  {
    parentCategory: "ladies-wear",
    productCode: "LJ001",
    category: "Ladies Jackets",
    product: "Leather Biker Jacket",
    img: "https://i.ibb.co/tPczS6r/mp.jpg",
    fabric: "Leather",
    wash: "Dry Clean Only",
    price: 149.99,
    deliveryTime: "3-5 business days",
  },
  {
    parentCategory: "ladies-wear",
    productCode: "LND001",
    category: "Ladies Non Denim Bottoms",
    product: "Pleated Trousers",
    img: "https://i.ibb.co/tPczS6r/mp.jpg",
    fabric: "Polyester",
    wash: "Machine Washable",
    price: 54.99,
    deliveryTime: "2-4 business days",
  },
  {
    parentCategory: "ladies-wear",
    productCode: "LS001",
    category: "Ladies Sweaters",
    product: "Cashmere Blend Sweater",
    img: "https://i.ibb.co/tPczS6r/mp.jpg",
    fabric: "Cashmere Blend",
    wash: "Hand Wash Only",
    price: 129.99,
    deliveryTime: "3-5 business days",
  },
  {
    parentCategory: "ladies-wear",
    productCode: "LDB001",
    category: "Ladies’ Denim Bottoms",
    product: "Skinny Jeans",
    img: "https://i.ibb.co/tPczS6r/mp.jpg",
    fabric: "Denim",
    wash: "Machine Washable",
    price: 79.99,
    deliveryTime: "2-4 business days",
  },
  {
    parentCategory: "ladies-wear",
    productCode: "LST001",
    category: "Ladies’ Shirts/Tops/T-Shirts/Polo Shirts",
    product: "Striped Button-Down Shirt",
    img: "https://i.ibb.co/tPczS6r/mp.jpg",
    fabric: "Cotton",
    wash: "Machine Washable",
    price: 44.99,
    deliveryTime: "2-4 business days",
  },
];

let title = [
  {
    name: "Men's wear",
    tag: "mens-wear",
  },
  {
    name: "Ladies wear",
    tag: "ladies-wear",
  },
  {
    name: "Kids wear",
    tag: "kids-wear",
  },
  {
    name: "Active wear",
    tag: "active-wear",
  },
  {
    name: "Work wear",
    tag: "work-wear",
  },
];

const page = ({ params }) => {
  const router = useRouter();
  const category = params.slug;

  const filteredProducts = data.filter(
    (product) => product.parentCategory == category
  );

  // console.log(filteredProducts);

  let matchedTitle = title.find((item) => item?.tag == category);

  if (matchedTitle) {
    matchedTitle = matchedTitle?.name;
  } else {
    matchedTitle = "Rich Cotton Ltd Products";
  }

  console.log(matchedTitle);

  return (
    <section>
      <ProductCategory
        productsData={filteredProducts}
        productsTitle={matchedTitle}
        parentCategory={category}
      />
    </section>
  );
};

export default page;
