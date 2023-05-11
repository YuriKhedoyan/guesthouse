import React, { lazy, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { withSuspense } from "./helpers/withSuspense";

import ThemeContext from "./locales/themeContext";

const Home = withSuspense(lazy(() => import("./pages/Home")));
const Rooms = withSuspense(lazy(() => import("./pages/Rooms")));
const Gallery = withSuspense(lazy(() => import("./pages/Gallery")));
const ContactUs = withSuspense(lazy(() => import("./pages/ContactUs")));
const Login = withSuspense(lazy(() => import("./pages/register/Login")));
const Restaurant = withSuspense(lazy(() => import("./pages/Restaurant")));
const Register = withSuspense(lazy(() => import("./pages/register/Register")));

const App = () => {
	const [theme, setTheme] = useState("light");
	console.log("и");

	return (
		<ThemeContext.Provider value={{theme, setTheme}}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/rooms" element={<Rooms />} />
					<Route path="/login" element={<Login />} />
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/register" element={<Register />} />
					<Route path="/contactUs" element={<ContactUs />} />
					<Route path="/restaurant" element={<Restaurant />} />
				</Routes>
			</BrowserRouter>
		</ThemeContext.Provider>
	);
};

export default App;