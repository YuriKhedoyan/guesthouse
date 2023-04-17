import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import eng from "../../locales/eng.json";

import "./Footer.scss";

const Footer = () => {
  const { informationAboutHouse, links } = eng;
  const props = {
    links: {
      className: "texts links",
    },
  };

  return (
    <>
      <footer>
        <br></br>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <div>
                <p>{informationAboutHouse.place} </p>
                <p className="space"></p>
                <p>{informationAboutHouse.phoneNumber}</p>
                <p className="space"></p>
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
                <p className="space"></p>
                <Link to="/" {...props.links}>
                  <p className="texts">Home</p>
                </Link>
                <p className="space"></p>
                <Link to="/restaurant" {...props.links}>
                  <p className="texts">
                    {links.restaurant[0] +
                      links.restaurant.slice(1).toLowerCase()}
                  </p>
                </Link>
                <p className="space"></p>
                <Link to="/rooms" {...props.links}>
                  <p className="texts">
                    {links.rooms[0] + links.rooms.slice(1).toLowerCase()}
                  </p>
                </Link>
                <p className="space"></p>
                <Link to="/gallery" {...props.links}>
                  <p className="texts">
                    {links.gallery[0] + links.gallery.slice(1).toLowerCase()}
                  </p>
                </Link>
                <p className="space"></p>
                <Link to="/contactUs" {...props.links}>
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
