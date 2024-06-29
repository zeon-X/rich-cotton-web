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
      className=" border w-[280px] cursor-pointer theproduct bg-[#FEFCFB] "
    >
      <div className="mx-auto  px-0 flex justify-center items-center h-[280px] w-[280px] ">
        <Image
          src={product?.img}
          height={240}
          width={240}
          alt={product?.product}
          className="mx-auto "
        />
      </div>
      <div className="bg-lgreen py-3  px-5">
        <h1 className="text-xl text-center">{product?.productCode}</h1>
        <h2 className="text-md text-center">{product?.category}</h2>
      </div>
    </div>
  );
};

export default CategoryProductComponent;
