import React, { lazy } from "react";
import { Container, Grid } from "@mui/material";

import eng from "../../locales/eng.json";
import Img from "../../compontents/img/Img";
import images from "../../locales/images.json";
import { withSuspense } from "../../helpers/withSuspense";

const Header = withSuspense(lazy(() => import("../../section/header/Header")));
const Footer = withSuspense(lazy(() => import("../../section/footer/Footer")));

import "./Restaurant.scss";

const { restaurant } = images;
const { restaurantInformation, links } = eng;

const Restaurant = () => {
  return (
    <>
      <Img
        id="mainImage"
        alt="House From Top"
        src={restaurant.restaurant7.src}
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
                alt="Restaurant"
                className="photos"
                src={restaurant.restaurant2.src}
              />
            </div>
          </Grid>
        </Grid>
        <br></br>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <div className="images">
              <Img
                alt="Restaurant"
                className="photos"
                src={restaurant.restaurant3.src}
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
