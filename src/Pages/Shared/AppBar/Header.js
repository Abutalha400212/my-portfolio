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
import { Avatar, Container } from "@mui/material";
import { Link, NavLink } from "react-router-dom";
import "./AppBar.css";
const drawerWidth = 240;

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const navItems = [
    <NavLink className={"home"} to={"/projects"}>
      projects
    </NavLink>,
    <NavLink className={"home"} to={"/skill"}>
      Skills
    </NavLink>,
    <NavLink className={"home"} to={"/contact"}>
      Contact
    </NavLink>,
    
    <NavLink className={"home"} to={"/about"}>
      About US
    </NavLink>,
    <NavLink className={"home"} to={"/blog"}>
      Blogs
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
      }}
    >
      <Container component="nav">
        <Toolbar>
          <IconButton
            color="info"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <Link to="/">
              <Avatar
                alt=""
                src="https://i.ibb.co/7kJpRht/download.png"
                sx={{ width: 50, height: 50}}
              /></Link>
           
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{ color: "secondary", textDecoration: "none" }}
                variant="text"
              >
                {item}
              </Button>
            ))}

            <Button
            variant="contained"
            color="info"
              sx={{
                fontSize: "15px",
              }}
            >
              Hire ME
            </Button>
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
