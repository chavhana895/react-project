import * as React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Stack, Paper, styled, Typography, AppBar} from '@mui/material';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function Friends() {

 
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
      <>
      <AppBar>
          <Navbar/>
          </AppBar>
          <Sidebar/>
              {/* <h3>Friend Requests</h3> */}
      <Stack direction="row" spacing={2} justifyContent="space-between" paddingTop={10} paddingLeft={28}>
        <Item>
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              // image="/static/images/cards/contemplative-reptile.jpg"
              image="https://source.unsplash.com/random"
              
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                  Avinash Chavhan
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Accept</Button>
              <Button size="small">Cancel Request</Button>
            </CardActions>
    </Card>
        </Item>


        <Item>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        // image="/static/images/cards/contemplative-reptile.jpg"
        image="https://source.unsplash.com/random"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Avinash Chavhan
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Accept</Button>
        <Button size="small">Cancel Request</Button>
      </CardActions>
    </Card>
        </Item>


        <Item>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        // image="/static/images/cards/contemplative-reptile.jpg"
        image="https://source.unsplash.com/random"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Avinash Chavhan
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Accept</Button>
        <Button size="small">Cancel Request</Button>
      </CardActions>
    </Card>
        </Item>



        <Item>
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        // image="/static/images/cards/contemplative-reptile.jpg"
        image="https://source.unsplash.com/random"
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            Avinash Chavhan
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Accept</Button>
        <Button size="small">Cancel Request</Button>
      </CardActions>
    </Card>
        </Item>




      </Stack>

     
    
  
   </>
      
  );
}
