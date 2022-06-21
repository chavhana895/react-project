import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar"
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Add from "./components/Add"
import { useState } from "react";
import Homepage from "./views/Homepage";
import Friends from "./views/Friends";
import Marketplace from "./views/Marketplace";
import Pages from "./views/Pages";
import Profile from "./views/Profile";
import Setting from "./views/Setting";
import MyAccount from "./views/MyAccount";
import Logout from "./views/Logout"
import {Route,Routes} from "react-router-dom";
import Album from "./views/Album";
import SignUp from './views/signup/SignUp'
import Products from "./nestedRoute/components/products/Products";
import Search from "./nestedRoute/components/products/Search";
import ListProducts from "./nestedRoute/components/products/ListProducts";
import AddProduct from "./nestedRoute/components/products/AddProduct";
import ProductDisplay from "./nestedRoute/components/products/ProductDisplay";
import FetchNews from "./axiosComp/FetchNews";


function App() {

  return (
      <>
        <Routes >
        <Route  path="/" element={<Home/>} />
         <Route exact path="/sidebar" element={<Sidebar/>} />
         <Route exact path="/homepage" element={<Homepage/>} />
         <Route path="friends" element={<Friends/>} />
         <Route exact path="/album" element={<Album/>} />
         <Route exact path="/marketplace" element={<Marketplace/>} />
         <Route exact path="/pages" element={<Pages/>} />
         <Route exact path="/profile" element={<Profile/>} /> 
         <Route exact path="/setting" element={<Setting/>} />  
         <Route exact path="/logout" element={<SignUp/>} /> 
         <Route path="myaccount" element={<FetchNews/>} />
         <Route path="products" element={<Products />}>
          <Route path="search" element={<Search />} />
          <Route path="list" element={<ListProducts />} />
          <Route path="add" element={<AddProduct />} />
          <Route path=":id" element={<ProductDisplay />} />
        </Route>
        
        </Routes> 
        </> 
  );
}

export default App;
