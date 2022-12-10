import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import OverflowCard from "../../../../Components/Card/Card";

const Allworks = () => {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    fetch("/works.json")
      .then((res) => res.json())
      .then((data) => setWorks(data));
  }, []);
  return (
   
      <Grid container spacing={2} sx={{
        minHeight:"100vh"
      }} >
        {works.map((work) => (
        <Grid item xs={12} md={4}>
          <OverflowCard work={work} key={work.id} />
        </Grid>
      ))}
      </Grid>
  );
};

export default Allworks;
