import { DataGrid } from "@mui/x-data-grid";
import React, { useCallback } from "react";

const columns = [
  { field: "name", headerName: "Contest Name", width: 300 },
  { field: "score", headerName: "Score", width: 200 },
  { field: "winner_name", headerName: "Winner Name", width: 200 },
  {
    field: "winner_img",
    headerName: "Photo",
    width: 100,
    renderCell: (params) => (
      <img
        src={params.value}
        alt="Winner"
        style={{ width: "100%", height: "100%" }}
      />
    ),
  },
];

const LeaderBoardTable = ({ data, handleDelete }) => {
  return (
    <div style={{ height: 600, width: "100%" }}>
      <DataGrid
        sx={{
          width: "70%",
          textAlign: "center",
          mx: "auto",
          fontSize: "18px",
          padding: "10px",
        }}
        rows={data}
        columns={columns}
        pageSize={5}
        getRowId={(row) => row._id}
        rowHeight={80}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 15, 20]}
      />
    </div>
  );
};

export default LeaderBoardTable;
