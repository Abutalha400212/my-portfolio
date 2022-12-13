import { Box, Button, FormControl, Grid, IconButton, Input, InputLabel, Link, TextField, Typography } from "@mui/material";
import React from "react";
import CallIcon from '@mui/icons-material/Call';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AddLocationAltRoundedIcon from '@mui/icons-material/AddLocationAltRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
const Contact = () => {
  return (
      <Grid sx={{
        padding:"15px",
      minHeight:"100vh"
      }} container spacing={2}>
        <Grid sx={{
          
          width:"100%",
          my:"auto"
        }} item md={6} sm={12} >
          <Typography sx={{
            fontSize:"24px",
            fontFamily:"cursive",
            fontWeight:600,
            color:"black",
            ml:3,
            mt:3
          }}>
            Contact Information
          </Typography>
          <Typography
          sx={{
            fontSize: "17px",
            color: "black",
          my:2,
          ml:3,
            fontFamily: "monospace",
           
          }}
        >
            Fill up the form and <br />
            I will get back to you within 24 hours.
        </Typography>
          <Box sx={{
            marginTop:10,
            marginLeft:2,
            display:"flex",
            flexDirection:"column",
            gap:"30px"
          }}>
          <Typography sx={{display:"flex",alignItems:"center",gap:2, fontSize: 22, fontFamily: "-moz-initial",color:"black" }}><CallIcon color="secondary"/> +880 1755-327723</Typography>
          <Typography sx={{display:"flex",alignItems:"center",gap:2, fontSize: 20, fontFamily: "monospace",color:"black" }}><EmailRoundedIcon color="info"/>abutalha141999@gmail.com</Typography>
          <Typography sx={{display:"flex",alignItems:"center",gap:2, fontSize: 20, fontFamily: "monospace",color:"black" }}><AddLocationAltRoundedIcon color="success"/>Meherpur,Khulna,Bangladesh</Typography>
          </Box>
        
          <Box sx={{mt:10,ml:1.5}}>  
          
          <Link target={"_blank"} href="https://www.facebook.com/MissileMan47"><IconButton sx={{"&:hover":{bgcolor:"white"}}} color="info"><FacebookRoundedIcon/></IconButton></Link>
          <Link target={"_blank"} href="https://twitter.com/Abu_Talha2020"><IconButton sx={{"&:hover":{bgcolor:"white"}}} color="secondary"><TwitterIcon/></IconButton></Link>
          <Link target={"_blank"} href="https://www.linkedin.com/in/abutalha2022/"><IconButton sx={{"&:hover":{bgcolor:"white"}}} color="success"><LinkedInIcon/></IconButton></Link>
          <Link target={"_blank"} href="https://www.instagram.com/abu.talha99/"><IconButton sx={{"&:hover":{bgcolor:"white"}}} color="info"><InstagramIcon/></IconButton></Link>
          <Link target={"_blank"} href="https://github.com/Abutalha400212"><IconButton sx={{"&:hover":{bgcolor:"white"}}} color="warning"><GitHubIcon/></IconButton></Link>
          </Box>
        </Grid>
        <Grid item md={6} sm={12} sx={{width:"100%",my:"auto"}}>
        <Typography sx={{
            fontSize:"24px",
            fontFamily:"cursive",
            fontWeight:600,
            color:"black",
            textAlign:"center",
            my:3,
          }}>
            Contact Me
          </Typography>
        <Box sx={{width:{sm:"100%",md:"80%"},mx:"auto",display:"flex",flexDirection:"column",gap:"30px",padding:"10px"}}>
        <FormControl fullWidth>
  <InputLabel htmlFor="my-input">Your Name</InputLabel>
  <Input fullWidth id="my-input" aria-describedby="my-helper-text" />
</FormControl>
        <FormControl fullWidth>
  <InputLabel htmlFor="my-input">Your Email</InputLabel>
  <Input fullWidth id="my-input" aria-describedby="my-helper-text" />
</FormControl>
        <FormControl fullWidth>
        <InputLabel htmlFor="my-input">Your Message</InputLabel>
  <Input fullWidth id="my-input" aria-describedby="my-helper-text" />
</FormControl>
<Button sx={{
            width:"30%",
            mx:"auto"
          }} variant="contained">Submit<ArrowForwardRoundedIcon/></Button>
        </Box>
          
        </Grid>
        
      </Grid>
  );
};

export default Contact;
