import { Box} from '@mui/material';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
const Blogs = () => {
    const handleType = (count) => {
 
        console.log(count)}
      
    
      const handleDone = () => {
        console.log(`Done after 5 loops!`)
      }
    return (
        <Box sx={{minHeight:"50vh", fontSize:"50px",
    color:"blue",
    fontFamily:"cursive",
    textAlign:"center"}}>

<Typewriter
            words={["Comming Soon"]}
            loop={2}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
            onLoopDone={handleDone}
            onType={handleType}
          />

        </Box>
    );
};

export default Blogs;