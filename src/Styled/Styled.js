import { Link, styled } from "@mui/material";
import { NavLink } from "react-router-dom";
export const LinkMUI = styled(Link)(({ theme }) => ({
    textDecoration:"none",

}));

export const LinkMUI2 = styled(NavLink)(({ theme }) => ({
    textDecoration:"none"

}));

