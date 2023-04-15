import React, { lazy } from "react";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";

import eng from "../../locales/eng.json";
import Slider from "./../../compontents/slider/Slider";
import { withSuspense } from "../../helpers/withSuspense";

const Img = withSuspense(lazy(() => import("../../compontents/img/Img")));
const Header = withSuspense(lazy(() => import("../../section/header/Header")));

import Footer from "../../section/footer/Footer";
import house from "../../assets/images/house.jpg";

import "./Home.scss";

const Home = () => {
  const { about, roomsInformation } = eng;

  return (
    <>
      <section id="sc1">
        <div className="fullScreen">
          <Slider className="fullScreen"></Slider>
        </div>
        <Container>
          <div className="top-left">
            <Header />
          </div>
        </Container>
      </section>
      <section id="sc2">
        <Container>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <h3 className="texts">{roomsInformation.countOfRooms}</h3>
              <p className="texts">{roomsInformation.categories}</p>
            </Grid>
            <Grid item xs={4}>
              <h3 className="texts">
                <b>Restaurant</b>
                <p className="texts">Restaurant at home</p>
              </h3>
            </Grid>
            <Grid item xs={4}>
              <h3 className="texts">
                <b>24/7</b>
                <p className="texts">Always by your side</p>
              </h3>
            </Grid>
          </Grid>
        </Container>
      </section>
      <br></br>
      <section id="sc3">
        <div>
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <h4 className="texts">Welcome to Khedoyans Guesthouse</h4>
                <p className="texts">{about}</p>
              </Grid>
              <Grid item xs={4}>
                <Img src={house} alt="Restaurant" className="photos" />
              </Grid>
            </Grid>
          </Container>
        </div>
      </section>
      <section id="sc4">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <span id="backgroundImg1">
              <div>
                <p className="texts">
                  {roomsInformation.standardRoom.category}
                </p>
                <p className="texts">{roomsInformation.standardRoom.price}</p>
              </div>
            </span>
          </Grid>
          <Grid item xs={6}>
            <span id="backgroundImg2">
              <div>
                <p className="texts">{roomsInformation.deluxe.category}</p>
                <p className="texts">{roomsInformation.deluxe.price}</p>
              </div>
            </span>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <span id="backgroundImg3">
              <div>
                <p className="texts">
                  {roomsInformation.deluxeSuperior.category}
                </p>
                <p className="texts">{roomsInformation.deluxeSuperior.price}</p>
              </div>
            </span>
          </Grid>
          <Grid item xs={6}>
            <span id="backgroundImg4">
              <div>
                <p className="texts">{roomsInformation.duplex.category}</p>
                <p className="texts">{roomsInformation.duplex.price}</p>
              </div>
            </span>
          </Grid>
        </Grid>
        <Link to="/rooms" className="links">
          <div id="linkToRooms">
            <br></br>
            <p>All rooms</p>
          </div>
        </Link>
      </section>
      <section id="sc6">
        <p className="texts">Our Benefits</p>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <p className="texts yellow">High Class Rooms</p>
          </Grid>
          <Grid item xs={4}>
            <p className="texts">Wonderful Nature</p>
          </Grid>
          <Grid item xs={4}>
            <p className="texts yellow">Best Cuisine</p>
          </Grid>
        </Grid>
        <br></br>
        <br></br>
      </section>
      <Footer></Footer>
    </>
  );
};

export default Home;
