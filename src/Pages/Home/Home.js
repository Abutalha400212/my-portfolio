import { Container, Divider } from "@mui/material";
import HomeLayout from "../../layout/HomeLayout";
import Branding from "./Branding/Branding";
import Contact from "./Contact/Contact";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <>
     {/* <Divider
        sx={{
          fontFamily: "cursive",
          fontWeight: 600,
          color: "white",
        }}
        textAlign="left"
      >
        Personal Info
      </Divider>
      <PersonalInfo /> */}
      <HomeLayout/>
      <Divider
        sx={{
          fontFamily: "cursive",
          fontWeight: 600,
          color: "white",
        }}
        textAlign="right"
      >
        About US
      </Divider>
      <Branding />
      <Divider
        sx={{
          fontFamily: "cursive",
          fontWeight: 600,
          color: "white",
          my:3
        }}
        textAlign="left"
      >
       Skills
      </Divider>
      <Skills/>
      <Divider
        sx={{
          fontFamily: "cursive",
          fontWeight: 600,
          color: "white",
         
        }}
        textAlign="left"
      >
        Development
      </Divider>
   
   
      <Divider
        sx={{
          fontFamily: "cursive",
          fontWeight: 600,
          color: "white",
          marginTop:'50px',
          my:3
        }}
        textAlign="right"
      >
        Contact Info
      </Divider>
      <Contact />
    </>
  );
};
export default Home;
