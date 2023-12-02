import React from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { DataGrid } from "@mui/x-data-grid";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleRoleUpdate = (id, newRole) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Make it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.patch(`/users/${id}`, { role: newRole }).then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire("Update!", "User has been Updated.", "success");
            }
          });
        }
      });
    } catch (error) {
      console.error("Error updating user role", error);

      Swal.fire("Error", "Failed to update user role", "error");
    }
  };

  const handleDelete = (id) => {
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
        axiosSecure.delete(`/users/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");

            refetch();
          }
        });
      }
    });
  };

  const columns = [
    { field: "name", headerName: "Name", width: 200 },
    { field: "email", headerName: "Email", width: 320 },
    {
      field: "role",
      headerName: "Role",
      width: 90,
    },
    {
      headerName: "Actions",
      width: 400,
      renderCell: (params) => (
        <div className="text-[12px] font-light  space-x-2">
          <button
            className="btn bg-green-500 hover:text-black hover:bg-gray-300 text-white btn-sm"
            onClick={() => handleRoleUpdate(params.row._id, "admin")}
          >
            Admin
          </button>
          <button
            className="btn bg-blue-500 hover:text-black hover:bg-gray-300 text-white btn-sm"
            onClick={() => handleRoleUpdate(params.row._id, "creator")}
          >
            Creator
          </button>
          <button
            className="btn bg-cyan-500 hover:text-black hover:bg-gray-300 text-white btn-sm"
            onClick={() => handleRoleUpdate(params.row._id, "normal")}
          >
            Normal
          </button>
          <button
            className="btn bg-red-500 hover:text-black hover:bg-gray-300 text-white btn-sm"
            onClick={() => handleDelete(params.row._id)}
          >
            Delete
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="mt-10" style={{ height: 600, width: "100%" }}>
      <DataGrid
        sx={{
          width: "90%",
          textAlign: "center",
          mx: "auto",
          fontSize: "18px",
          padding: "5px",
          fontWeight: "bold",
        }}
        rows={users}
        columns={columns}
        pageSize={5}
        getRowId={(row) => row._id}
        rowHeight={70}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 10 },
          },
        }}
        pageSizeOptions={[10, 15, 20]}
      />
    </div>
  );
};

export default AllUsers;
