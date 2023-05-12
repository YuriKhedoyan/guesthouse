import React, { lazy, memo, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

import ThemeContext from "../../locales/themeContext";
import { withSuspense } from "../../helpers/withSuspense";

import "./Footer.scss";

const Maps = withSuspense(lazy(() => import("../../compontents/maps/Maps")));

const Footer = () => {
	const {theme} = useContext(ThemeContext);
	return (
		<>
			<footer className={theme}>
				<Container>
					<Grid container spacing={3}>
						<Grid item xs={5}>
							<div>
								<p className="informations"> </p>
								<p className="informations"></p>
								<p className="informations"></p>
								<div id="icons">
									<span>
										<InstagramIcon/>
									</span>
									<span>
										<FacebookIcon/>
									</span>
								</div>
							</div>
						</Grid>
						<Grid item xs={1}>
							<div>
								<div>
									<p className="texts">SITEMAP</p>
								</div>
								<Link to="/" className="texts links">
									<p className="texts">Home</p>
								</Link>
								<Link to="/restaurant" className="texts links">
									<p className="texts">
									</p>
								</Link>
								<Link to="/rooms" className="texts links">
									<p className="texts">
									</p>
								</Link>
								<Link to="/gallery" className="texts links">
									<p className="texts">
									</p>
								</Link>
								<Link to="/contactUs" className="texts links">
									<p className="texts">
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

export default memo(Footer);
