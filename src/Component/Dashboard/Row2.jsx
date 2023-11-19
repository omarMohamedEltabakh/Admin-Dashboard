import { Box, IconButton, Paper, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import Line from "../Line/Line";
import { DownloadOutlined } from "@mui/icons-material";

export default function Row2() {
  const theme = useTheme();


  return <Stack direction={"row"} flexWrap={"wrap"} gap={1.5} mt={3}>




    <Paper sx={{ minWidth: "400px", height: 340, maxWidth: 900, flexGrow: 1 }}>

      <Stack flexWrap={"wrap"} sx={{ justifyContent: "space-between", alignItems: "center" }} direction={"row"} >
        <Box>
          <Typography mb={1} mt={2} ml={3} color={theme.palette.secondary.main} variant="h6" >Revenue Generated</Typography>
          <Typography variant="body2" ml={4} >$59,342,32</Typography>
        </Box>

        <Box>

          <IconButton>
            <DownloadOutlined />
          </IconButton>


        </Box>

      </Stack>

      <Line isDashboard={true} />
    </Paper>














    <Box  sx={{ flexGrow: 1, textAlign: "center", maxHeight: 600, minWidth: "280px" }}  >

      <Paper  >
        <Typography fontWeight={"bold"} p={1.2} color={theme.palette.secondary.main} variant="h6" >Recent Transactions</Typography>
      </Paper>

      <Paper sx={{ display: "flex", justifyContent: "space-between", p: 2, mt: 2 }}>

        <Box>
          <Typography variant="body1" >omar@gmail.com</Typography>
          <Typography variant="body1" >omar</Typography>
        </Box>

        <Box>
          <Typography variant="body1" >2022-09-01</Typography>
        </Box>

        <Box>
          <Typography color={"white"} sx={{ p: 1, borderRadius: 2 }} bgcolor={theme.palette.success.dark} variant="body1" >70.91$</Typography>
        </Box>

      </Paper>

      <Paper sx={{ display: "flex", justifyContent: "space-between", p: 2, mt: 2 }}>

        <Box>
          <Typography variant="body1" >zeyad@gmail.com</Typography>
          <Typography variant="body1" >zeyad</Typography>
        </Box>

        <Box>
          <Typography variant="body1" >2021-09-01</Typography>
        </Box>

        <Box>
          <Typography color={"white"} sx={{ p: 1, borderRadius: 2 }} bgcolor={theme.palette.success.dark}  variant="body1" >80.91$</Typography>
        </Box>

      </Paper>

      <Paper sx={{ display: "flex", justifyContent: "space-between", p: 2, mt: 2 }}>

        <Box>
          <Typography variant="body1" >ali@gmail.com</Typography>
          <Typography variant="body1" >ali</Typography>
        </Box>

        <Box>
          <Typography variant="body1" >2023-09-01</Typography>
        </Box>

        <Box>
          <Typography color={"white"} sx={{ p: 1, borderRadius: 2 }} bgcolor={theme.palette.success.dark}  variant="body1" >100.21$</Typography>
        </Box>

      </Paper>

    </Box>


  </Stack>
}
