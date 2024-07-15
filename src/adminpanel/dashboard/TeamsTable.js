"use team";
import axiosInstance from "@/utilities/axiosInstance";
// import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { profileImage } from "../../../public";

const TeamsTable = ({ data, handleDataChange, changeValue }) => {
  const router = useRouter();

  const handleEditClick = async (item) => {
    // Implement edit functionality here
    localStorage.setItem("updateTeamData", JSON.stringify(item));
    console.log(item);
    router.push(`/rich-cotton-admin-panel/update-team/${item?._id}`);
  };

  const handleDeleteClick = async (teamId) => {
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

        async function deleteTeam(teamId, handleDataChange, changeValue) {
          try {
            // Send a DELETE request to the API endpoint with the team ID
            let res = await axiosInstance.delete(`team/${teamId}`);
            if (res.status === 200) {
              handleDataChange(changeValue + 1);
              Swal.fire("Deleted!", "Your team has been deleted.", "success");
              // Remove the deleted team from the local state
            }
          } catch (error) {
            Swal.fire("Error!", "Error deleting team.", "error");
            console.error("Error deleting team:", error);
            throw error;
          }
        }

        deleteTeam(teamId, handleDataChange, changeValue);
      }
    });
  };

  return (
    <div className="overflow-x-auto mt-6">
      <table className="table table-xs w-full ">
        <thead>
          <tr className="border border-slate-600">
            <th className="p-2 "></th>
            <th className="p-2 ">Name</th>
            <th className="p-2 ">position</th>
            <th className="p-2 ">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => {
            // console.log(item);
            return (
              <tr className="border-b border-slate-600" key={index}>
                <td className="p-2 ">{index + 1}</td>
                <td className="p-2 ">
                  <div className="flex items-center max-h-[60px] gap-2">
                    <Image
                      src={item?.image ? item?.image : profileImage}
                      height={60}
                      width={60}
                      alt="team image"
                      className="rounded-full border w-[60px] h-[60px]"
                    />
                    <p>{item.name}</p>
                  </div>
                </td>
                <td className="p-2 ">
                  <div className="flex items-center max-h-[60px] gap-2">
                    <p>{item.position}</p>
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

export default TeamsTable;
