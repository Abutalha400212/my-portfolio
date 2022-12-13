import React from "react";
import { Box, Grid, IconButton, Link, Typography } from "@mui/material";
import { Typewriter } from "react-simple-typewriter";
import BasicTabs from "../../../Components/Card/TabPannel";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
const Branding = () => {

  const handleType = (count) => {
    console.log(count);
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
   <Box sx={{minHeight:"100vh",}}>
     <Grid
      sx={{
        padding: "15px",
        pt:7
        
      }}
      container
      spacing={5}
    >
      <Grid
        sx={{
          my: "auto",
        }}
        item
        xs={12}
        md={6}
        
      >
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "blue",
            textTransform: "uppercase",
            
          }}
        >
          <Typewriter
            words={["About US"]}
            loop={2}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />
        </Typography>
      <BasicTabs/>
        <Box sx={{ml:2.5}}>  
          
          <Link target={"_blank"} href="https://www.facebook.com/MissileMan47"><IconButton sx={{"&:hover":{bgcolor:"white"}}} color="info"><FacebookRoundedIcon/></IconButton></Link>
          <Link target={"_blank"} href="https://twitter.com/Abu_Talha2020"><IconButton sx={{"&:hover":{bgcolor:"white"}}} color="secondary"><TwitterIcon/></IconButton></Link>
          <Link target={"_blank"} href="https://www.linkedin.com/in/abutalha2022/"><IconButton sx={{"&:hover":{bgcolor:"white"}}} color="success"><LinkedInIcon/></IconButton></Link>
          <Link target={"_blank"} href="https://www.instagram.com/abu.talha99/"><IconButton sx={{"&:hover":{bgcolor:"white"}}} color="info"><InstagramIcon/></IconButton></Link>
          <Link target={"_blank"} href="https://github.com/Abutalha400212"><IconButton sx={{"&:hover":{bgcolor:"white"}}} color="warning"><GitHubIcon/></IconButton></Link>
          
        </Box>
      </Grid>
      <Grid
        sx={{display:"flex",justifyContent:"center",my:"auto"}}
        item
        xs={12}
        md={6}
      >
        <img src="https://i.ibb.co/qj7dCSP/Profile.png" alt="" width={"70%"} />
      </Grid>
    </Grid>
   </Box>
  );
};

export default Branding;
