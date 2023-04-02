import ReactDOM from 'react-dom/client';
import { lazy, React } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { withSuspense } from './helpers/withSuspense';

const Gallery = withSuspense(lazy(() => import('./pages/gallery/Gallery')));
const ContactUs = withSuspense(
	lazy(() => import('./pages/contactUs/ContactUs'))
);
const Rooms = withSuspense(lazy(() => import('./pages/rooms/Rooms')));
const LoginPage = withSuspense(
	lazy(() => import('./pages/register/LoginPage'))
);
const Home = withSuspense(lazy(() => import('./pages/home/Home')));
const RegisterPage = withSuspense(
	lazy(() => import('./pages/register/RegisterPage'))
);
const Restaurant = withSuspense(
	lazy(() => import('./pages/restaurant/Restaurant'))
);

const router = createBrowserRouter([
	{
		path: '/',
		element: <LoginPage />,
	},
	{
		path: '/registerPage',
		element: <RegisterPage />,
	},
	{
		path: '/home',
		element: <Home />,
	},
	{
		path: '/rooms',
		element: <Rooms />,
	},
	{
		path: '/restaurant',
		element: <Restaurant />,
	},
	{
		path: '/contactUs',
		element: <ContactUs />,
	},
	{
		path: '/gallery',
		element: <Gallery />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React>
		<RouterProvider router={router} />
	</React>
);
