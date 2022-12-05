import { Box, Link, Typography } from "@mui/material";
import React from "react";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
const Personal = () => {
  return (
    <Box>
        <Typography sx={{
            fontFamily:"cursive",
            color:"blue",
            fontSize:"18px",
            display:"flex",
            alignItems:"center",
            textDecoration:"underline"
        }}>Contact Info.</Typography>
      <Box
        sx={{
          fontSize: "18px",
          fontFamily: "serif",
          fontWeight: 600,
          display:"flex",
          alignItems:"center"
        }}
      >
       <PhoneIcon/>Phone:
        <Typography
          sx={{
            fontFamily: "monospace",
            display: "inline-block",
            ml: 1,
          }}
        >
          {" "}
          +880-1755-327723
        </Typography>
      </Box>
      <Box
        sx={{
          fontSize: "17px",
          fontFamily: "serif",
          fontWeight: 600,
          display:"flex",
          alignItems:"center"
        }}
      >
        <EmailIcon/>Email:
        <Link variant="pointer"
          sx={{
            fontFamily: "monospace",
            fontWeight: 200,
            fontSize: "16px",
            display: "inline-block",
            ml: 1,
          }}
        >
          abutalha141999@gmail.com
        </Link>
      </Box>
      <Box
        sx={{
          fontSize: "17px",
          fontFamily: "serif",
          fontWeight: 600,
          display:"flex",
          alignItems:"center"
        }}
      >
        <LinkedInIcon/>Linkedin:
        <Link
          sx={{
            fontFamily: "monospace",
            fontWeight: 200,
            fontSize: "16px",
            display: "inline-block",
            ml: 1,
          }}
        >
          https://www.linkedin.com/in/abutalha2022/
        </Link>
      </Box>
      <Box
        sx={{
          fontSize: "17px",
          fontFamily: "serif",
          fontWeight: 600,
          display:"flex",
          alignItems:"center"
        }}
      >
        <GitHubIcon/>GitHub:
        <Link
          sx={{
            fontWeight: 200,
            fontSize: "16px",
            fontFamily: "monospace",
            display: "inline-block",
            ml: 1,
          }}
        >
          https://github.com/Abutalha400212
        </Link>
      </Box>
    </Box>
  );
};

export default Personal;
