import { Button, Container, Divider, IconButton, ImageList, ImageListItem, Link, List, ListItem, ListItemButton, ListItemText, ListSubheader, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useLoaderData } from "react-router-dom";
import IosShareIcon from "@mui/icons-material/IosShare";
import GitHubIcon from "@mui/icons-material/GitHub";
const ProjectsDetails = () => {
  const { details, img:projectImg,description,used,link,github } = useLoaderData();
  return (
    <Container>
      <Typography sx={{color:"blue",fontWeight:700, fontFamily:"cursive",fontSize:"20px",mb:2}}>Project Photo Preview</Typography>
        <ImageList cols={3}>
  {projectImg.map((item) => (
    <ImageListItem sx={{"&:hover":{backgroundColor:"white"}}}  key={item._id}
   
    >
      <img
      
        src={`${item}?w=164&h=164&fit=crop&auto=format`}
        srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
        alt={item.title}
        loading="lazy"
      />
    </ImageListItem>
  ))}
</ImageList>
<Divider  sx={{
          fontFamily: "cursive",
          fontWeight: 600,
          color: "white",
        }} textAlign="center">Projection</Divider>
<List
      sx={{
        width: '100%',
        color:"white",
      }}
      subheader={<li />}
    >
     <Typography sx={{color:"blue",fontWeight:700, fontFamily:"cursive",fontSize:"20px",mb:2}}> Short Description</Typography>
            <ListSubheader sx={{color:"black",lineHeight:2}}>{description}</ListSubheader>
            <Typography sx={{color:"blue",fontWeight:700, fontFamily:"cursive",fontSize:"20px",my:1}}>Project Details</Typography>
            {details.map((item) => (
              <ListItem sx={{lineHeight:2,}} key={item}>
                <ListItemText sx={{fontFamily:"monospace"}}  primary={item} />
              </ListItem>
            ))}
       
    </List>
    <Typography sx={{color:"blue",fontWeight:700, fontFamily:"cursive",fontSize:"20px",mb:2}}>Technologies</Typography> 
    <ListItemButton  sx={{lineHeight:2,display:"flex",flexWrap:"wrap",gap:2}}>
    {used.map((item) => (
             
                <Button variant="outlined" color="info">{item}</Button>    ))}
              </ListItemButton>
              <Typography sx={{color:"blue",fontWeight:700, fontFamily:"cursive",fontSize:"20px",mb:2}}>Project Links</Typography> 
              <Box
        variant="soft"
        sx={{
          display: "flex",
          gap: 0.5,
        }}
      >
        <Link target="_blank" href={link}>
          <IconButton color="secondary">
            <IosShareIcon></IosShareIcon>
          </IconButton>
        </Link>
        <Link target="_blank" href={github}>
          <IconButton color="success">
            <GitHubIcon />
          </IconButton>
        </Link>
      </Box>
    </Container>
  );
};

export default ProjectsDetails;
