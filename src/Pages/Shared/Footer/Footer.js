import { Avatar, Paper, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <Paper
      sx={{ marginTop: "calc(10% + 60px)", marginBottom: 1,backgroundImage:"url(https://i.ibb.co/MSQG3wZ/wave-haikei.png)" , backgroundSize:"cover",backgroundPosition:"center" ,backgroundRepeat:"no-repeat",p:3}}
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
          <Box>
          <Avatar
            alt=""
            src="https://i.ibb.co/qj7dCSP/Profile.png"
            sx={{ width: 90, height: 90 }}
          />
          <Typography
            sx={{
              fontSize: "20px",

              fontFamily: "monospace",
              fontWeight: "bold",
              color: "blue",
            }}
          >
            {" "}
            PORTFOLIO
          </Typography>
          </Box>
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
              fontSize: "12px",
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
