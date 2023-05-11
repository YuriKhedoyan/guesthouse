import React, { lazy, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { withSuspense } from "./helpers/withSuspense";

import ThemeContext from "./locales/themeContext";

const Home = withSuspense(lazy(() => import("./pages/home")));
const Rooms = withSuspense(lazy(() => import("./pages/rooms")));
const Gallery = withSuspense(lazy(() => import("./pages/gallery")));
const ContactUs = withSuspense(lazy(() => import("./pages/contactUs")));
const Restaurant = withSuspense(lazy(() => import("./pages/restaurant")));

const App = () => {
	const [theme, setTheme] = useState("light");

	return (
		<ThemeContext.Provider value={{theme, setTheme}}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/rooms" element={<Rooms />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/contactUs" element={<ContactUs />} />
					<Route path="/restaurant" element={<Restaurant />} />
				</Routes>
			</BrowserRouter>
		</ThemeContext.Provider>
	);
};

export default App;