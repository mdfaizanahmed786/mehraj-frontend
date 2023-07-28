import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CreateIcon from "@mui/icons-material/Create";
import { IconButton, Stack } from "@mui/material";
import { useQuery } from "react-query";
import axios from "axios";

const ActionScho = () => {
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton size="medium">
        <RemoveRedEyeIcon fontSize="inherit" />
      </IconButton>
      <IconButton size="medium">
        <CreateIcon fontSize="inherit" />
      </IconButton>
    </Stack>
  );
};

const Scholarship = () => {
  const { data: students } = useQuery({
    queryKey: ["students"],
    queryFn: async () => {
      const { data } = await axios.get(
        "http://localhost:5000/v1/student/getAllStudents"
      );
      return data;
    },
  });
  console.log(students, "DDDD");

  const rows = students?.students?.map((student) => {
    return {
      id: student._id,
      first_name: student.firstName,
      last_name: student.lastName,
      dateOfBirth: student.dateOfBirth,
      applicationStatus: student.applicationStatus,
      gender: student.gender,
      createdAt: student.createdAt,
    };
  });

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "first_name", headerName: "First Name", width: 150 },
    { field: "last_name", headerName: "Last Name", width: 150 },
    { field: "dateOfBirth", headerName: "Date of Birth", width: 150 },
    { field: "gender", headerName: "Gender", width: 100 },
    { field: "createdAt", headerName: "Created At", width: 150 },

    {
      field: "applicationStatus",
      headerName: "Application Status",
      width: 150,
    },
    {
      field: "Actions",
      headerName: "Actions",
      width: 300,
      renderCell: () => {
        return <ActionScho />;
      },
    },
  ];

  return (
    <div
      style={{
        height: 400,
        width: "100%",
        alignContent: "center",
        marginTop: "60px",
      }}
    >
      <h1>Student Application</h1>
      <DataGrid columns={columns} rows={rows || []} pageSize={5} />
    </div>
  );
};

export default Scholarship;
