import React, { lazy, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";

import images from "../../locales/images.js";
import Slider from "./../../compontents/Slider";
import withSuspense from "../../helpers/withSuspense";
import ThemeContext from "../../contexts/themeContext";
import LanguageContext from "../../contexts/languageContext";

import "./Home.scss";

const Img = withSuspense(lazy(() => import("../../compontents/img")));
const Header = withSuspense(lazy(() => import("../../section/header")));
const Footer = withSuspense(lazy(() => import("../../section/footer")));

const { house } = images;

const Home = () => {
	const {theme} = useContext(ThemeContext);
	const {currentLanguage} = useContext(LanguageContext);
	

	return (
		<>
			<section id="sc1">
				<div className="fullScreen">
					<Slider className="fullScreen"></Slider>
				</div>
				<Container>
					<div className="top-left">
						<Header />
					</div>
				</Container>
			</section>
			<section id="sc2">
				<Container>
					<Grid container spacing={3}>
						<Grid item xs={4}>
							<h3 className="texts">{currentLanguage.roomsInformation.countOfRooms}</h3>
							<p className="texts">{currentLanguage.roomsInformation.categories}</p>
						</Grid>
						<Grid item xs={4}>
							<h3 className="texts">
								<b>Restaurant</b>
								<p className="texts">Restaurant at home</p>
							</h3>
						</Grid>
						<Grid item xs={4}>
							<h3 className="texts">
								<b>24/7</b>
								<p className="texts">Always by your side</p>
							</h3>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section id="sc3" className={theme}>
				<div>
					<Container>
						<Grid container spacing={2}>
							<Grid item xs={4}>
								<h4 className="texts">{currentLanguage.welcome}</h4>
								<p className="texts">{currentLanguage.about}</p>
							</Grid>
							<Grid item xs={4}>
								<Img className="photos" src={house[0].src} alt={house[0].alt} />
							</Grid>
						</Grid>
					</Container>
				</div>
			</section>
			<section id="sc4">
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<span id="backgroundImg1">
							<div>
								<p className="texts">{currentLanguage.roomsInformation.standardRoom.category}</p>
								<p className="texts">{currentLanguage.roomsInformation.standardRoom.price}</p>
							</div>
						</span>
					</Grid>
					<Grid item xs={6}>
						<span id="backgroundImg2">
							<div>
								<p className="texts">{currentLanguage.roomsInformation.deluxe.category}</p>
								<p className="texts">{currentLanguage.roomsInformation.deluxe.price}</p>
							</div>
						</span>
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<span id="backgroundImg3">
							<div>
								<p className="texts">{currentLanguage.roomsInformation.deluxeSuperior.category}</p>
								<p className="texts">{currentLanguage.roomsInformation.deluxeSuperior.price}</p>
							</div>
						</span>
					</Grid>
					<Grid item xs={6}>
						<span id="backgroundImg4">
							<div>
								<p className="texts">{currentLanguage.roomsInformation.duplex.category}</p>
								<p className="texts">{currentLanguage.roomsInformation.duplex.price}</p>
							</div>
						</span>
					</Grid>
				</Grid>
				<Link to="/rooms" className="links">
					<div id="linkToRooms">
						<p>All rooms</p>
					</div>
				</Link>
			</section>
			<section id="sc6" className={theme}>
				<p className="texts">{currentLanguage.otherInformation.ourBenefites}</p>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<p className="texts yellow">{currentLanguage.otherInformation.highClassRooms}</p>
					</Grid>
					<Grid item xs={4}>
						<p className="texts">{currentLanguage.otherInformation.bestCuisine}</p>
					</Grid>
					<Grid item xs={4}>
						<p className="texts yellow">{currentLanguage.otherInformation.wonderfulNature}</p>
					</Grid>
				</Grid>
			</section>
			<Footer />
		</>
	);
};

export default Home;
