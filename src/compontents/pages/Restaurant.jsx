import React from "react";
import { Container, Grid, } from "@mui/material";
import 'react-slideshow-image/dist/styles.css'
import { Slide } from 'react-slideshow-image';

import Header from "../common/Header";
import Img from "../common/Img";
import Footer from "../common/Footer";

import restaurant1 from '../../Assets/Images/restaurant1.jpg'
import restaurant2 from '../../Assets/Images/restaurant2.jpg'
import restaurant3 from '../../Assets/Images/restaurant3.jpg'
import restaurant4 from '../../Assets/Images/restaurant4.jpg'
import restaurant5 from '../../Assets/Images/restaurant5.jpg'
import restaurant6 from '../../Assets/Images/restaurant6.jpg'
import restaurant7 from '../../Assets/Images/restaurant7.jpg'
import houseRestaurant from '../../Assets/Images/houseRestaurant.jpg'

import '../../Assets/Styles/Restaurant.sass'

const Restaurant = () => {
  const images = [
    restaurant1,
    restaurant2,
    restaurant3,
    restaurant4,
    restaurant5,
    restaurant6,
    restaurant7,
    houseRestaurant
  ]
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '800px'
  }

  return (
    <>
      <Img picture={restaurant7} alt="House From Top" imgId="mainImage" />
      <h2 className="centered">RESTAURANT</h2>
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
            <p> <b>Breakfast</b> is considered the most important meal of the day, therefor our restaurant offers a full buffet breakfast of special Armenian dishes alongside with international foods. Ingredients are sourced fresh and local, dairy products such as cheeses, yogurts, milks, and creams. We also have a variety of local jams, pastries, fruits and a wide selection of hot dishes with freshly-squeezed juices, with a last touch of coffee and tea.</p>
          </Grid>
          <Grid item xs={7}>
            <Img picture={restaurant2} class={'photos'} alt='Restaurant' />
          </Grid>
        </Grid>
        <br></br>
        <div className="slide-container">
          <Slide>
            {images.map((slideImage, index) => (
              <div key={index}>
                <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage})` }}>
                  {/* <Img picture={slideImage} class={'sliderPhotos'} alt='Restaurant' /> */}
                </div>
              </div>
            ))}
          </Slide>
        </div>
        <br></br>
        <br></br>
        <Grid container spacing={2}>
          <Grid item xs={5}>

            <Img picture={restaurant7} class={'photos'} alt='Restaurant' />
          </Grid>
          <Grid item xs={7}>
            <h3>Dinner</h3>
            <br></br>
            <p><b>Dinner</b> at Khedoyans Guesthouse Hotel is the most expected time of the day. With our talented Chef and all the varieties of international dishes, we offer the best Cuisine within the region. The restaurant is also fulfilled with wide range of wines, to everyone’s taste. While guests relax and enjoy their glass of wine and dinner in the coziest atmosphere, the evening is lead with Jazz music played live by different famous performers. Khedoyans Guesthouse's Restaurant features both indoor and outdoor dining. Our restaurant is open for all guests travelling within Khedoyans Guesthouse.</p>
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </>
  )
}

export default Restaurant;