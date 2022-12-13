import { Box, Button, Grid} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Audio } from "react-loader-spinner";
import OverflowCard from "../../../Components/Card/Card";
const MyWorks = () => {
  const [works, setWorks] = useState([]);
const [loading,setLoading] = useState(true)
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("https://porfolio-server.vercel.app/projects")
      .then((res) => res.json())
      .then((data) => {
        setWorks(data)
      setLoading(false)
      });
  }, []);
if(loading){
  return <><Audio
  height="100"
  width="100%"
  color="#4fa94d"
  ariaLabel="audio-loading"
  wrapperStyle={{}}
  wrapperClass="wrapper-class"
  visible={true}
/></> 
}
  return (
    <Box sx={{
      minHeight:"100vh",
      py:5
    }}>

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
              mt: 3,
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
