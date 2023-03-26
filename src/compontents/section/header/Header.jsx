import React from "react";
import { Grid } from '@mui/material/';
import { Link } from "react-router-dom";

import './Header.sass'

const Header = () => (
  <header id='mainHeader'>
    <br></br>
    <Grid container spacing={2}>
      <Grid xs={8}>
        <h4><Link to='/HomePage' className="links" id="title" >KHEDOYANS GUESTHOUSE</Link></h4>
      </Grid>
      <Grid xs={4}>
        <div className="linksDiv">
          <span className="linksSection">
            <h4><Link to='/rooms' className="links">ROOMS </Link></h4>
          </span>
          <span className="linksSection">
            <h4><Link to='/gallery' className="links">GALLERY </Link></h4>
          </span>
          <span className="linksSection">
            <h4><Link to='/restaurant' className="links">RESTAURANT </Link></h4>
          </span>
          <span className="linksSection">
            <h4><Link to='/contactUs' className="links">CONTACT US </Link></h4>
          </span>
        </div>
      </Grid>
    </Grid>
  </header>
)

export default Header;
