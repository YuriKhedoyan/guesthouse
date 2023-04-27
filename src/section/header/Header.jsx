import React, {useEffect, useState} from "react";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

import eng from "../../locales/eng.json";

import "./Header.scss";

const { links } = eng;

const Header = () => {
	const [isSticky, setSticky] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.pageYOffset > 50) {
				setSticky(true);
			} else {
				setSticky(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const headerClass = isSticky ? "sticky" : "default";

	return (
		<div id="mainHeader" className={headerClass}>
			<header>
				<br></br>
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

export default Header;
