import { Link } from "react-router-dom";
import { Grid, Button, ButtonGroup } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import React, { memo, useContext, lazy } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import eng from '../../locales/eng.json'
import rus from '../../locales/rus.json'
import arm from '../../locales/arm.json'
import images from "../../locales/images.js";
import withSuspense from "../../helpers/withSuspense";
import ThemeContext from "../../contexts/themeContext";
import LanguageContext from "../../contexts/languageContext";

import "./Header.scss";

const Img = withSuspense(lazy(() => import("../../compontents/img")));

const { otherPictures } = images;

const Header = () => {

	const {theme, setTheme} = useContext(ThemeContext);
	const {currentLanguage, setCurrentLanguage} = useContext(LanguageContext);

	window.addEventListener("scroll", function() {
		let element = document.getElementById("mainHeader");
		if (window.scrollY >= 50) {
			element.classList.add("sticky");
		} else {
			element.classList.remove("sticky");
			element.classList.add("default");
		}
	});

	const switchTheme = () => setTheme(theme === "dark" ? "light" : "dark");

	const setLanguageAm = () => {setCurrentLanguage(arm)}
	const setLanguageRu = () => {setCurrentLanguage(rus)}
	const setLanguageEng = () => {setCurrentLanguage(eng)}

	return (
		<div className={theme}>
			<div id="mainHeader">
				<header >
					<Grid container spacing={2} className="content" >
						<Grid item xs={8}>
							<h4>
								<Link to="/" className="links" id="title">
									{currentLanguage.links.home}
								</Link>
								<Button onClick={switchTheme} variant="contained">{theme}</Button>
								<span className="languageSelector">
									<ButtonGroup variant="contained" aria-label="outlined primary button group">
										<Button><Img src={otherPictures.languages.am.src} alt={otherPictures.languages.am.alt} className="langPhotos" onClick={setLanguageAm}/></Button>
										<Button><Img src={otherPictures.languages.ru.src} alt={otherPictures.languages.ru.alt} className="langPhotos" onClick={setLanguageRu}/></Button>
										<Button><Img src={otherPictures.languages.en.src} alt={otherPictures.languages.en.alt} className="langPhotos" onClick={setLanguageEng}/></Button>
									</ButtonGroup>
								</span>
							</h4>
						</Grid>
						<Grid item xs={4}>
							<div>
								<span className="infoSection">
									<p className="info"><FacebookIcon/><InstagramIcon/></p>
								</span>
								<span className="infoSection">
									<p className="info"><PlaceIcon/></p><p className="info txt">{currentLanguage.informationAboutHouse.place}</p>
								</span>
								<span className="infoSection">
									<p className="info"><LocalPhoneIcon/></p><p className="info txt">{currentLanguage.informationAboutHouse.phoneNumber}</p>
								</span>
								<span className="infoSection">
									<p className="info"><EmailIcon/></p><p className="info txt">{currentLanguage.informationAboutHouse.email}</p>
								</span>
							</div>
							<div className="linksDiv">
								<span className="linksSection">
									<h4>
										<Link to="/rooms" className="links">
											{currentLanguage.links.rooms}
										</Link>
									</h4>
								</span>
								<span className="linksSection">
									<h4>
									</h4>
									<h4>
										<Link to="/gallery" className="links">
											{currentLanguage.links.gallery}
										</Link>
									</h4>
								</span>
								<span className="linksSection">
									<h4>
										<Link to="/restaurant" className="links">
											{currentLanguage.links.restaurant}
										</Link>
									</h4>
								</span>
								<span className="linksSection">
									<h4>
										<Link to="/contactUs" className="links">
											{currentLanguage.links.contactUs}
										</Link>
									</h4>
								</span>
							</div>
						</Grid>
					</Grid>
				</header>
			</div>
		</div>
	);
};

export default memo(Header);
