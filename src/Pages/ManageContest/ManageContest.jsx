import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { DataGrid } from "@mui/x-data-grid";

const ManageContest = () => {
  const axiosSecure = useAxiosSecure();
  const { refetch, data: contests = [] } = useQuery({
    queryKey: ["contests"],
    queryFn: async () => {
      const res = await axiosSecure.get("/contests");
      return res.data;
    },
  });

  const handleRoleUpdate = (id, contestId) => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, confirm it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.patch(`/contest/${id}`).then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire("Update!", "contest has been Updated.", "success");
            }
          });
          console.log(contestId);
          axiosSecure.patch(`/creator/${contestId}`).then((res) => {
            console.log(res.data);
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
        axiosSecure.delete(`/contest/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "contest has been deleted.", "success");

            refetch();
          }
        });
      }
    });
  };

  const columns = [
    { field: "name", headerName: "Contest Name", width: 300 },
    { field: "category", headerName: "Category", width: 180 },
    {
      field: "confirm",
      headerName: "Status",
      width: 150,
      renderCell: (params) => (
        <div
          className={`text-center ${
            params.row.Confirm ? "text-green-500" : "text-red-500"
          }`}
        >
          {params.row.Confirm ? "Confirmed" : "Pending"}
        </div>
      ),
    },
    {
      headerName: "Actions",
      width: 200,
      renderCell: (params) => (
        <div className="text-[12px] font-light  space-x-2">
          <button
            className="btn bg-green-500 hover:text-black hover:bg-gray-300 text-white btn-sm"
            onClick={() =>
              handleRoleUpdate(params.row._id, params.row.contestId)
            }
          >
            Confirm
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
          width: "80%",
          textAlign: "center",
          mx: "auto",
          fontSize: "18px",
          padding: "5px",
          fontWeight: "bold",
        }}
        rows={contests}
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

export default ManageContest;
