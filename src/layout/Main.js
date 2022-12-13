import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/AppBar/Header";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <>
      <Header />
      <Container>
      <Outlet />
       <Box sx={{
        backgroundImage:"url(https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148881321.jpg?w=740&t=st=1670769497~exp=1670770097~hmac=e10db5e3148fefc86b3951dd1da656b83cb84591d89ec4a8a88883779601e63d)",
        backgroundPosition:"center",
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
       }}>
       <Footer />
       </Box>
      </Container>
      
    </>
  );
};

export default Main;
