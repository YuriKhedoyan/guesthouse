import React, { lazy } from 'react';
import { Container, Grid } from '@mui/material';

import Img from '../../compontents/img/Img';
import { withSuspense } from '../../helpers/withSuspense';

import restaurant2 from '../../assets/images/restaurant2.jpg';
import restaurant7 from '../../assets/images/restaurant7.jpg';

const Header = withSuspense(lazy(() => import('../../section/header/Header')));
const Footer = withSuspense(lazy(() => import('../../section/footer/Footer')));

import './Restaurant.scss';

const Restaurant = () => {
	return (
		<>
			<Img pathToPicture={restaurant7} alt="House From Top" imgId="mainImage" />
			<h2 className="centered">RESTAURANT</h2>
			<Container>
				<div className="top-left">
					<Header></Header>
				</div>
			</Container>
			<br></br>
			<br></br>
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={5}>
						<h3>Breakfast</h3>
						<br></br>
						<p>
							<b>Breakfast</b> is considered the most important meal of the day,
							therefor our restaurant offers a full buffet breakfast of special
							Armenian dishes alongside with international foods. Ingredients
							are sourced fresh and local, dairy products such as cheeses,
							yogurts, milks, and creams. We also have a variety of local jams,
							pastries, fruits and a wide selection of hot dishes with
							freshly-squeezed juices, with a last touch of coffee and tea.
						</p>
					</Grid>
					<Grid item xs={7}>
						<div className="images">
							<Img
								pathToPicture={restaurant2}
								class={'photos'}
								alt="Restaurant"
							/>
						</div>
					</Grid>
				</Grid>
				<br></br>
				<br></br>
				<br></br>
				<Grid container spacing={2}>
					<Grid item xs={5}>
						<div className="images">
							<Img
								pathToPicture={restaurant7}
								class={'photos'}
								alt="Restaurant"
							/>
						</div>
					</Grid>
					<Grid item xs={7}>
						<h3>Dinner</h3>
						<br></br>
						<p>
							<b>Dinner</b> at Khedoyans Guesthouse Hotel is the most expected
							time of the day. With our talented Chef and all the varieties of
							international dishes, we offer the best Cuisine within the region.
							The restaurant is also fulfilled with wide range of wines, to
							everyones taste. While guests relax and enjoy their glass of wine
							and dinner in the coziest atmosphere, the evening is lead with
							Jazz music played live by different famous performers. Khedoyans
							Guesthouse`s Restaurant features both indoor and outdoor dining.
							Our restaurant is open for all guests travelling within Khedoyans
							Guesthouse.
						</p>
					</Grid>
				</Grid>
			</Container>
			<Footer></Footer>
		</>
	);
};

export default Restaurant;
