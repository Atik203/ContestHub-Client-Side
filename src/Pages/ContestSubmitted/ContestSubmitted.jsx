import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { DataGrid } from "@mui/x-data-grid";
import useParticipants from "../../Hooks/useParticipants";

const ContestSubmitted = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [participants, refetch, dataLoading] = useParticipants();
  if (dataLoading) {
    return (
      <span className="loading loading-spinner text-center mt-40 loading-lg"></span>
    );
  }

  const handleRoleUpdate = (id, name) => {
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
          axiosSecure.patch(`/setWinner/${id}`, { name }).then((res) => {
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
  const columns = [
    { field: "Name", headerName: "Name", width: 150 },
    { field: "email", headerName: "Email", width: 300 },
    {
      field: "name",
      headerName: "Contest Name",
      width: 250,
    },
    {
      field: "winner_name",
      headerName: "Winner",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {params.row.Name === params.row.winner_name && (
              <h1 className="text-base">{params.row.winner_name}</h1>
            )}
            {(!params.row.winner_name ||
              params.row.Name !== params.row.winner_name) && (
              <h1 className="text-base">Not Set</h1>
            )}
          </>
        );
      },
    },
    {
      headerName: "Actions",
      width: 150,
      renderCell: (params) => (
        <div className="text-[12px] font-light  space-x-2">
          <button
            className={`btn text-sm bg-green-500 hover:text-black hover:bg-gray-300 text-white btn-sm ${
              params.row.Name === params.row.winner_name
                ? "cursor-not-allowed opacity-50"
                : ""
            }`}
            onClick={() => handleRoleUpdate(params.row._id, params.row.Name)}
            disabled={params.row.Name === params.row.winner_name}
          >
            Set Winner
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
        rows={participants}
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

export default ContestSubmitted;
