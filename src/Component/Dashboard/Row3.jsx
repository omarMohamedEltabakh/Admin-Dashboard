import {  Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import Pie from './../Pie/Pie';
import Bar from './../Bar/Bar';
import Geography from './../Geography/Geography';





export default function Row3() {


  const theme = useTheme()






  return <Stack  justifyContent={"center"}  gap={1.5} mt={2}  direction={"row"} flexWrap={"wrap"} alignContent={"space-between"}>

    <Paper  sx={{flexGrow: 1,minWidth: "400px", width: "28%",  }}>
      <Typography fontWeight={"600"} sx={{ padding: "30px 30px 0 30px" }} color={theme.palette.secondary.main} variant="h6" > campaign</Typography>
      <Pie isDashboard={true} />
      <Typography align="center" sx={{mt:"15px"}} variant="h6" >$48,532 revenue generated</Typography> 
      <Typography align="center" sx={{mt:"15px"}} variant="body2" px={.7} pb={3} >includes extra misc expenditures and costs</Typography> 

    </Paper>




    <Paper sx={{flexGrow: 1,minWidth: "400px", width: "33%",  }}>
    <Typography fontWeight={"600"} sx={{ padding: "30px 30px 0 30px" }} color={theme.palette.secondary.main} variant="h6" > Sales Quantity</Typography>
    <Bar isDashboard={true}/>
    </Paper>


    <Paper sx={{flexGrow: 1,minWidth: "400px", width: "33%",  }}>
      <Geography  isDashboard={true}/>
    </Paper>
    
  </Stack>

}
