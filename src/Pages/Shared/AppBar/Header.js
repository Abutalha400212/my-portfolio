import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar, Container, Link } from "@mui/material";
import file from "../../../Assest/Abu Talha Resume.pdf";
import { NavLink } from "react-router-dom";
import "./AppBar.css";
const drawerWidth = 240;

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    <NavLink className={"home"} to={"/home"}>
      Home
    </NavLink>,
    <NavLink className={"home"} to={"/branding"}>
      Brand
    </NavLink>,
    <NavLink className={"home"} to={"/projects"}>
      projects
    </NavLink>,
    <NavLink className={"home"} to={"/contact"}>
      Contact
    </NavLink>,
  ];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}></Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
        marginBottom: "30px",
        backgroundColor: "transparent",
      }}
    >
      <Container component="nav" >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <Box sx={{
              display:"flex",
              alignItems:"center",
              
            }}>
            <Avatar
              alt=""
              src="https://i.ibb.co/qj7dCSP/Profile.png"
              sx={{ width: 56, height: 56 }}
            /> 
            <Typography sx={{
              fontSize:"22px",
              my:"auto",
              fontFamily:"monospace",
              fontWeight:"bold",
              color:"blue"
            }}> PORTFOLIO
            </Typography>
           </Box>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "primary.main", textDecoration: "none" }}
                variant="text"
              >
                {item}
              </Button>
            ))}
            <Link href={file} download>
              {" "}
              <Button
                sx={{
                  fontSize: "15px",
                }}
              >
                Dowload Resume
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </Container>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main">
        <Toolbar />
        <Typography></Typography>
      </Box>
    </Box>
  );
}

Header.propTypes = {
  window: PropTypes.func,
};

export default Header;
