import React, { lazy, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";

import images from "../../locales/images.js";
import withSuspense from "../../helpers/withSuspense";
import ThemeContext from "../../contexts/themeContext";
import LanguageContext from "../../contexts/languageContext";

import "./Home.scss";

const Img = withSuspense(lazy(() => import("../../compontents/img")));
const Header = withSuspense(lazy(() => import("../../section/header")));
const Footer = withSuspense(lazy(() => import("../../section/footer")));
const Slider = withSuspense(lazy(() => import("../../compontents/slider")));

const { restaurant, house, reseption } = images;
const pictures = [restaurant];

const Home = () => {
	const { theme } = useContext(ThemeContext);
	const { currentLanguage } = useContext(LanguageContext);

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
						<Grid container spacing={1} sx={{ maxWidth: '852px' }}>
							<Grid item xs={12}>
								<Container maxWidth="xs" id="aboutHotel">
									<Grid container spacing={2} >
										<Grid item xs={4}>
											<h4 className="texts">{currentLanguage.welcome}</h4>
											<p className="texts">{currentLanguage.about}</p>
										</Grid>
										<Grid item xs={4}>
											<Img className="photos" src={house[0].src} alt={house[0].alt} />
										</Grid>
									</Grid>
								</Container>
							</Grid>
						</Grid>
					</Container>
				</div>
			</section>
			<section id="sc4">
				<div class="image-grid">
					<div class="image-container">
						<img src={restaurant[1].src} alt="Image 1" class="responsive-image" />
						<p className="image-text title">{currentLanguage.roomsInformation.standardRoom.category}</p>
						<p className="image-text">{currentLanguage.roomsInformation.standardRoom.price}</p>
					</div>
					<div class="image-container">
						<img src={restaurant[2].src} alt="Image 2" class="responsive-image" />
						<p className="image-text title">{currentLanguage.roomsInformation.deluxeSuperior.category}</p>
						<p className="image-text">{currentLanguage.roomsInformation.deluxeSuperior.price}</p>
					</div>
					<div class="image-container">
						<img src={restaurant[3].src} alt="Image 3" class="responsive-image" />
						<p className="image-text title">{currentLanguage.roomsInformation.deluxe.category}</p>
						<p className="image-text">{currentLanguage.roomsInformation.deluxe.price}</p>
					</div>
					<div class="image-container">
						<img src={restaurant[4].src} alt="Image 4" class="responsive-image" />
						<p className="image-text title">{currentLanguage.roomsInformation.duplex.category}</p>
						<p className="image-text">{currentLanguage.roomsInformation.duplex.price}</p>
					</div>
				</div>
				<Link to="/rooms" className={`links ${theme}`}>
					<div id="linkToRooms">
						<p>All rooms</p>
					</div>
				</Link>
			</section>
			<section id="sc5" className={theme}>
				<div id="about">
					<Container>
						<Grid container spacing={2} >
							<Grid item xs={6}>
								<b><p>{currentLanguage.otherInformation.welcome1}</p></b>
								<b><p>{currentLanguage.otherInformation.welcome2}</p></b>
								<b><p>{currentLanguage.otherInformation.welcome3}</p></b>
								<b><p>{currentLanguage.otherInformation.welcome4}</p></b>
							</Grid>
							<Grid item xs={6}>
								<Img id="backgroundImg" src={reseption[14].src} alt={reseption[14].alt} />
								<Img id="backgroundImg" src={reseption[12].src} alt={reseption[15].alt} />
							</Grid>
						</Grid>
					</Container>
				</div>
			</section>
			<Footer />
		</>
	);
};

export default Home;