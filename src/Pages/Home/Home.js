import { Container, Divider } from "@mui/material";
import Branding from "./Branding/Branding";
import MyWorks from "./MyWorks/MyWorks";
import PersonalInfo from "./PersonalInfo/PersonalInfo";

const Home = () => {
  return (
    <Container> 
      <Divider sx={{
        fontFamily:"cursive",
        fontWeight:600,
        color:"#516395"
      }}  textAlign="left">Personal Info</Divider>
      <PersonalInfo/>
      <Divider sx={{
        fontFamily:"cursive",
        fontWeight:600,
        color:"#516395"
      }} textAlign="right">Motivational Branding</Divider>
      <Branding />
      <Divider sx={{
        fontFamily:"cursive",
        fontWeight:600,
        color:"#516395"
      }}  textAlign="left">Development</Divider>
<MyWorks/>
    </Container>
  );
};
export default Home;
