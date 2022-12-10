import { Button, FormControl, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Contact = () => {
  return (
    <Box sx={{
        
        minHeight:"100vh"
    }}>
      <Grid container spacing={2}>
        <Grid item md={6} spacing={4} sm={12} sx={{
            my:"auto",
            display:"flex",
            flexDirection:"column",
            gap:"20px",
            width:"100%"
        }} >
          <FormControl variant="outlined">
            <TextField
              id="outlined-basic"
              label="Name"
              
            />
          </FormControl>
          <FormControl variant="outlined">
            <TextField
              id="outlined-basic"
              label="Email"
            />
          </FormControl>
          <FormControl variant="outlined">
            <TextField
              id="outlined-basic"
              label="Message"
            />
          </FormControl>
          <Button sx={{
            width:"50%",
            mx:"auto"
          }} variant="contained">Send</Button>
        </Grid>
        <Grid item md={6} sm={12}>
     
            {" "}
            <img
            width={"100%"}
              src="https://img.freepik.com/free-vector/flat-design-illustration-customer-support_23-2148887720.jpg?w=740&t=st=1670669897~exp=1670670497~hmac=a27dd2a5d8382cf59e01f0aaf8bbd66195d62d465f53c5c2f3307851410b095c"
              alt=""
            />
        
        </Grid>
        
      </Grid>
    
    </Box>
  );
};

export default Contact;
