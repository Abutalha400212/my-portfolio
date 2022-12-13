import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import OverflowCard from "../../../../Components/Card/Card";

const Allworks = () => {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    fetch("https://porfolio-server.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => setWorks(data));
  }, []);
  return (
   <Box sx={{
    background:"linear-gradient(to right, #000046, #1cb5e0)",
    backgroundPosition:"center",
    backgroundSize:"cover",
    p:2,mt:2,
   }}>
    
    <Grid container spacing={2} sx={{
        minHeight:"100vh"
      }} >
        {works.map((work) => (
        <Grid item xs={12} md={4}>
          <OverflowCard work={work} key={work.id} />
        </Grid>
      ))}
      </Grid>
   </Box>
  );
};

export default Allworks;
