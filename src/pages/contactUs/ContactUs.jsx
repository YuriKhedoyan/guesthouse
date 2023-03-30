import React from "react";
import { Container, Grid } from "@mui/material";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Header from "../../section/header/Header";
import Footer from "../../section/footer/Footer";
import Img from "../../compontents/img/Img";

import house2 from "../../assets/images/house2.jpg"

import './ContactUs.sass'

const ContactUs = () => {
  return (
    <>
      <Img picture={house2} alt="House From Top" imgId="mainImage" />
      <h2 className="centered">CONTACT US</h2>
      <Container>
        <div className="top-left">
          <Header></Header>
        </div>
      </Container>
      <Container>
        <div className="writingSection">
          <br></br>
          <Grid container spacing={2}>
          <Grid item sm={6}>
          <label for="e-mail">Name<span class="text-danger ml-1">*</span></label>
          <br></br>
          <TextField id="outlined-basic" variant="outlined" className="inputTexts"/>
          </Grid>
          <Grid item sm={6}>
          <label for="e-mail">Email<span class="text-danger ml-1">*</span></label>
          <br></br>
          <TextField id="outlined-basic" variant="outlined" className="inputTexts"/>
          </Grid>
        </Grid>
          <br></br>
          <p>
            <label for="e-mail">Message<span class="text-danger ml-1">*</span></label><br></br>
            <span class="wpcf7-form-control-wrap" data-name="message-en"><textarea cols="40" rows="10" class="form-control" id="message" aria-required="true" aria-invalid="false" name="message-en"></textarea></span>
          </p>
          <Button variant="contained" color='success' className="buttons">Send</Button>
        </div>
      </Container>
      <br></br>
      <Footer></Footer>
    </>
  )
}

export default ContactUs;