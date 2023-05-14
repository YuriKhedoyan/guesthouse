import React, { lazy, memo, useContext } from "react";
import { Container, Grid } from "@mui/material";

import eng from "../../locales/eng.json";
import images from "../../locales/images.js";
import withSuspense from "./helpers/withSuspense";
import ThemeContext from "../../locales/themeContext";

import "./Restaurant.scss";

const Img = withSuspense(lazy(() => import("../../compontents/img")));
const Header = withSuspense(lazy(() => import("../../section/header")));
const Footer = withSuspense(lazy(() => import("../../section/footer")));

const { restaurant } = images;
const { restaurantInformation, links } = eng;

const Restaurant = () => {
	const {theme} = useContext(ThemeContext);
	return (
		<div className={theme}>
			<Img src={restaurant[0].src} id="mainImage" alt={restaurant[0].alt} />
			<h2 className="centered">{links.restaurant}</h2>
			<Container>
				<div className="top-left">
					<Header />
				</div>
			</Container>
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={5}>
						<h3>Breakfast</h3>
						<p>{restaurantInformation.breakfast}</p>
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
						<h3>Dinner</h3>
						<p>{restaurantInformation.dinner}</p>
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</div>
	);
};

export default memo(Restaurant);
