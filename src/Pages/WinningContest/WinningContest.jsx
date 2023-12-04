import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const WinningContest = () => {
  const { user } = useContext(AuthContext);
  const [contests, setContest] = useState([]);
  const axiosSecure = useAxiosSecure();
  const [winning, setWinning] = useState([]);
  useEffect(() => {
    axiosSecure.get(`/payment/${user?.email}`).then((res) => {
      setContest(res.data);
    });
  }, [axiosSecure, user.email]);
  useEffect(() => {
    const data = contests.filter((item) => item.Name === item.winner_name);
    setWinning(data);
  }, [contests]);

  const columns = [
    { field: "Name", headerName: "Name", width: 200 },
    {
      field: "name",
      headerName: "Contest Name",
      width: 350,
    },
    {
      field: "category",
      headerName: "Contest Category",
      width: 200,
    },
    {
      field: "prize",
      headerName: "Prize Money (USD)",
      width: 200,
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
        rows={winning}
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

export default WinningContest;
