import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { withSuspense } from "./helpers/withSuspense";

const Gallery = withSuspense(lazy(() => import("./pages/gallery/Gallery")));
const ContactUs = withSuspense(
  lazy(() => import("./pages/contactUs/ContactUs"))
);
const Rooms = withSuspense(lazy(() => import("./pages/rooms/Rooms")));
const Login = withSuspense(lazy(() => import("./pages/register/Login")));
const Home = withSuspense(lazy(() => import("./pages/home/Home")));
const Register = withSuspense(lazy(() => import("./pages/register/Register")));
const Restaurant = withSuspense(lazy(() => import("./pages/restaurant/Restaurant")));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/rooms",
    element: <Rooms />,
  },
  {
    path: "/restaurant",
    element: <Restaurant />,
  },
  {
    path: "/contactUs",
    element: <ContactUs />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
