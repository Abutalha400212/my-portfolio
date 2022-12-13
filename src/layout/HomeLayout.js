import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Branding from '../Pages/Home/Branding/Branding';
import PersonalInfo from '../Pages/Home/PersonalInfo/PersonalInfo';
import Skills from '../Pages/Home/Skills/Skills';
import Header from '../Pages/Shared/AppBar/Header';
import MyWorks from '../Pages/Home/MyWorks/MyWorks'
import Footer from '../Pages/Shared/Footer/Footer';
import Contact from '../Pages/Home/Contact/Contact';
const HomeLayout = () => {
    return (
        <Box>
            <Box sx={{
            backgroundImage:"url(https://img.freepik.com/free-vector/gradient-network-connection-background_23-2148881321.jpg?w=740&t=st=1670769497~exp=1670770097~hmac=e10db5e3148fefc86b3951dd1da656b83cb84591d89ec4a8a88883779601e63d)",
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat"
           }}>
            <Header/>
           <Container>
           <PersonalInfo/>
           </Container>
        </Box>
        <Box sx={{
            background:"#F7F6C5",
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat"
        }}>
            <Container>
            <Branding/>
            </Container>
        </Box>
        <Box sx={{
            background:"url(https://i.ibb.co/WW3VQFn/img2.jpg)",
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat"
        }}>
            <Container>
           <Skills/>
            </Container>
        </Box>
        <Box sx={{
            background:"url(https://img.freepik.com/free-vector/realistic-handset-concept_1284-34781.jpg?w=826&t=st=1670934136~exp=1670934736~hmac=d44100e7e2071ed6b38267c46958a7b00dee6fe6654ca95c76c204faa0099af1)",
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat"
        }}>
            <Container>
            <Contact/>
            </Container>
        </Box>
        <Box sx={{
           background:"url(https://wallpaperaccess.com/full/1525675.jpg)",
            backgroundPosition:"center",
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat"
        }}>
            <Container>
          <MyWorks/>
            </Container>
               <Footer/>
        </Box>
       
         
    
        </Box>
    );
};

export default HomeLayout;