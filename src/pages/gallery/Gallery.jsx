import React, { lazy, memo, useContext } from "react";
import { Container, Grid } from "@mui/material";

import images from "../../locales/images";
import withSuspense from "../../helpers/withSuspense";
import ThemeContext from "../../contexts/themeContext";
import LanguageContext from "../../contexts/languageContext";

import "./Gallery.scss";

const Img = withSuspense(lazy(() => import("../../compontents/img")));
const Header = withSuspense(lazy(() => import("../../section/header")));
const Footer = withSuspense(lazy(() => import("../../section/footer")));

const { restaurant, house, garden } = images;
const pictures = [restaurant, house, garden];

const Gallery = () => {
	const { theme } = useContext(ThemeContext);
	const { currentLanguage } = useContext(LanguageContext);

	return (
		<div className={theme} id="mainDiv">
			<Img id="mainImage" src={house[3].src} alt={house[3].alt} />
			<h2 className="centered">{currentLanguage.links.gallery}</h2>
			<Container>
				<div className="top-left">
					<Header />
				</div>
			</Container>
			<Container>
				<Grid container spacing={3}>
					{Object.values(pictures[0]).map(picture => (
						<Grid item xs={4} key={picture.id}>
							<Img src={picture.src} className="photos" alt={picture.alt} />
						</Grid>
					))}
					{Object.values(pictures[1]).map(picture => (
						<Grid item xs={4} key={picture.id}>
							<Img src={picture.src} className="photos" alt={picture.alt} />
						</Grid>
					))}
					{Object.values(pictures[2]).map(picture => (
						<Grid item xs={4} key={picture.id}>
							<Img src={picture.src} className="photos" alt={picture.alt} />
						</Grid>
					))}
				</Grid>
			</Container>
			<Footer />
		</div>
	);
};

export default memo(Gallery);
