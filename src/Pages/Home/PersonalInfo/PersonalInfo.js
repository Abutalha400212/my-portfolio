import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Personal from "../../../Components/Personal/Personal";
import { Typewriter } from 'react-simple-typewriter'
const PersonalInfo = () => {

  const [contact,setContact] = useState(false)
  const handleType = (count) => {
 
    console.log(count)}
  

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  return (
    <Grid sx={{
      padding:"15px",
      mt:1,
      minHeight:"100vh"
    }} container spacing={5}>
      <Grid
        sx={{
          my: "auto",
          backgroundImage:"url(https://i.ibb.co/kMGRNgn/dream-bg.png)",
          backgroundRepeat:"no-repeat",
          backgroundSize:"contain",
          backgroundPosition:"cover"
        }}
        item
        xs={12}
        md={6}
      >
        <Typography
          sx={{
            fontSize: "26px",
            fontFamily: "serif",
            fontStyle: "normal",
            fontDisplay: "swap",
            fontWeight: 600,
            color: "primary.blue",
          }}
        >
          <Typewriter
            words={["Hi I am Abu Talha"]}
            loop={2}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </Typography>
        <Typography
          sx={{
            fontSize: "20px",
            fontFamily: "cursive",
            fontStyle: "normal",
            fontDisplay: "swap",
            fontWeight: 600,
            color: "blue",
            textTransform:"uppercase"
          }}
        >
           <Typewriter
            words={["Front End Web Developer","Full Stack Web Developer","MERN Stack Web Developer"]}
            loop={2}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
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
