"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
const CategoryProductComponent = ({ product }) => {
  const router = useRouter();
  console.log(product);
  return (
    <div
      onClick={() => {
        router.push(`/products/${product?.parentCategory}/${product?.slug}`);
        // router.push(
        //   `/products/${product?.parentCategory}/${product?.productCode}`
        // );
      }}
      className=" border w-[276px] cursor-pointer theproduct bg-[#FEFCFB] "
    >
      <div className="mx-auto  px-0 flex justify-center items-center h-[276px] w-[276px] ">
        <Image
          src={product?.img}
          height={276}
          width={200}
          alt={product?.product}
          className="mx-auto "
        />
      </div>
      <div className="bg-lgreen py-3  px-5">
        <h1 className="text-lg text-center uppercase">
          {product?.productCode}
        </h1>
        <h2 className="text-sm text-center">{product?.category}</h2>
      </div>
    </div>
  );
};

export default CategoryProductComponent;
