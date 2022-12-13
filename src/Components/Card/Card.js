import {
  Card,
  Divider,
  Typography,
  Box,
  IconButton,
  ButtonGroup,
  Button,
  CardMedia,
} from "@mui/material";
import * as React from "react";
import { LinkMUI, LinkMUI2 } from "../../Styled/Styled";
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import DetailsRoundedIcon from '@mui/icons-material/DetailsRounded';

export default function OverflowCard({ work }) {
  const { title, description, link, used,titleImg,_id } = work;
  return (
    <Card
      sx={{
        boxShadow: "2px 2px 2px 1px rgba(2, 2, 2, 0.2)",
       background:"transparent",
       p:1
      }}
      variant="outlined"
    >
      <Box
        sx={{
          padding: "0 10px",
        }}
      >
<CardMedia
        component="img"
        height="200"
        image={titleImg}
        alt=""

      />
        <Typography
          level="h2"
          sx={{
            fontSize: "20px",
            mt: 1,
            fontFamily: "cursive",
            color: "white",
            fontWeight: 600,
            textTransform:"uppercase"
          }}
        >
          {title}
        </Typography>
        <Typography
          level="body2"
          sx={{ mt: 0.5, mb: 1, fontSize: "15px", fontFamily: "monospace",color:"white" }}
        >
          {description}
        </Typography>
        <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
          <Typography
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "#F300B6",
            }}
          >
            {" "}
            It is used for..
          </Typography>
          {used.map((use) => (
            <ButtonGroup variant="outlined" color="info" aria-label="outlined button group">
              <Button
                sx={{
                  fontSize: "12px",
                  marginRight: 0.5,
                  fontFamily:"sans",
                  color:"white"
                }}
              >
                {use}
              </Button>
            </ButtonGroup>
          ))}
        </Typography>
      </Box>

      <Divider />

      <Box
        sx={{
          display: "flex",
        }}
      >
        <LinkMUI className="" target="_blank" href={link} >
          <IconButton>
           <Button sx={{borderRadius:50,color:"white",fontFamily:"monospace",textTransform:"capitalize"}} size="small"  color="secondary"><LanguageRoundedIcon/>Visit</Button>
          </IconButton>
        </LinkMUI>
        <LinkMUI2 to={`/details/${_id}`}>
          <IconButton><Button sx={{borderRadius:50,color:"white",fontFamily:"monospace",textTransform:"capitalize"}} size="small" color="secondary">
           <DetailsRoundedIcon sx={{mt:-.3}}/> Details
          </Button></IconButton>
        </LinkMUI2>
      </Box>
    </Card>
  );
}
