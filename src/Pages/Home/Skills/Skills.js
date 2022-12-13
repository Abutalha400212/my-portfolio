import { Box } from '@mui/system';
import React from 'react';
import ReactSkillbar from 'react-skillbars';

const Skills = () => {

    const skills = [
      { type: 'HTML', level: 90 ,color:{bar:"#F3005D"}},
      { type: 'JavaScript', level: 85,color: { bar: "#0014f5"} },
      { type: 'React JS', level: 95,color: { bar: "#00078C"} },
      { type: 'Express JS', level: 55,color: { bar: "#93387c"} },
      { type: 'Node JS', level: 35,color: { bar: "blue"} },
      { type: 'NoSQL', level: 70,color:{bar:"#FFFFFF"} },
      { type: 'UIX', level: 50,color:{bar:"#F50072"} },

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
         minHeight:"100vh",
        }} >
        <Box sx={{pt:12}}> <ReactSkillbar  skills={skills} colors={colors} height="8vh" /></Box>
       </Box>
    );
};

export default Skills;