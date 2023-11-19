import React from "react";
import './Dashboard.module.css'
import Row1 from './Row1';
import Row2 from './Row2';
import Row3 from './Row3';
import Button from '@mui/material/Button'
import { DownloadOutlined } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import Header from './../Header/Header';

export default function Dashboard() {

  return <>
    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>

      <Header title={"DASHBOARD"} suBtitle={"Welcome to your dashboard"} />
      <Box sx={{ textAlign: "right" }}>


        <Button variant="contained" color="primary">
          <DownloadOutlined />
          Download Reports
        </Button>
      </Box>
    </Stack>
    <Row1 />
    <Row2 />
    <Row3 />

  </>
}
