import { Box } from '@mui/system';
import React from 'react';
import ReactSkillbar from 'react-skillbars';

const Skills = () => {

    const skills = [
      { type: 'Java', level: 100,color: { bar: "#010EFF"} },
      { type: 'React', level: 95,color: { bar: "#00078C"} },
      { type: 'Javascript', level: 85,color: { bar: "#69306D"} },
      { type: 'HTML', level: 90 ,color:{bar:"#DB10E9"}},
      { type: 'NoSQL', level: 70,color:{bar:"#FF1B41"} }
    ];
    const colors = {
      bar: "#3498db",
      title: {
        text: "#fff",
        background: "#2980b9"
      }
    };
    return (
       <Box sx={{
        backgroundImage:"url(https://i.ibb.co/wJ53gfr/stacked-steps-haikei.png)",
        backgroundSize:"cover",
        backgroundPosition:"center",
        p:5,
        my:5
       }}>
         <ReactSkillbar skills={skills} colors={colors} height='7vh' />
       </Box>
    );
};

export default Skills;