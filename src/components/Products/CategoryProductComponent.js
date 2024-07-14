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
      className=" border w-[266px] cursor-pointer shadow hover:shadow-xl hover:scale-105 rounded transition-all ease-in-out bg-[#FEFCFB] "
    >
      <div className="mx-auto  px-0 flex justify-center items-center h-[266px] w-[266px] ">
        <Image
          src={product?.img}
          height={266}
          width={190}
          alt={product?.product}
          className="mx-auto "
        />
      </div>
      <div className="bg-lgreen py-3 rounded-b px-5">
        <h1 className="text-lg text-center uppercase  text-gray-900">
          {product?.productCode}
        </h1>
        <h2 className="text-sm text-center font-medium">{product?.category}</h2>
      </div>
    </div>
  );
};

export default CategoryProductComponent;
