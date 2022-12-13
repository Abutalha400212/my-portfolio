import { Box, Button, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { Typewriter } from 'react-simple-typewriter'
import file from '../../../Assest/Abu Talha Resume.pdf'
const PersonalInfo = () => {
  const handleType = (count) => {
 
    console.log(count)}
  

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  return (
    <Box sx={{
      padding:"50px",
      minHeight:"100vh",
      width:{md:"70%",sm:"100%"},
      mx:"auto",
      p:4,
      pt:18
      
    }} >
        <Typography
          sx={{
            fontSize:{md:"50px"},
            fontFamily: "serif",
            fontStyle: "normal",
            fontDisplay: "swap",
            fontWeight: 600,
            color: "yellow",
            textAlign:"center"
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
            fontSize: {md:"42px"},
            fontFamily: "cursive",
            fontStyle: "normal",
            fontDisplay: "swap",
            fontWeight: 600,
            color: "blue",
            textTransform:"uppercase",
            textAlign:"center"
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
        <Typography
          sx={{
            fontSize: {md:"18px"},
            fontFamily:"monospace",
            fontWeight: 400,
            color:"white",
            textAlign:"center",
            my:2
          }}
        >
          A self-motivated and enthusiastic web developer with a deep interest
          in JavaScript. To work in the Software industry with modern web
          technologies of different local & multinational Software/ IT agencies
          of Bangladesh and grow rapidly with increasing responsibilities.
        </Typography>
        <Box
          sx={{
            "@media (min-width:600px)": {
              width: "100%",
            },
            display: "flex",
            justifyContent:"center",
            marginTop: "0.4rem",
            gap: "5px",
          }}
         >
         <Link sx={{textDecoration:"none"}} href={file} download>
              {" "}
              <Button
              color="info"
                sx={{
                  fontSize: "15px",
                  
                }}
              >
                Dowload Resume
              </Button>
            </Link>
          <Button
          color="secondary"
          >
            Get In Touch
          </Button>
        </Box>
      </Box>
     
  );
};

export default PersonalInfo;
