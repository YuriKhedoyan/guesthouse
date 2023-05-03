import React, { memo } from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

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
						<div>
							<span className="infoSection">
								<p className="info"><FacebookIcon/><InstagramIcon/></p>
							</span>
							<span className="infoSection">
								<p className="info"><PlaceIcon/></p><p className="info txt">Անդրանիկ 4</p>
							</span>
							<span className="infoSection">
								<p className="info"><LocalPhoneIcon/></p><p className="info txt">+374 12 345-678</p>
							</span>
							<span className="infoSection">
								<p className="info"><EmailIcon/></p><p className="info txt">example@gmail.com</p>
							</span>
						</div>
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
								</h4>
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
