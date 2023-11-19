
import { Stack, useTheme } from "@mui/material";
import React from "react";
import Card from "./Card";
import EmailIcon from '@mui/icons-material/Email';
import { PersonAdd, PointOfSale } from "@mui/icons-material";
import { data } from "./data";


export default function Row1() {
const theme = useTheme();


  return <Stack mt={2}  direction={"row"} flexWrap={"wrap"} gap={1} justifyContent={{ xs: "space-between", sm: "space-between" }}>

    <Card scheme={"nivo"} data={data} icon={<EmailIcon sx={{fontSize:"23px", color:theme.palette.secondary.main}}/>} title={"12,361"} subTitle={"Email Sent"} increase={"+14%"} />
    <Card scheme={"category10"} data={data} icon={<PointOfSale sx={{fontSize:"23px", color:theme.palette.secondary.main}}/>} title={"431,225"} subTitle={"Sales obtained"} increase={"+21%"} />
    <Card scheme={"accent"} data={data} icon={<PersonAdd sx={{fontSize:"23px", color:theme.palette.secondary.main}}/>} title={"23,441"} subTitle={"New Clients"} increase={"+5%"} />
    <Card scheme={"dark2"} data={data} icon={<EmailIcon sx={{fontSize:"23px", color:theme.palette.secondary.main}}/>} title={"1,325,135"} subTitle={"Traffic Received"} increase={"+43%"} />
    
  </Stack>;
}
