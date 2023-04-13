import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

import eng from "../../locales/eng.json";

import "./Footer.scss";

const Footer = () => {
  const { informationAboutHouse, links } = eng;
  return (
    <>
      <footer>
        <br></br>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <div>
                <p>{informationAboutHouse.place} </p>
                <p>{informationAboutHouse.phoneNumber}</p>
                <p>{informationAboutHouse.email}</p>
                <br></br>
                <div id="icons">
                  <span>
                    <InstagramIcon></InstagramIcon>
                  </span>
                  <span>
                    <FacebookIcon></FacebookIcon>
                  </span>
                </div>
              </div>
            </Grid>
            <Grid item xs={1}>
              <div>
                <p className="texts">SITEMAP</p>
                <br></br>
                <Link to="/" className="texts links">
                  <p className="texts">Home</p>
                </Link>
                <br></br>
                <Link to="/restaurant" className="texts links">
                  <p className="texts">
                    {links.restaurant[0] +
											links.restaurant.slice(1).toLowerCase()}
                  </p>
                </Link>
                <br></br>
                <Link to="/rooms" className="texts links">
                  <p className="texts">
                    {links.rooms[0] + links.rooms.slice(1).toLowerCase()}
                  </p>
                </Link>
                <br></br>
                <Link to="/gallery" className="texts links">
                  <p className="texts">
                    {links.gallery[0] + links.gallery.slice(1).toLowerCase()}
                  </p>
                </Link>
                <br></br>
                <Link to="/contactUs" className="texts links">
                  <p className="texts">
                    {links.contactUs[0] +
											links.contactUs.slice(1).toLowerCase()}
                  </p>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
