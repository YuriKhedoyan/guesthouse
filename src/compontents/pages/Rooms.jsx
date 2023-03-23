import { React, lazy, Suspense } from "react";
import { Container, Grid, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

import housePicture1 from "../../Assets/Images/house.jpg"
import housePicture2 from "../../Assets/Images/house2.jpg"
import housePicture3 from "../../Assets/Images/house3.jpg"
import housePicture4 from "../../Assets/Images/house4.jpg"
import pic1 from "../../Assets/Images/9S5A9235-1-scaled.jpg"

import '../../Assets/Styles/Rooms.sass'

import Header from "../common/Header";
import Img from "../common/Img";

const Rooms = () => {
  return (
    <>
      <Suspense><Img picture={pic1} alt="Spruce branch" imgId="mainImage"/></Suspense>
      <h2 className="centered">ROOMS</h2>
      <Container>
        <div className="top-left">
          <Suspense><Header></Header></Suspense>
        </div>
        <br></br>
        <br></br>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div className="cards">
              <span>
                <Card sx={{ maxWidth: 450 }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={housePicture1}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <h3>Standard Room</h3>
                  </CardContent>
                  <CardActions disableSpacing>
                    <h3>From 53.000 ֏</h3>
                  </CardActions>
                </Card>
              </span>
              <span>
                <Card sx={{ maxWidth: 450 }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={housePicture2}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <h3>Standard Room</h3>
                  </CardContent>
                  <CardActions disableSpacing>
                    <h3>From 53.000 ֏</h3>
                  </CardActions>
                </Card>
              </span>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="cards">
              <span>
                <Card sx={{ maxWidth: 450 }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={housePicture3}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <h3>Standard Room</h3>
                  </CardContent>
                  <CardActions disableSpacing>
                    <h3>From 53.000 ֏</h3>
                  </CardActions>
                </Card>
              </span>
              <span>
                <Card sx={{ maxWidth: 450 }}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={housePicture4}
                    alt="Paella dish"
                  />
                  <CardContent>
                    <h3>Standard Room</h3>
                  </CardContent>
                  <CardActions disableSpacing>
                    <h3>From 53.000 ֏</h3>
                  </CardActions>
                </Card>
              </span>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default Rooms;