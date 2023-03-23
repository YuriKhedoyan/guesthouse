import { React, Suspense } from "react";
import { Container, Grid,  } from "@mui/material";

import Header from "../common/Header";
import Img from "./../common/Img"

import restaurant1 from '../../Assets/Images/restaurant1.jpg'
import restaurant2 from '../../Assets/Images/restaurant2.jpg'
import restaurant3 from '../../Assets/Images/restaurant3.jpg'
import restaurant4 from '../../Assets/Images/restaurant4.jpg'
import restaurant5 from '../../Assets/Images/restaurant5.jpg'
import restaurant6 from '../../Assets/Images/restaurant6.jpg'
import restaurant7 from '../../Assets/Images/restaurant7.jpg'
import houseRestaurant from '../../Assets/Images/houseRestaurant.jpg'
import garden1 from '../../Assets/Images/garden1.jpg'
import garden2 from '../../Assets/Images/garden2.jpg'
import garden3 from '../../Assets/Images/garden3.jpg'
import garden4 from '../../Assets/Images/garden4.jpg'
import garden5 from '../../Assets/Images/garden5.jpg'
import garden6 from '../../Assets/Images/garden6.jpg'
import garden7 from '../../Assets/Images/garden7.jpg'
import garden8 from '../../Assets/Images/garden8.jpg'
import garden9 from '../../Assets/Images/garden9.jpg'
import garden10 from '../../Assets/Images/garden10.jpg'
import house1 from "../../Assets/Images/house1.jpg"
import house2 from "../../Assets/Images/house2.jpg"
import house3 from "../../Assets/Images/house3.jpg"
import house4 from "../../Assets/Images/house4.jpg"
import house from "../../Assets/Images/house.jpg"

import '../../Assets/Styles/Gallery.sass'

const Gallery = () => {

  

  return (
    <>
    <Img picture={house2} alt="House From Top" imgId="mainImage"/>
    <h2 className="centered">GALLERY</h2>
      <Container>
        <div className="top-left">
          <Suspense><Header></Header></Suspense>
        </div>
      </Container>
      <br></br>
      <br></br>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Img picture={restaurant1} class={'photos'} alt='Restaurant'/>
          </Grid>
          <Grid item xs={4}>
            <Img picture={restaurant2} class={'photos'} alt='Restaurant'/>
          </Grid>
          <Grid item xs={4}>
            <Img picture={restaurant3} class={'photos'} alt='Restaurant'/>
          </Grid>
        </Grid>
        <br></br>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Img picture={restaurant4} class={'photos'} alt='Restaurant'/>
          </Grid>
          <Grid item xs={4}>
            <Img picture={restaurant5} class={'photos'} alt='Restaurant'/>
          </Grid>
          <Grid item xs={4}>
            <Img picture={houseRestaurant} class={'photos'} alt='House Restaurant'/>
          </Grid>
        </Grid>
        <br></br>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Img picture={restaurant6} class={'photos'} alt='Restaurant'/>
          </Grid>
          <Grid item xs={4}>
            <Img picture={restaurant7} class={'photos'} alt='Restaurant'/>
          </Grid>
          <Grid item xs={4}>
            <Img picture={garden1} class={'photos'} alt='Garden'/>
          </Grid>
        </Grid>
        <br></br>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Img picture={garden2} class={'photos'} alt='Garden'/>
          </Grid>
          <Grid item xs={4}>
            <Img picture={garden3} class={'photos'} alt='Garden'/>
          </Grid>
          <Grid item xs={4}>
            <Img picture={garden4} class={'photos'} alt='Garden'/>
          </Grid>
        </Grid>
        <br></br>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Img picture={garden5} class={'photos'} alt='Garden'/>
          </Grid>
          <Grid item xs={4}>
            <Img picture={garden6} class={'photos'} alt='Garden'/>
          </Grid>
          <Grid item xs={4}>
          <Img picture={garden7} class={'photos'} alt='Garden'/>
          </Grid>
        </Grid>
        <br></br>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Img picture={garden8} class={'photos'} alt='Garden'/>
          </Grid>
          <Grid item xs={4}>
            <Img picture={garden9} class={'photos'} alt='Garden'/>
          </Grid>
          <Grid item xs={4}>
            <Img picture={garden10} class={'photos'} alt='Garden'/>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Img picture={house1} class={'photos'} alt='Garden'/>
          </Grid>
          <Grid item xs={4}>
            <Img picture={house2} class={'photos'} alt='Garden'/>
          </Grid>
          <Grid item xs={4}>
            <Img picture={house3} class={'photos'} alt='Garden'/>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Img picture={house4} class={'photos'} alt='Garden'/>
          </Grid>
          <Grid item xs={4}>
            <Img picture={house1} class={'photos'} alt='Garden'/>
          </Grid>
          <Grid item xs={4}>
            <Img picture={house} class={'photos'} alt='Garden'/>
          </Grid>
        </Grid>
      </Container>
      
    </>
  )
}

export default Gallery;