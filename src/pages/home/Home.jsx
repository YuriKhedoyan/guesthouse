import React, { lazy } from 'react';
import { Container } from '@mui/material';

import { withSuspense } from '../../helpers/withSuspense';

import house2 from '../../assets/images/house2.jpg';

import './Home.scss';

const Home = () => {
	const Img = withSuspense(lazy(() => import('../../compontents/img/Img')));
	const Header = withSuspense(
		lazy(() => import('../../section/header/Header'))
	);

	return (
		<>
			<section >
				<Img
					pathToPicture={house2}
					alt="View From Top Of The House"
					pictureId="sc1Background"
				/>
				<h2 className="center">KHEDOYANS GUESTHOUSE</h2>
				<Container>
					<div className="top-left">
						<Header />
					</div>
				</Container>
			</section>
		</>
	);
};

export default Home;
