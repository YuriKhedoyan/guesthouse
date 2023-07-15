import React, { memo, useContext, lazy, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Grid, Button, ButtonGroup } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import eng from '../../locales/eng.json'
import rus from '../../locales/rus.json'
import arm from '../../locales/arm.json'
import images from "../../locales/images.js";
import withSuspense from "../../helpers/withSuspense";
import ThemeContext from "../../contexts/themeContext";
import LanguageContext from "../../contexts/languageContext";

import "./Header.scss";

const Img = withSuspense(lazy(() => import("../../compontents/img")));
const Drawer = withSuspense(lazy(() => import("./../../compontents/drawer/")));

const Header = () => {
	const { otherPictures } = images;
	const { theme, setTheme } = useContext(ThemeContext);
	const [width, setWidth] = useState(window.innerWidth);
	const { currentLanguage, setCurrentLanguage } = useContext(LanguageContext);

	window.addEventListener("scroll", function () {
		let element = document.getElementById("mainHeader");
		if (window.scrollY >= 50) {
			element.classList.add("sticky");
		} else {
			element.classList.remove("sticky");
			element.classList.add("default");
		}
	});


	const switchThemeToDark = () => setTheme("dark");
	const switchThemeToLight = () => setTheme("light");

	const setLanguageAm = () => { setCurrentLanguage(arm) }
	const setLanguageRu = () => { setCurrentLanguage(rus) }
	const setLanguageEng = () => { setCurrentLanguage(eng) }

	useEffect(() => {
		window.addEventListener("resize", (event) => {
			setWidth(window.innerWidth);
		});
	})

	return (
		<div>
			<div id="mainHeader" className="default">
				<header >
					<Grid container spacing={2} className="content" >
						<Grid item xs={5.2}>
							<h4 className="name">
								<Link to="/" className="links" id="title">
									{currentLanguage.links.home}
								</Link>
							</h4>
						</Grid>

						{width >= 1200 ? <>
							<Grid item xs={6.3}>
								<div>
									<div id="informations">
										<div id="secondPart">
											<div>
												<span className="infoSection">
													<div className="info">
														<span className="icons">
															<Link to="https://www.facebook.com/">
																<FacebookIcon />
															</Link>
														</span>
														<span className="icons">
															<Link to="https://www.instagram.com/">
																<InstagramIcon />
															</Link>
														</span>
													</div>
												</span>
												<span className="infoSection">
													<p className="info"><PlaceIcon /></p><p className="info txt">{currentLanguage.informationAboutHouse.place}</p>
												</span>
												<span className="infoSection">
													<p className="info"><LocalPhoneIcon /></p><p className="info txt">{currentLanguage.informationAboutHouse.phoneNumber}</p>
												</span>
												<span className="infoSection">
													<p className="info"><EmailIcon /></p><p className="info txt">{currentLanguage.informationAboutHouse.email}</p>
												</span>
											</div>
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
											<span className="buttonGroup">
												<span className="languageSelector">
													<ButtonGroup variant="contained" id="languageButtons">
														<Button ><Img src={otherPictures.languages.am.src} alt={otherPictures.languages.am.alt} className="langPhotos" onClick={setLanguageAm} /></Button>
														<Button ><Img src={otherPictures.languages.ru.src} alt={otherPictures.languages.ru.alt} className="langPhotos" onClick={setLanguageRu} /></Button>
														<Button ><Img src={otherPictures.languages.en.src} alt={otherPictures.languages.en.alt} className="langPhotos" onClick={setLanguageEng} /></Button>
													</ButtonGroup>
												</span>
												<span className="darkAndLight">
													<Button onClick={switchThemeToDark} variant="contained" ><Brightness4Icon /></Button>
													<Button onClick={switchThemeToLight} variant="contained" ><Brightness7Icon /></Button>
												</span>

											</span>
										</div>
									</div>
								</div>
							</Grid>
						</> : <><Drawer></Drawer></>}
					</Grid>
				</header>
			</div>
		</div>
	);
};

export default memo(Header);