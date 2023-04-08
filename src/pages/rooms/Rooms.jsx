import { React, lazy } from 'react';
import {
	Container,
	Grid,
	Card,
	CardActions,
	CardContent,
	CardMedia,
} from '@mui/material';

import { withSuspense } from '../../helpers/withSuspense';

import housePicture1 from '../../assets/images/house.jpg';
import housePicture2 from '../../assets/images/house2.jpg';
import housePicture3 from '../../assets/images/house3.jpg';
import housePicture4 from '../../assets/images/house4.jpg';
import pic1 from '../../assets/images/9S5A9235-1-scaled.jpg';

import './Rooms.scss';

const Rooms = () => {
	const Header = withSuspense(
		lazy(() => import('../../section/header/Header'))
	);

	const Footer = withSuspense(
		lazy(() => import('../../section/footer/Footer'))
	);

	const Img = withSuspense(lazy(() => import('../../compontents/img/Img')));
	return (
		<>
			<Img picture={pic1} alt="Spruce branch" imgId="mainImage" />
			<h2 className="centered">ROOMS</h2>
			<Container>
				<div className="top-left">
					<Header></Header>
				</div>
				<br></br>
				<br></br>
				<Grid container spacing={2}>
					<Grid item xs={6}>
						<div className="cards">
							<span>
								<Card sx={{ maxWidth: 450 }}>
									<CardMedia
										component="img"
										height="300"
										image={housePicture1}
										alt="Paella dish"
									/>
									<CardContent>
										<h3>Standard Room</h3>
									</CardContent>
									<CardActions disableSpacing>
										<h3>From 53.000 ֏</h3>
									</CardActions>
								</Card>
							</span>
							<span>
								<Card sx={{ maxWidth: 450 }}>
									<CardMedia
										component="img"
										height="300"
										image={housePicture2}
										alt="Paella dish"
									/>
									<CardContent>
										<h3>Standard Room</h3>
									</CardContent>
									<CardActions disableSpacing>
										<h3>From 53.000 ֏</h3>
									</CardActions>
								</Card>
							</span>
						</div>
					</Grid>
					<Grid item xs={6}>
						<div className="cards">
							<span>
								<Card sx={{ maxWidth: 450 }}>
									<CardMedia
										component="img"
										height="300"
										image={housePicture3}
										alt="Paella dish"
									/>
									<CardContent>
										<h3>Standard Room</h3>
									</CardContent>
									<CardActions disableSpacing>
										<h3>From 53.000 ֏</h3>
									</CardActions>
								</Card>
							</span>
							<span>
								<Card sx={{ maxWidth: 450 }}>
									<CardMedia
										component="img"
										height="300"
										image={housePicture4}
										alt="Paella dish"
									/>
									<CardContent>
										<h3>Standard Room</h3>
									</CardContent>
									<CardActions disableSpacing>
										<h3>From 53.000 ֏</h3>
									</CardActions>
								</Card>
							</span>
						</div>
					</Grid>
				</Grid>
			</Container>
			<Footer></Footer>
		</>
	);
};

export default Rooms;
