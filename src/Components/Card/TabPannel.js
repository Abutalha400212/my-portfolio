import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import SchoolIcon from '@mui/icons-material/School';
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ py: 2 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Short Bio" {...a11yProps(0)} />
          <Tab label="Experience" {...a11yProps(1)} />
          <Tab label="Education" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontWeight: 600,
          }}
        >
          <PersonPinIcon /> HI, This is Abu Talha
        </Typography>
        <Typography sx={{ ml: 3.5, fontSize: 16, fontFamily: "raleway" }}>
        I have a well-rounded skill set in HTML, CSS, and JavaScript, as well
          as some of the powerful frameworks and libraries that can bring a
          user-focused website. I can properly use technologies like React JS,
          Bootstrap, DOM manipulation and coding libraries like Node JS, JQuery
          to help site user’s save time.
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontWeight: 600,
          }}
        >
          <HomeWorkIcon /> Work at Home
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            color: "gray",
            ml: 3.5,
            fontFamily: "monospace",
          }}
        >
          January2019-running
        </Typography>
        <Typography sx={{ ml: 3.5, fontSize: 16, fontFamily: "raleway" }}>
          Concentration:Structured Programming Language, Data Structures,
          JavaScript & UI design and development
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Typography
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
            fontWeight: 600,
          }}
        >
          <SchoolIcon /> BSS Degree in Mujibnagar Govt. Degree College, Meherpur
        </Typography>
        <Typography
          sx={{
            fontSize: "12px",
            color: "gray",
            ml: 3.5,
            fontFamily: "monospace",
          }}
        >
          January2019-running
        </Typography>
        <Typography sx={{ ml: 3.5, fontSize: 16, fontFamily: "raleway" }}>
          Although I do not have an academic CSE degree, But my interest makes
          me highly passionate and helps me to figure out how things work with
          computers
        </Typography>
      </TabPanel>
    </Box>
  );
}
