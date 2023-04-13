import React, { lazy } from "react";
import { Container, Grid } from "@mui/material";

import Img from "../../compontents/img/Img";
import eng from "../../locales/eng.json";
import { withSuspense } from "../../helpers/withSuspense";

import restaurant2 from "../../assets/images/restaurant2.jpg";
import restaurant7 from "../../assets/images/restaurant7.jpg";

const Header = withSuspense(lazy(() => import("../../section/header/Header")));
const Footer = withSuspense(lazy(() => import("../../section/footer/Footer")));

import "./Restaurant.scss";

const Restaurant = () => {
  const { restaurantInformation, links } = eng;

  return (
    <>
      <Img
        src={restaurant7}
        alt="House From Top"
        id="mainImage"
      />
      <h2 className="centered">{links.restaurant}</h2>
      <Container>
        <div className="top-left">
          <Header></Header>
        </div>
      </Container>
      <br></br>
      <br></br>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <h3>Breakfast</h3>
            <br></br>
            <p>{restaurantInformation.breakfast}</p>
          </Grid>
          <Grid item xs={7}>
            <div className="images">
              <Img
                pathToPicture={restaurant2}
                className="photos"
                alt="Restaurant"
              />
            </div>
          </Grid>
        </Grid>
        <br></br>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <div className="images">
              <Img
                pathToPicture={restaurant7}
                className="photos"
                alt="Restaurant"
              />
            </div>
          </Grid>
          <Grid item xs={7}>
            <h3>Dinner</h3>
            <br></br>
            <p>{restaurantInformation.dinner}</p>
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Restaurant;
