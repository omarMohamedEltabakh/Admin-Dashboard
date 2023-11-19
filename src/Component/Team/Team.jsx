import React from "react";
import './Team.module.css'
import { DataGrid } from '@mui/x-data-grid';
import { Box, Typography } from "@mui/material";
import { rows } from "./Data";
import { useTheme } from '@emotion/react';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { LockOpenOutlined, SecurityOutlined } from "@mui/icons-material";
import Header from "../Header/Header";


export default function Team() {

  let theme = useTheme();


  const columns = [
    { field: 'col1', headerName: "ID", flex: 1, align: "center", headerAlign: "center" },
    { field: 'col2', headerName: "Name", flex: 1, align: "center", headerAlign: "center" },
    { field: 'col3', headerName: "Email", flex: 1, align: "center", headerAlign: "center" },
    { field: 'col4', headerName: "Age", flex: 1, align: "center", headerAlign: "center" },
    { field: 'col5', headerName: "Photo", flex: 1, align: "center", headerAlign: "center" },
    {
      field: 'col6', headerName: "Access", flex: 1, align: "center", headerAlign: "center", renderCell: ({ row: { col6 } }) =>

        <Box color={"white"} 
        sx={{
           backgroundColor: col6 === "Admin" ? theme.palette.primary.dark : col6 === "Manger" ? theme.palette.secondary.dark : "green",
            p: "5px", width: "99px", borderRadius: "3px", textAlign: "center", display: "flex", justifyContent: "space-evenly" }}>

          {col6 === "Admin" ? <AdminPanelSettingsIcon fontSize="small" /> : col6 === "user" ? <LockOpenOutlined /> : <SecurityOutlined />}

          <Typography sx={{ fontSize: "13px" }} >{col6}</Typography>

        </Box>
    },
  ];

  return <>
  <Header  title={"TEAM"} suBtitle={"Managing the Team Members"}/>

    <div style={{ height: 400, width: '100%',marginTop:"20px" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>

  </>
}
