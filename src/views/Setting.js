import React, { Component } from 'react'
// import './View.css'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import ComputerIcon from '@mui/icons-material/Computer';
import DevicesIcon from '@mui/icons-material/Devices';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SignalWifi1BarLockIcon from '@mui/icons-material/SignalWifi1BarLock';

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
            <div>
      <Stack direction="row" spacing={2} justifyContent="space-between" paddingTop={10} paddingRight={10}>
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

      <Stack direction="row" spacing={2} justifyContent="space-between" paddingTop={10} paddingRight={10}>
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
        )
    }
}
