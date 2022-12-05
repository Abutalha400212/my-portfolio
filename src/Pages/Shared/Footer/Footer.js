import { Link, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Paper
      sx={{ marginTop: "calc(10% + 60px)", marginBottom: 1 }}
      component="footer"
      square
      variant="outlined"
    >
      <Container sx={{}} maxWidth="lg">
        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Link href="/">
            <img
              src="https://i.ibb.co/rH3PZmy/logo.png"
              height={50}
              alt="Logo"
            />
          </Link>
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            justifyContent: "center",
            display: "flex",
            mb: 2,
          }}
        >
          <Typography
            sx={{
              fontFamily: "cursive",
              fontSize: "15px",
            }}
            variant="caption"
            color="initial"
          >
            Copyright ©2022 [Design and Build by ABU TALHA]
          </Typography>
        </Box>
      </Container>
    </Paper>
  );
};

export default Footer;
