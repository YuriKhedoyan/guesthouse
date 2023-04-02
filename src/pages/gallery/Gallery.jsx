import { lazy, React } from 'react';
import { Container, Grid } from '@mui/material';

import { withSuspense } from '../../helpers/withSuspense';

import Img from '../../compontents/img/Img';

import restaurant1 from '../../assets/images/restaurant1.jpg';
import restaurant2 from '../../assets/images/restaurant2.jpg';
import restaurant3 from '../../assets/images/restaurant3.jpg';
import restaurant4 from '../../assets/images/restaurant4.jpg';
import restaurant5 from '../../assets/images/restaurant5.jpg';
import restaurant6 from '../../assets/images/restaurant6.jpg';
import restaurant7 from '../../assets/images/restaurant7.jpg';
import houseRestaurant from '../../assets/images/houseRestaurant.jpg';
import garden1 from '../../assets/images/garden1.jpg';
import garden2 from '../../assets/images/garden2.jpg';
import garden3 from '../../assets/images/garden3.jpg';
import garden4 from '../../assets/images/garden4.jpg';
import garden5 from '../../assets/images/garden5.jpg';
import garden6 from '../../assets/images/garden6.jpg';
import garden7 from '../../assets/images/garden7.jpg';
import garden8 from '../../assets/images/garden8.jpg';
import garden9 from '../../assets/images/garden9.jpg';
import garden10 from '../../assets/images/garden10.jpg';
import house1 from '../../assets/images/house1.jpg';
import house2 from '../../assets/images/house2.jpg';
import house3 from '../../assets/images/house3.jpg';
import house4 from '../../assets/images/house4.jpg';
import house from '../../assets/images/house.jpg';

import './Gallery.scss';
const Header = withSuspense(lazy(() => import('../../section/header/Header')));
const Footer = withSuspense(lazy(() => import('../../section/footer/Footer')));

const Gallery = () => {
	return (
		<>
			<Img picture={house2} alt="House From Top" imgId="mainImage" />
			<h2 className="centered">GALLERY</h2>
			<Container>
				<div className="top-left">
					<Header />
				</div>
			</Container>
			<br></br>
			<br></br>
			<Container>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Img picture={restaurant1} class={'photos'} alt="Restaurant" />
					</Grid>
					<Grid item xs={4}>
						<Img picture={restaurant2} class={'photos'} alt="Restaurant" />
					</Grid>
					<Grid item xs={4}>
						<Img picture={restaurant3} class={'photos'} alt="Restaurant" />
					</Grid>
				</Grid>
				<br></br>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Img picture={restaurant4} class={'photos'} alt="Restaurant" />
					</Grid>
					<Grid item xs={4}>
						<Img picture={restaurant5} class={'photos'} alt="Restaurant" />
					</Grid>
					<Grid item xs={4}>
						<Img
							picture={houseRestaurant}
							class={'photos'}
							alt="House Restaurant"
						/>
					</Grid>
				</Grid>
				<br></br>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Img picture={restaurant6} class={'photos'} alt="Restaurant" />
					</Grid>
					<Grid item xs={4}>
						<Img picture={restaurant7} class={'photos'} alt="Restaurant" />
					</Grid>
					<Grid item xs={4}>
						<Img picture={garden1} class={'photos'} alt="Garden" />
					</Grid>
				</Grid>
				<br></br>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Img picture={garden2} class={'photos'} alt="Garden" />
					</Grid>
					<Grid item xs={4}>
						<Img picture={garden3} class={'photos'} alt="Garden" />
					</Grid>
					<Grid item xs={4}>
						<Img picture={garden4} class={'photos'} alt="Garden" />
					</Grid>
				</Grid>
				<br></br>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Img picture={garden5} class={'photos'} alt="Garden" />
					</Grid>
					<Grid item xs={4}>
						<Img picture={garden6} class={'photos'} alt="Garden" />
					</Grid>
					<Grid item xs={4}>
						<Img picture={garden7} class={'photos'} alt="Garden" />
					</Grid>
				</Grid>
				<br></br>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Img picture={garden8} class={'photos'} alt="Garden" />
					</Grid>
					<Grid item xs={4}>
						<Img picture={garden9} class={'photos'} alt="Garden" />
					</Grid>
					<Grid item xs={4}>
						<Img picture={garden10} class={'photos'} alt="Garden" />
					</Grid>
				</Grid>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Img picture={house1} class={'photos'} alt="Garden" />
					</Grid>
					<Grid item xs={4}>
						<Img picture={house2} class={'photos'} alt="Garden" />
					</Grid>
					<Grid item xs={4}>
						<Img picture={house3} class={'photos'} alt="Garden" />
					</Grid>
				</Grid>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Img picture={house4} class={'photos'} alt="Garden" />
					</Grid>
					<Grid item xs={4}>
						<Img picture={house1} class={'photos'} alt="Garden" />
					</Grid>
					<Grid item xs={4}>
						<Img picture={house} class={'photos'} alt="Garden" />
					</Grid>
				</Grid>
			</Container>
			<Footer></Footer>
		</>
	);
};

export default Gallery;
