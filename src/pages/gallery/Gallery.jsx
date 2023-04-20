import { lazy, React } from "react";
import { Container, Grid } from "@mui/material";

import eng from "../../locales/eng.json";
import Img from "../../compontents/img/Img";
import images from "../../locales/images";
import { withSuspense } from "../../helpers/withSuspense";

import "./Gallery.scss";

const Header = withSuspense(lazy(() => import("../../section/header/Header")));
const Footer = withSuspense(lazy(() => import("../../section/footer/Footer")));

const { links } = eng;
const { restaurant, house, garden } = images;

const Gallery = () => {
	const pictures = [restaurant, house, garden];

	return (
		<>
			<Img
				id="mainImage"
				src={house[3].src}
				alt={house[3].alt}
				className="animation"
			/>
			<h2 className="centered">{links.gallery}</h2>
			<Container>
				<div className="top-left">
					<Header />
				</div>
			</Container>
			<br></br>
			<br></br>
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
		</>
	);
};

export default Gallery;
