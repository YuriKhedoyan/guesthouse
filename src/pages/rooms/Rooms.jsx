import React, { lazy, memo, useContext } from "react";
import { Container, Grid, Card, CardActions, CardContent, CardMedia, } from "@mui/material";

import images from "../../locales/images.js";
import withSuspense from "../../helpers/withSuspense";
import ThemeContext from "../../contexts/themeContext";
import LanguageContext from "../../contexts/languageContext";

import "./Rooms.scss";

const Img = withSuspense(lazy(() => import("../../compontents/img")));
const Header = withSuspense(lazy(() => import("../../section/header")));
const Footer = withSuspense(lazy(() => import("../../section/footer")));

const { rooms, otherPictures } = images;

const Rooms = () => {
	const { theme } = useContext(ThemeContext);
	const { currentLanguage } = useContext(LanguageContext);

	return (
		<div className={theme}>
			<div>
				<Img src={otherPictures.spruceBranch.src} alt={otherPictures.spruceBranch.alt} id="mainImage" />
				<h2 className="centered">{currentLanguage.links.rooms}</h2>
			</div>
			<Container>
				<div className="top-left">
					<Header />
				</div>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<div className="cardsDiv">
							<span>
								<Card sx={{ maxWidth: 450 }} className="cards">
									<CardMedia
										height="300"
										component="img"
										alt={rooms.standardRoom.alt}
										image={rooms.standardRoom.src}
									/>
									<CardContent className="roomsTitle">
										<h3>{currentLanguage.roomsInformation.standardRoom.category}</h3>
									</CardContent>
									<CardActions disableSpacing className="roomsTitle">
										<h3>{currentLanguage.roomsInformation.standardRoom.price}</h3>
									</CardActions>
								</Card>
							</span>
							<span>
								<Card sx={{ maxWidth: 450 }} className="cards">
									<CardMedia
										height="300"
										component="img"
										alt={rooms.deluxe.alt}
										image={rooms.deluxe.src}
									/>
									<CardContent className="roomsTitle">
										<h3>{currentLanguage.roomsInformation.deluxeSuperior.category}</h3>
									</CardContent>
									<CardActions disableSpacing className="roomsTitle">
										<h3>{currentLanguage.roomsInformation.deluxeSuperior.price}</h3>
									</CardActions>
								</Card>
							</span>
						</div>
					</Grid>
					<Grid item xs={6}>
						<div className="cardsDiv">
							<span>
								<Card sx={{ maxWidth: 450 }} className="cards">
									<CardMedia
										height="300"
										component="img"
										alt={rooms.deluxeSuperior.alt}
										image={rooms.deluxeSuperior.src}
									/>
									<CardContent className="roomsTitle">
										<h3>{currentLanguage.roomsInformation.deluxe.category}</h3>
									</CardContent>
									<CardActions disableSpacing className="roomsTitle">
										<h3>{currentLanguage.roomsInformation.deluxe.price}</h3>
									</CardActions>
								</Card>
							</span>
							<span>
								<Card sx={{ maxWidth: 450 }} className="cards">
									<CardMedia
										height="300"
										component="img"
										alt={rooms.duplex.alt}
										image={rooms.duplex.src}
									/>
									<CardContent className="roomsTitle">
										<h3>{currentLanguage.roomsInformation.duplex.category}</h3>
									</CardContent>
									<CardActions disableSpacing className="roomsTitle">
										<h3>{currentLanguage.roomsInformation.duplex.price}</h3>
									</CardActions>
								</Card>
							</span>
						</div>
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</div>
	);
};

export default memo(Rooms);
