import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/AppBar/Header";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <Box>
      <Container>
        <Header />
        <Outlet />
        <Footer/>
      </Container>
    </Box>
  );
};

export default Main;
