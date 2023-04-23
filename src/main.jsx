import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { withSuspense } from "./helpers/withSuspense";

const Gallery = withSuspense(lazy(() => import("./pages/Gallery")));
const ContactUs = withSuspense(lazy(() => import("./pages/ContactUs")));
const Rooms = withSuspense(lazy(() => import("./pages/Rooms")));
const Home = withSuspense(lazy(() => import("./pages/Home")));
const Login = withSuspense(lazy(() => import("./pages/register/Login")));
const Register = withSuspense(lazy(() => import("./pages/register/Register")));
const Restaurant = withSuspense(lazy(() => import("./pages/Restaurant")));

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
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
	</React.StrictMode>
);
