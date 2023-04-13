import { lazy, React } from "react";
import { Container, Grid } from "@mui/material";

import Img from "../../compontents/img/Img";
import eng from "../../locales/eng.json";
import { withSuspense } from "../../helpers/withSuspense";

import house from "../../assets/images/house.jpg";
import house1 from "../../assets/images/house1.jpg";
import house2 from "../../assets/images/house2.jpg";
import house3 from "../../assets/images/house3.jpg";
import house4 from "../../assets/images/house4.jpg";
import garden1 from "../../assets/images/garden1.jpg";
import garden2 from "../../assets/images/garden2.jpg";
import garden3 from "../../assets/images/garden3.jpg";
import garden4 from "../../assets/images/garden4.jpg";
import garden5 from "../../assets/images/garden5.jpg";
import garden6 from "../../assets/images/garden6.jpg";
import garden7 from "../../assets/images/garden7.jpg";
import garden8 from "../../assets/images/garden8.jpg";
import garden9 from "../../assets/images/garden9.jpg";
import garden10 from "../../assets/images/garden10.jpg";
import restaurant1 from "../../assets/images/restaurant1.jpg";
import restaurant2 from "../../assets/images/restaurant2.jpg";
import restaurant3 from "../../assets/images/restaurant3.jpg";
import restaurant4 from "../../assets/images/restaurant4.jpg";
import restaurant5 from "../../assets/images/restaurant5.jpg";
import restaurant6 from "../../assets/images/restaurant6.jpg";
import restaurant7 from "../../assets/images/restaurant7.jpg";
import houseRestaurant from "../../assets/images/houseRestaurant.jpg";

import "./Gallery.scss";

const Header = withSuspense(lazy(() => import("../../section/header/Header")));
const Footer = withSuspense(lazy(() => import("../../section/footer/Footer")));

const Gallery = () => {
  const { links } = eng;
  return (
    <>
      <Img
        src={house2}
        alt="House From Top"
        id="mainImage"
      />
      <h2 className="centered">{links.gallery}</h2>
      <Container>
        <div className="top-left">
          <Header />
        </div>
      </Container>
      <br></br>
      <br></br>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Img src={restaurant1} className="photos" alt="Restaurant" />
          </Grid>
          <Grid item xs={4}>
            <Img src={restaurant2} className="photos" alt="Restaurant" />
          </Grid>
          <Grid item xs={4}>
            <Img src={restaurant3} className="photos" alt="Restaurant" />
          </Grid>
        </Grid>
        <br></br>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Img src={restaurant4} className="photos" alt="Restaurant" />
          </Grid>
          <Grid item xs={4}>
            <Img src={restaurant5} className="photos" alt="Restaurant" />
          </Grid>
          <Grid item xs={4}>
            <Img
              src={houseRestaurant}
              className="photos"
              alt="House Restaurant"
            />
          </Grid>
        </Grid>
        <br></br>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Img src={restaurant6} className="photos" alt="Restaurant" />
          </Grid>
          <Grid item xs={4}>
            <Img src={restaurant7} className="photos" alt="Restaurant" />
          </Grid>
          <Grid item xs={4}>
            <Img src={garden1} className="photos" alt="Garden" />
          </Grid>
        </Grid>
        <br></br>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Img src={garden2} className="photos" alt="Garden" />
          </Grid>
          <Grid item xs={4}>
            <Img src={garden3} className="photos" alt="Garden" />
          </Grid>
          <Grid item xs={4}>
            <Img src={garden4} className="photos" alt="Garden" />
          </Grid>
        </Grid>
        <br></br>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Img src={garden5} className="photos" alt="Garden" />
          </Grid>
          <Grid item xs={4}>
            <Img src={garden6} className="photos" alt="Garden" />
          </Grid>
          <Grid item xs={4}>
            <Img src={garden7} className="photos" alt="Garden" />
          </Grid>
        </Grid>
        <br></br>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Img src={garden8} className="photos" alt="Garden" />
          </Grid>
          <Grid item xs={4}>
            <Img src={garden9} className="photos" alt="Garden" />
          </Grid>
          <Grid item xs={4}>
            <Img src={garden10} className="photos" alt="Garden" />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Img src={house1} className="photos" alt="Garden" />
          </Grid>
          <Grid item xs={4}>
            <Img src={house2} className="photos" alt="Garden" />
          </Grid>
          <Grid item xs={4}>
            <Img src={house3} className="photos" alt="Garden" />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Img src={house4} className="photos" alt="Garden" />
          </Grid>
          <Grid item xs={4}>
            <Img src={house1} className="photos" alt="Garden" />
          </Grid>
          <Grid item xs={4}>
            <Img src={house} className="photos" alt="Garden" />
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Gallery;
