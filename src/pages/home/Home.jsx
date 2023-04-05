import React, { lazy } from 'react';
import { Container, Grid } from '@mui/material';

import { withSuspense } from '../../helpers/withSuspense';

import house2 from '../../assets/images/house2.jpg';
import restaurant7 from '../../assets/images/restaurant7.jpg';
import garden9 from '../../assets/images/garden9.jpg';

import './Home.scss';
import Slider from './../../compontents/slider/Slider';
// const Img = withSuspense(lazy(() => import('../../compontents/img/Img')));
const Header = withSuspense(lazy(() => import('../../section/header/Header')));

const Home = () => {
	let photos = [house2, restaurant7, garden9];

	return (
		<>
			<section id="sc1">
				<div className="fullScreen">
					<Slider photos={photos} photoClassName="fullScreen"></Slider>
				</div>
				<Container>
					<div className="top-left">
						<Header />
					</div>
				</Container>
			</section>
			<section id="sc2">
				<Container>
					<Grid container spacing={3}>
						<Grid item xs={4}>
							<h3 className="texts">
								<b>14 </b> Rooms 
							</h3>
							<p className="texts">4 room categories</p>
						</Grid>
						<Grid item xs={4}>
							<h3 className="texts">
								<b>Restaurant</b>
								<p className="texts">Restaurant at home</p>
							</h3>
						</Grid>
						<Grid item xs={4}>
							<h3 className="texts">
								<b>24/7</b> 
								<p className="texts">Always by your side</p>
							</h3>
						</Grid>
					</Grid>
				</Container>
			</section>
		</>
	);
};

export default Home;
