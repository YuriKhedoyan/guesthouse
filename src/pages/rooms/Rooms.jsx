import React, { lazy } from "react";
import { Container, Grid, Card, CardActions, CardContent, CardMedia } from "@mui/material";

import eng from "../../locales/eng.json";
import images from "../../locales/images.json";
import { withSuspense } from "../../helpers/withSuspense";

import "./Rooms.scss";

const Rooms = () => {
  const Header = withSuspense(lazy(() => import("../../section/header/Header")));
  const Footer = withSuspense(lazy(() => import("../../section/footer/Footer")));
  const Img = withSuspense(lazy(() => import("../../compontents/img/Img")));

  const { rooms, otherPictures } = images;
  const { roomsInformation, links } = eng;
  const props = {
    standardRoom: {
      height: "300",
      component: "img",
      alt: rooms.standardRoom.src,
      image: rooms.standardRoom.src,
    },
    deluxe: {
      height: "300",
      component: "img",
      alt: rooms.deluxe.src,
      image: rooms.deluxe.src,
    },
    duplex: {
      height: "300",
      component: "img",
      alt: rooms.duplex.src,
      image: rooms.duplex.src,
    },
    deluxeSuperior: {
      height: "300",
      component: "img",
      alt: rooms.deluxeSuperior.src,
      image: rooms.deluxeSuperior.src,
    },
    headerImg: {
      id: "mainImage",
      src: otherPictures.spruceBranch.src,
      alt: otherPictures.spruceBranch.alt,
    },
  };

  return (
    <>
      <Img {...props.headerImg} />
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
                  <CardMedia {...props.standardRoom} />
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
                  <CardMedia {...props.deluxeSuperior} />
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
                  <CardMedia {...props.deluxe} />
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
                  <CardMedia {...props.duplex} />
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
