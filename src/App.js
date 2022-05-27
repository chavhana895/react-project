import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import Rightbar from "./components/Rightbar"
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar"
import Add from "./components/Add"
import { useState } from "react";
import Homepage from "./views/Homepage";
import Friends from "./views/Friends";
import Groups from "./views/Groups";
import Marketplace from "./views/Marketplace";
import Pages from "./views/Pages";
import Profile from "./views/Profile";
import Setting from "./views/Setting";
import MyAccount from "./views/MyAccount";
import Logout from "./views/Logout"
import {Route,Routes} from "react-router-dom";


function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  
  return (
    <ThemeProvider theme={darkTheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar setMode={setMode} mode={mode}/>
        <Routes >
         <Route exact path="/" element={<> <Feed/> <Rightbar/> </>} />
         {/* <Route exact path="/" element={Rightbar}/> */}
         <Route exact path="/homepage" element={<Homepage/>} />
         <Route exact path="/friends" element={<Friends/>} />
         <Route exact path="/group" element={<Groups/>} />
         <Route exact path="/marketplace" element={<Marketplace/>} />
         <Route exact path="/pages" element={<Pages/>} />
         <Route exact path="/profile" element={<Profile/>} /> 
         <Route exact path="/setting" element={<Setting/>} />  
         <Route exact path="/myaccount" element={<MyAccount/>} />
         <Route exact path="/logout" element={<Logout/>} /> 
          {/* <Route path="*" element={ErrorPage} /> */}
        </Routes>  
          {/* <Feed />
          <Rightbar />   */}
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
