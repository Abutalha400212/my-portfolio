import React from "react";
import { Button, Grid, Typography } from "@mui/material";

const Branding = () => {
  return (
    <Grid sx={{
      padding:"15px"
    }} container spacing={5}>
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
            color: "primary.blue",
            textTransform: "uppercase",
          }}
        >
          As a proficient Web Developer,{" "}
        </Typography>
        <Typography
          sx={{
            textAlign: "justify",
            fontSize: 18,

            color: "primary.main",
            fontFamily: "raleway",
          }}
        >
          {" "}
          I have a well-rounded skill set in HTML, CSS, and JavaScript, as well
          as some of the powerful frameworks and libraries that can bring a
          user-focused website. I can properly use technologies like React JS,
          Bootstrap, DOM manipulation and coding libraries like Node JS, JQuery
          to help site user’s save time.
        </Typography>
        <Button
          sx={{
            bgcolor: "primary.blue",
          }}
        >
          Hire Me
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <img
          src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?w=740&t=st=1670129440~exp=1670130040~hmac=03af2278c3d1855f9729d965a0014d725307138bd29b148ba4a8d6afd19b682c"
          alt=""
          width={"100%"}
        />
      </Grid>
    </Grid>
  );
};

export default Branding;
