import React, {useState} from 'react'
import axios from 'axios'
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'

function FetchNews() {

   const [news,setNews] = useState([])

    const fetchNews = () =>{
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=3dbd0d78ab3f4c34abfbde577051b243")
    .then((response)=>{
        console.log(response)
       setNews(response.data.articles)
    })
  }

  return (
    <>
       <Box className="container">
         <Button onClick={fetchNews} > FetchNews </Button> 
       </Box>
       
       <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {news.map((value) => (
              <Grid xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={value.urlToImage}
                    alt="img"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {value.title}
                    </Typography>
                    <Typography>
                      {value.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
     </>
)}
export default FetchNews
