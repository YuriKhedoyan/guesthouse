import React, { lazy } from "react";
import {
	Container,
	Grid,
	Card,
	CardActions,
	CardContent,
	CardMedia,
} from "@mui/material";

import eng from "../../locales/eng.json";
import images from "../../locales/images.js";
import { withSuspense } from "../../helpers/withSuspense";

import "./Rooms.scss";

const Img = withSuspense(lazy(() => import("../../compontents/Img")));
const Header = withSuspense(lazy(() => import("../../section/Header")));
const Footer = withSuspense(lazy(() => import("../../section/Footer")));

const { roomsInformation, links } = eng;
const { rooms, otherPictures } = images;

const Rooms = () => {
	return (
		<>
			<Img
				src={otherPictures.spruceBranch.src}
				alt={otherPictures.spruceBranch.alt}
				id="mainImage"
			/>
			<h2 className="centered">{links.rooms}</h2>
			<Container>
				<div className="top-left">
					<Header />
				</div>
				<p className="space"></p>
				<p className="space"></p>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<div className="cards">
							<span>
								<Card sx={{ maxWidth: 450 }}>
									<CardMedia
										height="300"
										component="img"
										alt={rooms.standardRoom.alt}
										image={rooms.standardRoom.src}
									/>
									<CardContent>
										<h3>{roomsInformation.standardRoom.category}</h3>
									</CardContent>
									<CardActions disableSpacing>
										<h3>{roomsInformation.standardRoom.price}</h3>
									</CardActions>
								</Card>
							</span>
							<span>
								<Card sx={{ maxWidth: 450 }}>
									<CardMedia
										height="300"
										component="img"
										alt={rooms.deluxe.alt}
										image={rooms.deluxe.src}
									/>
									<CardContent>
										<h3>{roomsInformation.deluxeSuperior.category}</h3>
									</CardContent>
									<CardActions disableSpacing>
										<h3>{roomsInformation.deluxeSuperior.price}</h3>
									</CardActions>
								</Card>
							</span>
						</div>
					</Grid>
					<p className="space"></p>
					<Grid item xs={6}>
						<div className="cards">
							<span>
								<Card sx={{ maxWidth: 450 }}>
									<CardMedia
										height="300"
										component="img"
										alt={rooms.deluxeSuperior.alt}
										image={rooms.deluxeSuperior.src}
									/>
									<CardContent>
										<h3>{roomsInformation.deluxe.category}</h3>
									</CardContent>
									<CardActions disableSpacing>
										<h3>{roomsInformation.deluxe.price}</h3>
									</CardActions>
								</Card>
							</span>
							<span>
								<Card sx={{ maxWidth: 450 }}>
									<CardMedia
										height="300"
										component="img"
										alt={rooms.duplex.alt}
										image={rooms.duplex.src}
									/>
									<CardContent>
										<h3>{roomsInformation.duplex.category}</h3>
									</CardContent>
									<CardActions disableSpacing>
										<h3>{roomsInformation.duplex.price}</h3>
									</CardActions>
								</Card>
							</span>
						</div>
					</Grid>
				</Grid>
				<p className="space"></p>
			</Container>
			<Footer />
		</>
	);
};

export default Rooms;
