import React, { lazy, memo } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Container, Grid } from "@mui/material";

import eng from "../../locales/eng.json";
import images from "../../locales/images.js";
import { withSuspense } from "../../helpers/withSuspense";

import "./ContactUs.scss";

const Img = withSuspense(lazy(() => import("../../compontents/Img")));
const Header = withSuspense(lazy(() => import("../../section/Header")));
const Footer = withSuspense(lazy(() => import("../../section/Footer")));

const { links } = eng;
const { house } = images;

const ContactUs = () => {
	return (
		<>
			<Img src={house[1].src} id="mainImage" alt="House From Top" />
			<h2 className="centered">{links.contactUs}</h2>
			<Container>
				<div className="top-left">
					<Header />
				</div>
			</Container>
			<Container>
				<div className="writingSection">
					<Grid container spacing={2}>
						<Grid item sm={6}>
							<label>
								Name<span className="text-danger ml-1">*</span>
							</label>
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
							<TextField
								id="outlined-basic"
								variant="outlined"
								className="inputTexts"
							/>
						</Grid>
					</Grid>
					<p className="space"></p>
					<p>
						<label>
							Message<span className="text-danger ml-1">*</span>
						</label>
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
			<Footer />
		</>
	);
};

export default memo(ContactUs);
