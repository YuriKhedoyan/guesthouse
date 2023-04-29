import React, { memo } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

import eng from "../../locales/eng.json";

import "./Header.scss";

const { links } = eng;

const Header = () => {
	window.addEventListener("scroll", function() {
		let element = document.getElementById("mainHeader");
		if (window.scrollY >= 50) {
			element.classList.add("sticky");
		} else {
			element.classList.remove("sticky");
		}
	});

	return (
		<div id="mainHeader">
			<header>
				<Grid container spacing={2} className="content">
					<Grid item xs={8}>
						<h4>
							<Link to="/" className="links" id="title">
								{links.home}
							</Link>
						</h4>
					</Grid>
					<Grid item xs={4}>
						<div className="linksDiv">
							<span className="linksSection">
								<h4>
									<Link to="/rooms" className="links">
										{links.rooms}
									</Link>
								</h4>
							</span>
							<span className="linksSection">
								<h4>
									<Link to="/gallery" className="links">
										{links.gallery}
									</Link>
								</h4>
							</span>
							<span className="linksSection">
								<h4>
									<Link to="/restaurant" className="links">
										{links.restaurant}
									</Link>
								</h4>
							</span>
							<span className="linksSection">
								<h4>
									<Link to="/contactUs" className="links">
										{links.contactUs}
									</Link>
								</h4>
							</span>
						</div>
					</Grid>
				</Grid>
			</header>
		</div>
	);
};

export default memo(Header);
