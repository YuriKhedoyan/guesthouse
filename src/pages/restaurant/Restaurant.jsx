import React, { lazy } from "react";
import { Container, Grid } from "@mui/material";

import eng from "../../locales/eng.json";
import Img from "../../compontents/img/Img";
import images from "../../locales/images.json";
import { withSuspense } from "../../helpers/withSuspense";

import "./Restaurant.scss";

const Header = withSuspense(lazy(() => import("../../section/header/Header")));
const Footer = withSuspense(lazy(() => import("../../section/footer/Footer")));

const Restaurant = () => {
	const { restaurant } = images;
	const { restaurantInformation, links } = eng;
	return (
		<>
			<Img src={restaurant.restaurant1.src} id="mainImage" alt={restaurant.restaurant1.alt} />
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
							<Img src={restaurant.restaurant1.src} id="mainImage" alt={restaurant.restaurant1.alt} />
						</div>
					</Grid>
				</Grid>
				<br></br>
				<Grid container spacing={2}>
					<Grid item xs={5}>
						<div className="images">
							<Img src={restaurant.restaurant2.src} id="mainImage" alt={restaurant.restaurant2.alt} />
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
