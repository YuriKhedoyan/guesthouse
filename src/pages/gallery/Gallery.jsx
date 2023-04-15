import { lazy, React } from "react";
import { Container, Grid } from "@mui/material";

import eng from "../../locales/eng.json";
import Img from "../../compontents/img/Img";
import images from "../../locales/images.json";
import { withSuspense } from "../../helpers/withSuspense";

const { restaurant, house, garden } = images;

import "./Gallery.scss";

const Header = withSuspense(lazy(() => import("../../section/header/Header")));
const Footer = withSuspense(lazy(() => import("../../section/footer/Footer")));

const Gallery = () => {
  const { links } = eng;
  const pictures = [
    Object.values(restaurant),
    Object.values(house),
    Object.values(garden),
  ];
  const props = {
    headerImg: {
      id: "mainImage",
      src: images.house.house2.src,
      alt: images.house.house2.alt
    }
  };

  return (
    <>
      <Img  {...props.headerImg}/>
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
          {Object.values(pictures[0]).map(picture => (
            <Grid item xs={4} key={picture.id}>
              <Img src={picture.src} className="photos" alt={picture.alt} />
            </Grid>
          ))}
          {Object.values(pictures[1]).map(picture => (
            <Grid item xs={4} key={picture.id}>
              <Img src={picture.src} className="photos" alt={picture.alt} />
            </Grid>
          ))}
          {Object.values(pictures[2]).map(picture => (
            <Grid item xs={4} key={picture.id}>
              <Img src={picture.src} className="photos" alt={picture.alt} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Gallery;
