"use client";
import axiosInstance from "@/utilities/axiosInstance";
// import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

const ClientsTable = ({ data, handleDataChange, changeValue }) => {
  const router = useRouter();

  const handleEditClick = async (item) => {
    // Implement edit functionality here
    localStorage.setItem("updateClientData", JSON.stringify(item));
    console.log(item);
    router.push(`/rich-cotton-admin-panel/update-client/${item?._id}`);
  };

  const handleDeleteClick = async (clientId) => {
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

        async function deleteClient(clientId, handleDataChange, changeValue) {
          try {
            // Send a DELETE request to the API endpoint with the client ID
            let res = await axiosInstance.delete(`client/${clientId}`);
            if (res.status === 200) {
              handleDataChange(changeValue + 1);
              Swal.fire("Deleted!", "Your client has been deleted.", "success");
              // Remove the deleted client from the local state
            }
          } catch (error) {
            Swal.fire("Error!", "Error deleting client.", "error");
            console.error("Error deleting client:", error);
            throw error;
          }
        }

        deleteClient(clientId, handleDataChange, changeValue);
      }
    });
  };

  return (
    <div className="overflow-x-auto mt-6">
      <table className="table table-xs w-full ">
        <thead>
          <tr className="border border-slate-600">
            <th className="p-2 "></th>
            <th className="p-2 ">Title</th>
            <th className="p-2 ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            return (
              <tr className="border-b border-slate-600" key={index}>
                <td className="p-2 ">{index + 1}</td>
                <td className="p-2 ">
                  <div className="flex items-center max-h-[60px] gap-2">
                    <Image
                      src={item?.img}
                      height={60}
                      width={60}
                      alt="client image"
                      className="rounded-full border w-[60px] h-[60px]"
                    />
                    <p>{item.title}</p>
                  </div>
                </td>
                <td className={"p-2  justify-center items-center flex gap-2"}>
                  <button
                    className={
                      item?._id
                        ? " btn btn-warning text-black  "
                        : "btn btn-disabled"
                    }
                    onClick={() => handleEditClick(item)}
                  >
                    Edit
                  </button>
                  <button
                    className={
                      item?._id
                        ? " btn btn-error text-black  "
                        : "btn btn-disabled"
                    }
                    onClick={() => handleDeleteClick(item?._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ClientsTable;
