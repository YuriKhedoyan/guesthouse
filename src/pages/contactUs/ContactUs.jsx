import React, { lazy, memo, useContext } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Container, Grid } from "@mui/material";

import images from "../../locales/images.js";
import withSuspense from "../../helpers/withSuspense";
import ThemeContext from "../../contexts/themeContext";
import LanguageContext from "../../contexts/languageContext";

import "./ContactUs.scss";

const Img = withSuspense(lazy(() => import("../../compontents/img")));
const Header = withSuspense(lazy(() => import("../../section/header")));
const Footer = withSuspense(lazy(() => import("../../section/footer")));

const {house} = images

const ContactUs = () => {
	const {theme} = useContext(ThemeContext);
	const {currentLanguage} = useContext(LanguageContext);

	return (
		<div className={theme}>
			<Img src={house[1].src} id="mainImage" alt="House From Top" />
			<h2 className="centered">{currentLanguage.links.contactUs}</h2>
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
		</div>
	);
};

export default memo(ContactUs);
