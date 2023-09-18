"use client";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Swal from "sweetalert2";

const ProductsTable = ({ data, handleDataChange, changeValue }) => {
  const route = useRouter();
  const [expandedItem, setExpandedItem] = useState(null);

  const handleDetailsClick = (item) => {
    if (expandedItem === item) {
      // If the same item is clicked again, collapse it
      setExpandedItem(null);
    } else {
      setExpandedItem(item);
    }
  };

  console.log(data);

  const handleEditClick = async (item) => {
    // Implement edit functionality here
    localStorage.setItem("updateProductData", JSON.stringify(item));
    route.push(`/rich-cotton-admin-panel/update-product/${item?.id}`);
  };

  const handleDeleteClick = async (productId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.showLoading();

        async function deleteProduct(productId, handleDataChange, changeValue) {
          try {
            // Send a DELETE request to the API endpoint with the product ID
            let res = await axios.delete(`/api/products/${productId}`);
            if (res.status == 200) {
              handleDataChange(changeValue + 1);
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
              // Remove the deleted product from the local state
            }
          } catch (error) {
            Swal.fire("Error!", "Error deleting product.", "error");
            console.error("Error deleting product:", error);
            throw error;
          }
        }

        deleteProduct(productId, handleDataChange, changeValue);
      }
    });
  };

  return (
    <div className="overflow-x-auto mt-6">
      <table className="table table-xs w-full ">
        <thead>
          <tr className="border border-slate-600">
            <th className="p-2 "></th>
            <th className="p-2 ">Product Code</th>
            <th className="p-2 ">Category</th>
            <th className="p-2 ">Parent Category</th>
            <th className="p-2 ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <>
                <tr className="border-b border-slate-600" key={index}>
                  <td className="p-2 ">{index + 1}</td>
                  <td className="p-2 ">
                    <div className="flex items-center max-h-[60px] gap-2">
                      <Image
                        src={item?.img}
                        height={60}
                        width={60}
                        alt="product image"
                        className="rounded-full border w-[60px] h-[60px]"
                      />
                      <p>{item.productCode}</p>
                    </div>
                  </td>
                  <td className="p-2 ">{item.category}</td>
                  <td className="p-2 ">{item.parentCategory}</td>
                  <td className="p-2  justify-center items-center flex gap-2">
                    <button
                      className="btn  btn-primary text-black  "
                      onClick={() => handleDetailsClick(item)}
                    >
                      Details
                    </button>
                    <button
                      className=" btn btn-warning text-black  "
                      onClick={() => handleEditClick(item)}
                    >
                      Edit
                    </button>
                    <button
                      className=" btn btn-error text-black  "
                      onClick={() => handleDeleteClick(item?.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>

                {expandedItem === item && (
                  <tr className="w-full">
                    <td colSpan="5" className="bg-gray-100 p-4 rounded-lg">
                      <h2 className="text-lg font-semibold mb-2">Details</h2>
                      <div className="grid grid-cols-4 space-y-2">
                        <p>
                          <strong>Title:</strong> {item.title}
                        </p>
                        <p>
                          <strong>Product:</strong> {item.product}
                        </p>
                        <p>
                          <strong>Fabric:</strong> {item.fabric}
                        </p>
                        <p>
                          <strong>Wash:</strong> {item.wash}
                        </p>
                        <p>
                          <strong>Price:</strong> {item.price}
                        </p>
                        <p>
                          <strong>Delivery Time:</strong> {item.deliveryTime}
                        </p>
                        <p>
                          <strong>Slug:</strong> {item.slug}
                        </p>
                      </div>
                    </td>
                  </tr>
                )}
              </>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
