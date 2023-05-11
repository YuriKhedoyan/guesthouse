import { Link } from "react-router-dom";
import { Grid, Button, ButtonGroup } from "@mui/material";
import React, { memo, useContext } from "react";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

import eng from "../../locales/eng.json";
import ThemeContext from "../../locales/themeContext";

import "./Header.scss";

const { links } = eng;

const Header = () => {
	const {theme, setTheme} = useContext(ThemeContext);

	window.addEventListener("scroll", function() {
		let element = document.getElementById("mainHeader");
		if (window.scrollY >= 50) {
			element.classList.add("sticky");
		} else {
			element.classList.remove("sticky");
		}
	});

	const switchTheme = () => setTheme(theme === "light" ? "dark" : "light");

	return (
		<div id={"mainHeader"} className={theme}>
			<header>
				<Grid container spacing={2} className="content">
					<Grid item xs={8}>
						<h4>
							<Link to="/" className="links" id="title">
								{links.home}
							</Link>
							<Button onClick={switchTheme} variant="contained">{theme}</Button>
							<ButtonGroup variant="contained" aria-label="outlined primary button group">
								<Button>One</Button>
								<Button>Two</Button>
								<Button>Three</Button>
							</ButtonGroup>
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
								<p className="info"><EmailIcon/></p><p className="info txt">khedoyans@gmail.com</p>
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
