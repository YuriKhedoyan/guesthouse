import React from "react";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import eng from "../../locales/eng.json";

import "./Footer.scss";

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
							<div className="googleMap">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14379.799418338926!2d44.86534121906999!3d40.74046266323563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041acd13eb6c271%3A0xc2c4cd041074fe13!2z1LTVq9Ws1avVu9Wh1bY!5e0!3m2!1shy!2sam!4v1682243115373!5m2!1shy!2sam"  width="1000" height="220" style={{border:0}} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
							</div>
						</Grid>
					</Grid>
				</Container>
			</footer>
		</>
	);
};

export default Footer;
