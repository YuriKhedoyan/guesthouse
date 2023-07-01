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
						<Route path="*" element={<Home />} />
						<Route path="/khedoyans-guesthouse/" element={<Home />} />
						<Route path="/khedoyans-guesthouse/rooms" element={<Rooms />} />
						<Route path="/khedoyans-guesthouse/gallery" element={<Gallery />} />
						<Route path="/khedoyans-guesthouse/contactUs" element={<ContactUs />} />
						<Route path="/khedoyans-guesthouse/restaurant" element={<Restaurant />} />
					</Routes>
				</BrowserRouter>
			</LanguageContext.Provider>
		</ThemeContext.Provider>
	);
};

export default App;