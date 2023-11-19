import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
export default function Header(props) {

  const theme = useTheme()
  
let {suBtitle,title}  = props;

  return <>
    <Box>
      <Typography fontWeight={"bold"} color={theme.palette.info.light} variant="h5" >{title}</Typography>
      <Typography variant="body1" >{suBtitle}</Typography>
    </Box>

  </>
}
