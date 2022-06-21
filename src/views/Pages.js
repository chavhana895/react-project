import React, { Component } from 'react'
import './View.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { AppBar, Button, CardActionArea, CardActions, Stack } from '@mui/material';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';


export default class Pages extends Component {
    render() {
        return (
          <>
           <AppBar>
             <Navbar/>
          </AppBar>
             <Sidebar/>
          
            <Stack direction="row" spacing={2} justifyContent="space-between" paddingTop={10} paddingRight={10} paddingLeft={28}>
           <div paddingTop={100} paddingRight={500}>
            <Card sx={{ maxWidth: 345 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://scontent.fnag4-2.fna.fbcdn.net/v/t1.6435-9/106479565_3061702220533925_4415389529350892218_n.jpg?stp=dst-jpg_s261x260&_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=zy3gtDk3nLMAX9QAYzC&_nc_ht=scontent.fnag4-2.fna&oh=00_AT8iNfcsep6hIUWmarLH2tDScOyvoxaZ0UdjVbc7ml-9KA&oe=62BA30C4"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  ZiNDaGI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 <h6>Music Video</h6>
                 <h6>22557 people like this Page</h6>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Like
              </Button>
            </CardActions>
          </Card>
          </div>

          <Card sx={{ maxWidth: 345 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://scontent.fnag4-2.fna.fbcdn.net/v/t1.6435-9/106479565_3061702220533925_4415389529350892218_n.jpg?stp=dst-jpg_s261x260&_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=zy3gtDk3nLMAX9QAYzC&_nc_ht=scontent.fnag4-2.fna&oh=00_AT8iNfcsep6hIUWmarLH2tDScOyvoxaZ0UdjVbc7ml-9KA&oe=62BA30C4"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  ZiNDaGI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 <h6>Music Video</h6>
                 <h6>22557 people like this Page</h6>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Like
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://scontent.fnag4-2.fna.fbcdn.net/v/t1.6435-9/106479565_3061702220533925_4415389529350892218_n.jpg?stp=dst-jpg_s261x260&_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=zy3gtDk3nLMAX9QAYzC&_nc_ht=scontent.fnag4-2.fna&oh=00_AT8iNfcsep6hIUWmarLH2tDScOyvoxaZ0UdjVbc7ml-9KA&oe=62BA30C4"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  ZiNDaGI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 <h6>Music Video</h6>
                 <h6>22557 people like this Page</h6>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Like
              </Button>
            </CardActions>
          </Card>


          <Card sx={{ maxWidth: 345 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://scontent.fnag4-2.fna.fbcdn.net/v/t1.6435-9/106479565_3061702220533925_4415389529350892218_n.jpg?stp=dst-jpg_s261x260&_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=zy3gtDk3nLMAX9QAYzC&_nc_ht=scontent.fnag4-2.fna&oh=00_AT8iNfcsep6hIUWmarLH2tDScOyvoxaZ0UdjVbc7ml-9KA&oe=62BA30C4"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  ZiNDaGI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 <h6>Music Video</h6>
                 <h6>22557 people like this Page</h6>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Like
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 345 }} >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="https://scontent.fnag4-2.fna.fbcdn.net/v/t1.6435-9/106479565_3061702220533925_4415389529350892218_n.jpg?stp=dst-jpg_s261x260&_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=zy3gtDk3nLMAX9QAYzC&_nc_ht=scontent.fnag4-2.fna&oh=00_AT8iNfcsep6hIUWmarLH2tDScOyvoxaZ0UdjVbc7ml-9KA&oe=62BA30C4"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  ZiNDaGI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 <h6>Music Video</h6>
                 <h6>22557 people like this Page</h6>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Like
              </Button>
            </CardActions>
          </Card>
          </Stack>
          </>
        )
    }
}
