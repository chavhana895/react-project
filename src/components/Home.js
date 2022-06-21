import { AppBar, Box, createTheme, Stack, ThemeProvider } from '@mui/material'
import React from 'react'
import Feed from './Feed'
import Navbar from './Navbar'
import Rightbar from './Rightbar'
import Sidebar from './Sidebar'
import { useState } from "react";

function Homepage() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={"background.default"} color={"text.primary"}>
     <AppBar>
      <Navbar />
      </AppBar>
      <Stack direction="row" spacing={2} justifyContent="space-between">
      <Sidebar setMode={setMode} mode={mode}/>
        <Feed />
        <Rightbar />  
      </Stack>
      {/* <Add /> */}
    </Box>
  </ThemeProvider>

  )
}

export default Homepage