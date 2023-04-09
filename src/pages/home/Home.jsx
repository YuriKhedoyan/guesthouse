import React, { lazy } from 'react';
import { Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import Slider from './../../compontents/slider/Slider';
import { withSuspense } from '../../helpers/withSuspense';

const Header = withSuspense(lazy(() => import('../../section/header/Header')));
const Img = withSuspense(lazy(() => import('../../compontents/img/Img')));

import house from '../../assets/images/house.jpg';

import './Home.scss';

const Home = () => {
	return (
		<>
			<section id="sc1">
				<div className="fullScreen">
					<Slider photoClassName="fullScreen"></Slider>
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
			<br></br>
			<section id="sc3">
				<div>
					<Container>
						<Grid container spacing={2}>
							<Grid item xs={4}>
								<h4 className="texts">Welcome to Khedoyans Guesthouse</h4>
								<p className="texts">
									The Khedoyans Guesthouse will have been launched by the end of
									2023.The hotel is located in the very heart of Dilijan on the
									highway to Haghartsin Monastery. Dilijazz Hotel & Restaurant
									offers high-end facilities for unforgettable leisure and
									business trips. For travelers appreciating the beauty of
									nature Dilijazz Hotel and Restaurant is the perfect
									destination for an unforgettable vacation. Being surrounded in
									the greenest nature of Armenia your needs for comfort and a
									relaxing stay will meet all your expectations in one place.
								</p>
							</Grid>
							<Grid item xs={4}>
								<Img
									pathToPicture={house}
									pictureClassName="photos"
									alternativeName="Restaurant"
								/>
							</Grid>
						</Grid>
					</Container>
				</div>
			</section>
			<section id="sc4">
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<span id="backgroundImg1">
							<div>
								<p className="texts">Standard Room</p>
								<p className="texts">From 53.000</p>
							</div>
						</span>
					</Grid>
					<Grid item xs={6}>
						<span id="backgroundImg2">
							<div>
								<p className="texts">Deluxe</p>
								<p className="texts">From 59.000</p>
							</div>
						</span>
					</Grid>
				</Grid>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<span id="backgroundImg3">
							<div>
								<p className="texts">Deluxe Superior</p>
								<p className="texts">From 64.000</p>
							</div>
						</span>
					</Grid>
					<Grid item xs={6}>
						<span id="backgroundImg4">
							<div>
								<p className="texts">Duplex</p>
								<p className="texts">From 66.000</p>
							</div>
						</span>
					</Grid>
				</Grid>
				<Link to="/rooms" className="links">
					<div id="linkToRooms">
						<p>All rooms</p>
					</div>
				</Link>
			</section>
			<section id="sc6">
				<p className='texts'>Our Benefits</p>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<p className="texts yellow">High Class Rooms</p>
					</Grid>
					<Grid item xs={4}>
							<p className="texts">Wonderful Nature</p>
					</Grid>
					<Grid item xs={4}>
							<p className="texts yellow">Best Cuisine</p>
					</Grid>
				</Grid>
        <br></br>
			</section>
		</>
	);
};

export default Home;
