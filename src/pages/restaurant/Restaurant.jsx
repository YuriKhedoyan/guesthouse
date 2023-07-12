import React, { lazy, memo, useContext } from "react";
import { Container, Grid } from "@mui/material";

import images from "../../locales/images.js";
import withSuspense from "../../helpers/withSuspense";
import ThemeContext from "../../contexts/themeContext";
import LanguageContext from "../../contexts/languageContext";

import "./Restaurant.scss";

const Img = withSuspense(lazy(() => import("../../compontents/img")));
const Header = withSuspense(lazy(() => import("../../section/header")));
const Footer = withSuspense(lazy(() => import("../../section/footer")));

const { restaurant } = images;

const Restaurant = () => {
	const { theme } = useContext(ThemeContext);
	const { currentLanguage } = useContext(LanguageContext);

	return (
		<div className={theme}>
			<Img src={restaurant[0].src} id="mainImage" alt={restaurant[0].alt} />
			<h2 className="centered">{currentLanguage.links.restaurant}</h2>
			<Container>
				<div className="top-left">
					<Header />
				</div>
			</Container>
			<Container className="mainDiv">
				<Grid container spacing={2}>
					<Grid item xs={5}>
						<h3>{currentLanguage.restaurantInformation.breakfast}</h3>
						<p>{currentLanguage.restaurantInformation.aboutBreakfast}</p>
					</Grid>
					<Grid item xs={7}>
						<div className="images">
							<Img src={restaurant[0].src} id="mainImage" alt={restaurant[0].alt} />
						</div>
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid item xs={5}>
						<div className="images">
							<Img src={restaurant[1].src} id="mainImage" alt={restaurant[1].alt} />
						</div>
					</Grid>
					<Grid item xs={7}>
						<h3>{currentLanguage.restaurantInformation.dinner}</h3>
						<p>{currentLanguage.restaurantInformation.aboutDinner}</p>
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</div>
	);
};

export default memo(Restaurant);
