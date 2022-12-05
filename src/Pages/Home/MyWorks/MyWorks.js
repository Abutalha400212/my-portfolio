import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import OverflowCard from "../../../Components/Card/Card";
import { LinkMUI } from "../../../Styled/Styled";

const MyWorks = () => {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    fetch("/works.json")
      .then((res) => res.json())
      .then((data) => setWorks(data));
  }, []);

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          marginBottom: "20px",
          marginTop: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: 400,
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
            fontSize: "15px",
            marginTop: 0,
            backgroundColor: "#f50057",
            marginLeft: "5px",
          }}
        >
          All Works
        </Button>
      </Box>

      <Box>
        <Grid container spacing={2}>
          {works.map((work) => (
            <Grid item xs={12} md={4}>
              <OverflowCard work={work} key={work.id} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{
          display:"flex",
          justifyContent:"center",
        }}>
        </Box>
      </Box>
    </Box>
  );
};

export default MyWorks;
