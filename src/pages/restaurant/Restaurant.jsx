import React, { lazy } from "react";
import { Container, Grid } from "@mui/material";

import eng from "../../locales/eng.json";
import images from "../../locales/images.js";
import { withSuspense } from "../../helpers/withSuspense";

import "./Restaurant.scss";

const Img = withSuspense(lazy(() => import("../../compontents/Img")));
const Header = withSuspense(lazy(() => import("../../section/Header")));
const Footer = withSuspense(lazy(() => import("../../section/Footer")));

const { restaurant } = images;
const { restaurantInformation, links } = eng;

const Restaurant = () => {
	return (
		<>
			<Img src={restaurant[0].src} id="mainImage" alt={restaurant[0].alt} />
			<h2 className="centered">{links.restaurant}</h2>
			<Container>
				<div className="top-left">
					<Header />
				</div>
			</Container>
			<br></br>
			<br></br>
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={5}>
						<h3>Breakfast</h3>
						<br></br>
						<p>{restaurantInformation.breakfast}</p>
					</Grid>
					<Grid item xs={7}>
						<div className="images">
							<Img src={restaurant[0].src} id="mainImage" alt={restaurant[0].alt} />
						</div>
					</Grid>
				</Grid>
				<br></br>
				<Grid container spacing={2}>
					<Grid item xs={5}>
						<div className="images">
							<Img src={restaurant[1].src} id="mainImage" alt={restaurant[1].alt} />
						</div>
					</Grid>
					<Grid item xs={7}>
						<h3>Dinner</h3>
						<br></br>
						<p>{restaurantInformation.dinner}</p>
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</>
	);
};

export default Restaurant;
