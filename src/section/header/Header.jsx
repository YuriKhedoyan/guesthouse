import React from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

import eng from "../../locales/eng.json";

import "./Header.scss";

const Header = () => {
	const { links } = eng;
	const props = {
		title: {
			className: "links",
			id: "title",
		},
		links: {
			className: "links",
		},
	};

	return (
		<header id="mainHeader">
			<br></br>
			<Grid container spacing={2}>
				<Grid item xs={8}>
					<h4>
						<Link to="/" {...props.title}>
							{links.home}
						</Link>
					</h4>
				</Grid>
				<Grid item xs={4}>
					<div className="linksDiv">
						<span className="linksSection">
							<h4>
								<Link to="/rooms" {...props.links}>
									{links.rooms}
								</Link>
							</h4>
						</span>
						<span className="linksSection">
							<h4>
								<Link to="/gallery" {...props.links}>
									{links.gallery}
								</Link>
							</h4>
						</span>
						<span className="linksSection">
							<h4>
								<Link to="/restaurant" {...props.links}>
									{links.restaurant}
								</Link>
							</h4>
						</span>
						<span className="linksSection">
							<h4>
								<Link to="/contactUs" {...props.links}>
									{links.contactUs}
								</Link>
							</h4>
						</span>
					</div>
				</Grid>
			</Grid>
		</header>
	);
};

export default Header;
