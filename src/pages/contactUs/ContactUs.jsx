import { React, lazy } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Container, Grid } from "@mui/material";

import eng from "../../locales/eng.json";
import Img from "../../compontents/img/Img";
import images from "../../locales/images.json";
import { withSuspense } from "../../helpers/withSuspense";

const Header = withSuspense(lazy(() => import("../../section/header/Header")));
const Footer = withSuspense(lazy(() => import("../../section/footer/Footer")));

import "./ContactUs.scss";

const ContactUs = () => {
	const { links } = eng;
	const { house } = images;

	return (
    <>
      <Img src={house.house2.src} id="mainImage" alt="House From Top" />
      <h2 className="centered">{links.contactUs}</h2>
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
              <label>
								Name<span className="text-danger ml-1">*</span>
              </label>
              <br></br>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="inputTexts"
              />
            </Grid>
            <Grid item sm={6}>
              <label>
								Email<span className="text-danger ml-1">*</span>
              </label>
              <br></br>
              <TextField
                id="outlined-basic"
                variant="outlined"
                className="inputTexts"
              />
            </Grid>
          </Grid>
          <br></br>
          <p>
            <label>
							Message<span className="text-danger ml-1">*</span>
            </label>
            <br></br>
            <span className="wpcf7-form-control-wrap" data-name="message-en">
              <textarea
                cols="40"
                rows="10"
                id="message"
                name="message-en"
                aria-required="true"
                aria-invalid="false"
                className="form-control"
              ></textarea>
            </span>
          </p>
          <Button variant="contained" color="success" className="buttons">
						Send
          </Button>
        </div>
      </Container>
      <br></br>
      <Footer></Footer>
    </>
  );
};

export default ContactUs;
