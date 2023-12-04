import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect } from "react";
import { useState } from "react";
import Countdown from "react-countdown";
import { DataGrid } from "@mui/x-data-grid";

const ParticipatedContest = () => {
  const { user } = useContext(AuthContext);
  const [contests, setContest] = useState([]);
  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    axiosSecure.get(`/payment/${user?.email}`).then((res) => {
      setContest(res.data);
    });
  }, [axiosSecure, user.email]);

  const columns = [
    { field: "Name", headerName: "Name", width: 180 },
    { field: "name", headerName: "Contest Name", width: 300 },
    { field: "category", headerName: "Category", width: 180 },
    {
      field: "winner_name",
      headerName: "Result",
      width: 100,
      renderCell: (params) => {
        return params.row.winner_name === user?.displayName ? (
          <h1 className="font-semibold text-green-500">Winner</h1>
        ) : (
          <h1 className=" text-red-500 font-semibold">Lost</h1>
        );
      },
    },
    {
      field: "deadline",
      headerName: "Deadline",
      width: 150,
      renderCell: (params) => {
        const deadlineDate = new Date(params.row.deadline);
        const now = new Date();
        const isDeadlineOver = deadlineDate < now;

        if (isDeadlineOver) {
          return (
            <>
              <h1 className="text-red-500">Deadline Over</h1>
            </>
          );
        }
        return (
          <Countdown
            date={deadlineDate}
            onComplete={() => console.log("Deadline is over")}
          />
        );
      },
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

export default ParticipatedContest;
