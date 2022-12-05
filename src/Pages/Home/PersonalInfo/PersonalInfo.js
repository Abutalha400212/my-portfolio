import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Personal from "../../../Components/Personal/Personal";

const PersonalInfo = () => {
  const [contact,setContact] = useState(false)
  return (
    <Grid sx={{
      padding:"15px",
      mt:1
    }} container spacing={5}>
      <Grid
        sx={{
          my: "auto",
          backgroundImage:"url(https://i.ibb.co/kMGRNgn/dream-bg.png)",
          backgroundRepeat:"no-repeat",
          backgroundPosition:"cover"
        }}
        item
        xs={12}
        md={6}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontFamily: "serif",
            fontStyle: "normal",
            fontDisplay: "swap",
            fontWeight: 600,
            color: "primary.blue",
          }}
        >
          Hi, I am Abu Talha
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontFamily: "monospace",
            fontStyle: "normal",
            fontDisplay: "swap",
            fontWeight: 400,
            color: "primary.blue",
          }}
        >
          Front End Developer
        </Typography>
        {contact?<Personal/>:<Typography
          sx={{
            fontSize: "18px",
            fontFamily: '"Helvetica Neue"',
            fontDisplay: "swap",
            fontWeight: 400,
            textAlign: "justify",
            textDecoration:"capitalize"
          }}
        >
          A self-motivated and enthusiastic web developer with a deep interest
          in JavaScript. To work in the Software industry with modern web
          technologies of different local & multinational Software/ IT agencies
          of Bangladesh and grow rapidly with increasing responsibilities.
        </Typography>}
        <Box
          sx={{
            "@media (min-width:600px)": {
              width: "100%",
            },
            display: "flex",
            marginTop: "0.4rem",
            gap: "5px",
          }}
        >
          <Button
          onClick={()=>setContact(!contact)}
            sx={{
              "&:hover": {
                backgroundColor: "#673ab7",
                color: "#ffffff",
              },
            }}
            variant="outlined"
          >
            {contact?"Short Description":"About Me"}
          </Button>
          <Button
            sx={{
              "&:hover": {
                backgroundColor: "#3f51b5",
              },
            }}
          >
            Get In Touch
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <img src="https://i.ibb.co/C1ZtxDW/pic.png" alt="" width={"100%"} />
      </Grid>
    </Grid>
  );
};

export default PersonalInfo;
