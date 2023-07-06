import React, { lazy, memo, useContext } from "react";
import { Link } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import CopyrightIcon from "@mui/icons-material/Copyright";
import InstagramIcon from "@mui/icons-material/Instagram";

import withSuspense from "../../helpers/withSuspense";
import ThemeContext from "../../contexts/themeContext";
import LanguageContext from "../../contexts/languageContext";

import "./Footer.scss";

const Maps = withSuspense(lazy(() => import("../../compontents/maps/Maps")));

const Footer = () => {
	const { currentLanguage } = useContext(LanguageContext);

	return (
		<>
			<footer>
				<Container>
					<Grid container spacing={3}>
						<Grid item xs={5} id="informationFooter">
							<div>
								<div id="icons">
									<span>
										<InstagramIcon />
									</span>
									<span>
										<FacebookIcon />
									</span>
								</div>
								<p className="informations">{currentLanguage.informationAboutHouse.place}</p>
								<p className="informations">{currentLanguage.informationAboutHouse.phoneNumber}</p>
								<p className="informations">{currentLanguage.informationAboutHouse.email}</p>
								<p className="informations">Copyright <CopyrightIcon /> 2023 by Yuri Khedoyan</p>
							</div>
						</Grid>
						<Grid item xs={1} className="linksFooter">
							<div>
								<Link to="/khedoyans-guesthouse/" className="texts links">
									<p className="texts">{currentLanguage.links.mainPage[0] + currentLanguage.links.mainPage.slice(1).toLocaleLowerCase()}</p>
								</Link>
								<Link to="/khedoyans-guesthouse/restaurant" className="texts links">
									<p className="texts">{currentLanguage.links.restaurant[0] + currentLanguage.links.restaurant.slice(1).toLocaleLowerCase()}</p>
								</Link>
								<Link to="/khedoyans-guesthouse/rooms" className="texts links">
									<p className="texts">{currentLanguage.links.rooms[0] + currentLanguage.links.rooms.slice(1).toLocaleLowerCase()}</p>
								</Link>
								<Link to="/khedoyans-guesthouse/gallery" className="texts links">
									<p className="texts">{currentLanguage.links.gallery[0] + currentLanguage.links.gallery.slice(1).toLocaleLowerCase()}</p>
								</Link>
								<Link to="/khedoyans-guesthouse/contactUs" className="texts links">
									<p className="texts">{currentLanguage.links.contactUs[0] + currentLanguage.links.contactUs.slice(1).toLocaleLowerCase()}</p>
								</Link>
							</div>
						</Grid>
						<Grid item xs={5} className="mapFooter">
							<div className="map">
								<Maps></Maps>
							</div>
						</Grid>
					</Grid>
				</Container>
			</footer>
		</>
	);
};

export default memo(Footer);