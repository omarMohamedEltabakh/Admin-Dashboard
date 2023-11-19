import React from "react";
import './Form.module.css'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MenuItem, Stack, Button, Snackbar, Alert } from "@mui/material";
//validaton form <============================================>
import { useForm } from "react-hook-form"
//validaton form <============================================>

const data = [
  {
    value: 'User',
    label: 'User',
  },
  {
    value: 'Mnager',
    label: 'Manger',
  },
  {
    value: 'Admin',
    label: 'Admin',
  },

];
export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = () => {
    handleClick()

  }


  // start snackbar<===========================> 

  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };

  // end snackbar<===========================> 

  return <>
  {/* <Header title={"CREATE USER"} suBtitle={"Create a New User Profile"}/> */}
    <Box
    mt={3}
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3

      }}
      noValidate
      autoComplete="off"
    >

      {/* first name and last name<==========================> */}
      <Stack gap={2} direction={"row"}>

        <TextField
          {...register("firstName", { required: true, minLength: 3 })}
          error={Boolean(errors.firstName)}
          helperText={errors.firstName ? "This Field is required & min 3" : null}
          sx={{ flex: 1 }} label="Frist Name" variant="filled" />

        <TextField
          {...register("lastName", { required: true, minLength: 3 })}
          error={Boolean(errors.lastName)}
          helperText={errors.lastName ? "This Field is required & min 3" : null}
          sx={{ flex: 1 }} label="Last Name" variant="filled" />

      </Stack>
      {/* first name and last name<==========================> */}


      {/* // email <=====================> */}
      <TextField
        {...register("email", { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
        error={Boolean(errors.email)}
        helperText={errors.email ? "Please prvide a vaild email address" : null}
        sx={{ flex: 1 }} label="Email" variant="filled" />
      {/*  // email <=====================>*/}


      {/* phoneNumber<==================> */}
      <TextField
        {...register("number", { required: true, pattern: /^(01[0-2]|01[6-9])[0-9]{8}$/ })}
        error={Boolean(errors.number)}
        helperText={errors.number ? "This Field is required & min 3" : null}
        sx={{ flex: 1 }} label="Contact Number" variant="filled" />
      {/* phoneNumber<==================> */}



      <TextField label="Address1" variant="filled" />
      <TextField label="Address2" variant="filled" />


      <TextField
        variant="filled"
        id="outlined-select-currency"
        select
        label="Role"
        defaultValue="User"
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

      <Box sx={{ textAlign: "right" }}>
        <Button type="submit" sx={{ textTransform: "capitalize" }} variant="contained" color="primary">
          Create New User
        </Button>

        {/* start snackbar<===========================> */}
        <Snackbar anchorOrigin={{ vertical:"top", horizontal:"right" }} open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Account created successfully 
          </Alert>
        </Snackbar>


        {/* end snackbar<===========================> */}

      </Box>

    </Box>

  </>
}
