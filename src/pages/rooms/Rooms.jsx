import React, { lazy } from "react";
import {
  Container,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@mui/material";

import staticValues from "../../staticValues.json";
import { withSuspense } from "../../helpers/withSuspense";

import housePicture1 from "../../assets/images/house.jpg";
import housePicture2 from "../../assets/images/house2.jpg";
import housePicture3 from "../../assets/images/house3.jpg";
import housePicture4 from "../../assets/images/house4.jpg";
import pic1 from "../../assets/images/9S5A9235-1-scaled.jpg";

import "./Rooms.scss";

const Rooms = () => {
  const { roomsInformation, links } = staticValues;

  const Header = withSuspense(
    lazy(() => import("../../section/header/Header"))
  );
  const Footer = withSuspense(
    lazy(() => import("../../section/footer/Footer"))
  );
  const Img = withSuspense(lazy(() => import("../../compontents/img/Img")));

  return (
    <>
      <Img pathToPicture={pic1} alt="Spruce branch" pictureId="mainImage" />
      <h2 className="centered">{links.rooms}</h2>
      <Container>
        <div className="top-left">
          <Header></Header>
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
                    <h3>{roomsInformation.standardRoom.category}</h3>
                  </CardContent>
                  <CardActions disableSpacing>
                    <h3>{roomsInformation.standardRoom.price}</h3>
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
                    <h3>{roomsInformation.deluxeSuperior.category}</h3>
                  </CardContent>
                  <CardActions disableSpacing>
                    <h3>{roomsInformation.deluxeSuperior.price}</h3>
                  </CardActions>
                </Card>
              </span>
            </div>
          </Grid>
          <br></br>
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
                    <h3>{roomsInformation.deluxe.category}</h3>
                  </CardContent>
                  <CardActions disableSpacing>
                    <h3>{roomsInformation.deluxe.price}</h3>
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
                    <h3>{roomsInformation.duplex.category}</h3>
                  </CardContent>
                  <CardActions disableSpacing>
                    <h3>{roomsInformation.duplex.price}</h3>
                  </CardActions>
                </Card>
              </span>
            </div>
          </Grid>
        </Grid>
        <br></br>
      </Container>
      <Footer></Footer>
    </>
  );
};
export default Rooms;
