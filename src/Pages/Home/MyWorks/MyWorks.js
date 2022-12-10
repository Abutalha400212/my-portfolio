import { Box, Button, Grid, styled, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import OverflowCard from "../../../Components/Card/Card";
import { LinkMUI } from "../../../Styled/Styled";
const MyWorks = () => {
  const [works, setWorks] = useState([]);
  const [show, setShow] = useState(false);
  const Navlink = styled(Link)((theme) => ({
    textDecoration: "none",
    color:"white"
  }));

  useEffect(() => {
    fetch("/works.json")
      .then((res) => res.json())
      .then((data) => setWorks(data));
  }, []);

  return (
    <Box sx={{
      minHeight:"100vh",
      my:10
    }}>
      <Box
        sx={{
          display: "flex",
          my:2
         
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: 600,
            fontFamily: "monospace",
            color: "primary.blue",
            marginRight: "5px",
          }}
        >
          Some of my Works{" "}
        </Typography>
        <LinkMUI />

        <Button
          sx={{
            fontSize: "10px",
            marginTop: 0,
            backgroundColor: "#f50057",
            marginLeft: "5px",
            textDecoration: "none",
            color: "white",
          }}
        >
          {" "}
          <Navlink to={"/projects"}>
            All Projects
          </Navlink>
        </Button>
      </Box>

      <Box>
        <Grid container spacing={2}>
          {show
            ? works.map((work) => (
                <Grid item xs={12} md={4}>
                  <OverflowCard work={work} key={work.id} />
                </Grid>
              ))
            : works.slice(0, 3).map((work) => (
                <Grid item xs={12} md={4}>
                  <OverflowCard work={work} key={work.id} />
                </Grid>
              ))}
          <Button
            onClick={() => setShow(true)}
            sx={{
              mt: 2,
              width: "30%",
              mx: "auto",
              display: `${show && "none"}`,
            }}
          >
            See All
          </Button>
        </Grid>
      </Box>
    </Box>
  );
};

export default MyWorks;
