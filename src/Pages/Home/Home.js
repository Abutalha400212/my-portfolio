import { Container, Divider } from "@mui/material";
import Branding from "./Branding/Branding";
import Contact from "./Contact/Contact";
import MyWorks from "./MyWorks/MyWorks";
import PersonalInfo from "./PersonalInfo/PersonalInfo";
import Skills from "./Skills/Skills";

const Home = () => {
  return (
    <Container>
     <Divider
        sx={{
          fontFamily: "cursive",
          fontWeight: 600,
          color: "#516395",
        }}
        textAlign="left"
      >
        Personal Info
      </Divider>
      <PersonalInfo />
      <Divider
        sx={{
          fontFamily: "cursive",
          fontWeight: 600,
          color: "#516395",
        }}
        textAlign="right"
      >
        Motivational Branding
      </Divider>
      <Branding />
      <Divider
        sx={{
          fontFamily: "cursive",
          fontWeight: 600,
          color: "#516395",
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
          color: "#516395",
         
        }}
        textAlign="left"
      >
        Development
      </Divider>
   
      <MyWorks />
      <Divider
        sx={{
          fontFamily: "cursive",
          fontWeight: 600,
          color: "#516395",
          marginTop:'50px'
        }}
        textAlign="right"
      >
        Contact Info
      </Divider>
      <Contact />
    </Container>
  );
};
export default Home;
