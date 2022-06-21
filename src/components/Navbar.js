import { Mail, Notifications, Pets} from "@mui/icons-material";
import {AppBar,Avatar,Badge,Box,Button,InputBase,ListItemText,Menu,MenuItem,styled,Toolbar,Typography} from "@mui/material";
import React, { useState } from "react";
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import { Outlet, useNavigate } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { Link} from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));


function Navbar(){

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  return (
    <>
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography  variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          < MapsHomeWorkIcon onClick = {()=>navigate("/")}/>
        </Typography>
        <Pets sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Typography>
         <ListItemText onClick = {()=>navigate("/products")}> Products </ListItemText>
        </Typography>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <Typography variant="span">Avinash</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem>
          <Button onClick = {()=>navigate("/profile")}>Profile</Button>
        </MenuItem>
        <MenuItem>
          <Button onClick = {()=>navigate("/myaccount")}>My Account</Button>
        </MenuItem>
        <MenuItem>
        <Button onClick = {()=>navigate("/logout")}> Logout </Button>
        </MenuItem>
        <MenuItem>
        <Button onClick = {()=>navigate("/")}> Homepage </Button>
        </MenuItem>
      </Menu>
    </AppBar>
    <Outlet/>
    </>
  );
};
  
export default Navbar;
