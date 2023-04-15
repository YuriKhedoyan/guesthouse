import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

import eng from "../../locales/eng.json";

import "./Header.scss";

const { links } = eng;

const Header = () => {
  return (
    <header id="mainHeader">
      <br></br>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <h4>
            <Link to="/" className="links" id="title">
              {links.home}
            </Link>
          </h4>
        </Grid>
        <Grid item xs={4}>
          <div className="linksDiv">
            <span className="linksSection">
              <h4>
                <Link to="/rooms" className="links">
                  {links.rooms}
                </Link>
              </h4>
            </span>
            <span className="linksSection">
              <h4>
                <Link to="/gallery" className="links">
                  {links.gallery}
                </Link>
              </h4>
            </span>
            <span className="linksSection">
              <h4>
                <Link to="/restaurant" className="links">
                  {links.restaurant}
                </Link>
              </h4>
            </span>
            <span className="linksSection">
              <h4>
                <Link to="/contactUs" className="links">
                  {links.contactUs}
                </Link>
              </h4>
            </span>
          </div>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
