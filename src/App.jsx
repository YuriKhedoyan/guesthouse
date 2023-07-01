import React, { lazy, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import eng from './locales/eng.json'
import withSuspense from "./helpers/withSuspense";
import ThemeContext from "./contexts/themeContext";
import LanguageContext from "./contexts/languageContext";

const Home = withSuspense(lazy(() => import("./pages/home")));
const Rooms = withSuspense(lazy(() => import("./pages/rooms")));
const Gallery = withSuspense(lazy(() => import("./pages/gallery")));
const ContactUs = withSuspense(lazy(() => import("./pages/contactUs")));
const Restaurant = withSuspense(lazy(() => import("./pages/restaurant")));

const App = () => {
	const [theme, setTheme] = useState("light");
	const [currentLanguage, setCurrentLanguage] = useState(eng)

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			<LanguageContext.Provider value={{ currentLanguage, setCurrentLanguage }}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/rooms" element={<Rooms />} />
						<Route path="/gallery" element={<Gallery />} />
						<Route path="/contactUs" element={<ContactUs />} />
						<Route path="/restaurant" element={<Restaurant />} />
					</Routes>
				</BrowserRouter>
			</LanguageContext.Provider>
		</ThemeContext.Provider>
	);
};

export default App;