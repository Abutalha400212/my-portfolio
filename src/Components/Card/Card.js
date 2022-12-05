import {
  Card,
  Divider,
  Typography,
  Box,
  IconButton,
  Link,
  ButtonGroup,
  Button,
} from "@mui/material";
import * as React from "react";
import IosShareIcon from "@mui/icons-material/IosShare";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function OverflowCard({ work }) {
  const { title, description, link, used, github } = work;
  return (
    <Card
      sx={{
        boxShadow: "2px 2px 2px 1px rgba(2, 2, 2, 0.2)",
        "@media (min-width:600px)": {
          "&:hover": {
            transform: "scale(105%)",
          },
        },
      }}
      variant="outlined"
    >
      <Box
        sx={{
          padding: "0 10px",
        }}
      >
        <Typography
          level="h2"
          sx={{
            fontSize: "20px",
            mt: 2,
            fontFamily: "cursive",
            color: "blue",
            fontWeight: 600,
          }}
        >
          {title}
        </Typography>
        <Typography
          level="body2"
          sx={{ mt: 0.5, mb: 2, fontSize: "15px", fontFamily: "monospace" }}
        >
          {description}
        </Typography>
        <Typography level="body2" sx={{ mt: 0.5, mb: 2 }}>
          <Typography
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              color: "blueviolet",
            }}
          >
            {" "}
            It is used for..
          </Typography>
          {used.map((use) => (
            <ButtonGroup variant="outlined" aria-label="outlined button group">
              <Button
                sx={{
                  fontSize: "12px",
                  marginRight: 0.5,
                  fontFamily:"sans"
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
        variant="soft"
        sx={{
          display: "flex",
          gap: 0.5,
          py: 0.5,
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
    </Card>
  );
}
