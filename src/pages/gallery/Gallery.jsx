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
			<Img
				pathToPicture={house2}
				alternativeName="House From Top"
				pictureId="mainImage"
			/>
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
						<Img
							pathToPicture={restaurant1}
							pictureClassName="photos"
							alternativeName="Restaurant"
						/>
					</Grid>
					<Grid item xs={4}>
						<Img
							pathToPicture={restaurant2}
							pictureClassName="photos"
							alternativeName="Restaurant"
						/>
					</Grid>
					<Grid item xs={4}>
						<Img
							pathToPicture={restaurant3}
							pictureClassName="photos"
							alternativeName="Restaurant"
						/>
					</Grid>
				</Grid>
				<br></br>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Img
							pathToPicture={restaurant4}
							pictureClassName="photos"
							alternativeName="Restaurant"
						/>
					</Grid>
					<Grid item xs={4}>
						<Img
							pathToPicture={restaurant5}
							pictureClassName="photos"
							alternativeName="Restaurant"
						/>
					</Grid>
					<Grid item xs={4}>
						<Img
							pathToPicture={houseRestaurant}
							pictureClassName="photos"
							alternativeName="House Restaurant"
						/>
					</Grid>
				</Grid>
				<br></br>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Img
							pathToPicture={restaurant6}
							pictureClassName="photos"
							alternativeName="Restaurant"
						/>
					</Grid>
					<Grid item xs={4}>
						<Img
							pathToPicture={restaurant7}
							pictureClassName="photos"
							alternativeName="Restaurant"
						/>
					</Grid>
					<Grid item xs={4}>
						<Img
							pathToPicture={garden1}
							pictureClassName="photos"
							alternativeName="Garden"
						/>
					</Grid>
				</Grid>
				<br></br>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Img
							pathToPicture={garden2}
							pictureClassName="photos"
							alternativeName="Garden"
						/>
					</Grid>
					<Grid item xs={4}>
						<Img
							pathToPicture={garden3}
							pictureClassName="photos"
							alternativeName="Garden"
						/>
					</Grid>
					<Grid item xs={4}>
						<Img
							pathToPicture={garden4}
							pictureClassName="photos"
							alternativeName="Garden"
						/>
					</Grid>
				</Grid>
				<br></br>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Img
							pathToPicture={garden5}
							pictureClassName="photos"
							alternativeName="Garden"
						/>
					</Grid>
					<Grid item xs={4}>
						<Img
							pathToPicture={garden6}
							pictureClassName="photos"
							alternativeName="Garden"
						/>
					</Grid>
					<Grid item xs={4}>
						<Img
							pathToPicture={garden7}
							pictureClassName="photos"
							alternativeName="Garden"
						/>
					</Grid>
				</Grid>
				<br></br>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Img
							pathToPicture={garden8}
							pictureClassName="photos"
							alternativeName="Garden"
						/>
					</Grid>
					<Grid item xs={4}>
						<Img
							pathToPicture={garden9}
							pictureClassName="photos"
							alternativeName="Garden"
						/>
					</Grid>
					<Grid item xs={4}>
						<Img
							pathToPicture={garden10}
							pictureClassName="photos"
							alternativeName="Garden"
						/>
					</Grid>
				</Grid>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Img
							pathToPicture={house1}
							pictureClassName="photos"
							alternativeName="Garden"
						/>
					</Grid>
					<Grid item xs={4}>
						<Img
							pathToPicture={house2}
							pictureClassName="photos"
							alternativeName="Garden"
						/>
					</Grid>
					<Grid item xs={4}>
						<Img
							pathToPicture={house3}
							pictureClassName="photos"
							alternativeName="Garden"
						/>
					</Grid>
				</Grid>
				<Grid container spacing={3}>
					<Grid item xs={4}>
						<Img
							pathToPicture={house4}
							pictureClassName="photos"
							alternativeName="Garden"
						/>
					</Grid>
					<Grid item xs={4}>
						<Img
							pathToPicture={house1}
							pictureClassName="photos"
							alternativeName="Garden"
						/>
					</Grid>
					<Grid item xs={4}>
						<Img
							pathToPicture={house}
							pictureClassName="photos"
							alternativeName="Garden"
						/>
					</Grid>
				</Grid>
			</Container>
			<Footer></Footer>
		</>
	);
};

export default Gallery;
