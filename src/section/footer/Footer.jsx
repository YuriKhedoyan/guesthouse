import React, { lazy } from "react";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import eng from "../../locales/eng.json";
import { withSuspense } from "../../helpers/withSuspense";

import "./Footer.scss";

const Maps = withSuspense(lazy(() => import("../../compontents/maps/Maps")));

const { informationAboutHouse, links } = eng;

const Footer = () => {
	return (
		<>
			<footer>
				<br></br>
				<Container>
					<Grid container spacing={3}>
						<Grid item xs={5}>
							<div>
								<p>{informationAboutHouse.place} </p>
								<p className="space"></p>
								<p>{informationAboutHouse.phoneNumber}</p>
								<p className="space"></p>
								<p>{informationAboutHouse.email}</p>
								<br></br>
								<div id="icons">
									<span>
										<InstagramIcon></InstagramIcon>
									</span>
									<span>
										<FacebookIcon></FacebookIcon>
									</span>
								</div>
							</div>
						</Grid>
						<Grid item xs={1}>
							<div>
								<p className="texts">SITEMAP</p>
								<p className="space"></p>
								<Link to="/" className="texts links">
									<p className="texts">Home</p>
								</Link>
								<p className="space"></p>
								<Link to="/restaurant" className="texts links">
									<p className="texts">
										{links.restaurant[0] +
											links.restaurant.slice(1).toLowerCase()}
									</p>
								</Link>
								<p className="space"></p>
								<Link to="/rooms" className="texts links">
									<p className="texts">
										{links.rooms[0] + links.rooms.slice(1).toLowerCase()}
									</p>
								</Link>
								<p className="space"></p>
								<Link to="/gallery" className="texts links">
									<p className="texts">
										{links.gallery[0] + links.gallery.slice(1).toLowerCase()}
									</p>
								</Link>
								<p className="space"></p>
								<Link to="/contactUs" className="texts links">
									<p className="texts">
										{links.contactUs[0] +
											links.contactUs.slice(1).toLowerCase()}
									</p>
								</Link>
							</div>
						</Grid>
						<Grid item xs={5}>
							<Maps></Maps>
						</Grid>
					</Grid>
				</Container>
			</footer>
		</>
	);
};

export default Footer;
