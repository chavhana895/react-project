import React, { Component } from 'react'
// import './View.css'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { AppBar, Grid, Typography } from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';
import DevicesIcon from '@mui/icons-material/Devices';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SignalWifi1BarLockIcon from '@mui/icons-material/SignalWifi1BarLock';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default class Settings extends Component {
    render() {
        return (
            <>
             <AppBar>
                <Navbar/>
             </AppBar>

             <Sidebar/>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="flex-start"

                >
            <div>
      <Stack direction="row" spacing={2} justifyContent="space-between" paddingTop={10}  paddingLeft={20}>
        <Item>  <h3>
            <ComputerIcon fontSize='small'/>
           System</h3>
            <Typography>Disply,Sound,Notification,Power</Typography>
        </Item>
        <Item>
        <h3> 
            <DevicesIcon fontSize='small' /> Devices
        </h3>
            <Typography>Bluetooth,Printer,Mouse</Typography>
        </Item>
        <Item>
        <h3> <PhoneAndroidIcon /> Phone</h3>
            <Typography>Link your Adroid, iPhone</Typography>
        </Item>
        <Item>
        <h3> <SignalWifi1BarLockIcon/> Network</h3>
            <Typography>Wi-Fi, airoplane mode, VPN</Typography>
        </Item>
      </Stack>

      <Stack direction="row" spacing={2} justifyContent="space-between" paddingTop={10} paddingLeft={20}>
        <Item>  <h3>
            <ComputerIcon fontSize='small'/>
           System</h3>
            <Typography>Disply,Sound,Notification,Power</Typography>
        </Item>
        <Item>
        <h3> 
            <DevicesIcon fontSize='small' /> Devices
        </h3>
            <Typography>Bluetooth,Printer,Mouse</Typography>
        </Item>
        <Item>
        <h3> <PhoneAndroidIcon /> Phone</h3>
            <Typography>Link your Adroid, iPhone</Typography>
        </Item>
        <Item>
        <h3> <SignalWifi1BarLockIcon/> Network</h3>
            <Typography>Wi-Fi, airoplane mode, VPN</Typography>
        </Item>
      </Stack>
      
    </div>
    </Grid>
    </>
        )
    }
}
