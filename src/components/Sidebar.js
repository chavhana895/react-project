import {
  AccountBox,
  Article,
  Group,
  Home,
  ModeNight,
  Person,
  Settings,
  Storefront,
} from "@mui/icons-material";
import {
  Box,
  Switch,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const Sidebar = ({mode,setMode}) => {

  const navigate = useNavigate();

  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
             <ListItemText onClick = {()=>navigate("/homepage")}> Homepage </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText onClick = {()=>navigate("/pages")}> Pages </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText onClick = {()=>navigate("/group")}> Groups </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton   >
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText onClick = {()=>navigate("/marketplace")}> Marketplace </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText onClick = {()=>navigate("/friends")}> Friends </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText onClick = {()=>navigate("/setting")}> Settings </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton >
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText onClick = {()=>navigate("/profile")}> Profile </ListItemText>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={e=>setMode(mode === "light" ? "dark" : "light")} />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>

  );
};

export default Sidebar;
