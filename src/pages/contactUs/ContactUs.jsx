import { React, lazy } from 'react';
import { Container, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Img from '../../compontents/img/Img';
import { withSuspense } from '../../helpers/withSuspense';

const Header = withSuspense(lazy(() => import('../../section/header/Header')));
const Footer = withSuspense(lazy(() => import('../../section/footer/Footer')));

import house2 from '../../assets/images/house2.jpg';

import './ContactUs.scss';

const ContactUs = () => {
	return (
		<>
			<Img picture={house2} alt="House From Top" imgId="mainImage" />
			<h2 className="centered">CONTACT US</h2>
			<Container>
				<div className="top-left">
					<Header></Header>
				</div>
			</Container>
			<Container>
				<div className="writingSection">
					<br></br>
					<Grid container spacing={2}>
						<Grid item sm={6}>
							<label>
								Name<span className="text-danger ml-1">*</span>
							</label>
							<br></br>
							<TextField
								id="outlined-basic"
								variant="outlined"
								className="inputTexts"
							/>
						</Grid>
						<Grid item sm={6}>
							<label>
								Email<span className="text-danger ml-1">*</span>
							</label>
							<br></br>
							<TextField
								id="outlined-basic"
								variant="outlined"
								className="inputTexts"
							/>
						</Grid>
					</Grid>
					<br></br>
					<p>
						<label>
							Message<span className="text-danger ml-1">*</span>
						</label>
						<br></br>
						<span className="wpcf7-form-control-wrap" data-name="message-en">
							<textarea
								cols="40"
								rows="10"
								id="message"
								name="message-en"
								className="form-control"
								aria-required="true"
								aria-invalid="false"
							>
								{' '}
							</textarea>
						</span>
					</p>
					<Button variant="contained" color="success" className="buttons">
						Send
					</Button>
				</div>
			</Container>
			<br></br>
			<Footer></Footer>
		</>
	);
};

export default ContactUs;
