import { Link } from "react-router-dom";
import { Grid, Button, ButtonGroup } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import React, { memo, useContext, lazy } from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import images from "../../locales/images.js";
import ThemeContext from "../../locales/themeContext";
import { withSuspense } from "../../helpers/withSuspense";
import LanguageContext from "./../../locales/languageContext";

import "./Header.scss";

const Img = withSuspense(lazy(() => import("../../compontents/img")));

const { otherPictures } = images;

const Header = () => {
	const {theme, setTheme} = useContext(ThemeContext);
	const {language, setLanguage, languages} = useContext(LanguageContext);

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

	const setLanguageAm = () => setLanguage("am");
	const setLanguageRu = () => setLanguage("ru");
	const setLanguageEng = () => setLanguage("eng");

	return (
		<div className={theme}>
			<div id="mainHeader">
				<header >
					<Grid container spacing={2} className="content" >
						<Grid item xs={8}>
							<h4>
								<Link to="/" className="links" id="title">
									{languages[language].links.home}
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
									<p className="info"><PlaceIcon/></p><p className="info txt">{languages[language].informationAboutHouse.place}</p>
								</span>
								<span className="infoSection">
									<p className="info"><LocalPhoneIcon/></p><p className="info txt">{languages[language].informationAboutHouse.phoneNumber}</p>
								</span>
								<span className="infoSection">
									<p className="info"><EmailIcon/></p><p className="info txt">{languages[language].informationAboutHouse.email}</p>
								</span>
							</div>
							<div className="linksDiv">
								<span className="linksSection">
									<h4>
										<Link to="/rooms" className="links">
											{languages[language].links.rooms}
										</Link>
									</h4>
								</span>
								<span className="linksSection">
									<h4>
									</h4>
									<h4>
										<Link to="/gallery" className="links">
											{languages[language].links.gallery}
										</Link>
									</h4>
								</span>
								<span className="linksSection">
									<h4>
										<Link to="/restaurant" className="links">
											{languages[language].links.restaurant}
										</Link>
									</h4>
								</span>
								<span className="linksSection">
									<h4>
										<Link to="/contactUs" className="links">
											{languages[language].links.contactUs}
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
