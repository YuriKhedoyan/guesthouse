import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import { withSuspense } from './helpers/withSuspense';

// const Gallery = withSuspense(lazy(() => import("./pages/Gallery")));
// const ContactUs = withSuspense(lazy(() => import('./pages/ContactUs')));
// const Rooms = withSuspense(lazy(() => import('./pages/Rooms')));
// const LoginPage = withSuspense(lazy(() => import('./pages/LoginPage')));
const Home = withSuspense(lazy(() => import('./pages/home/Home')));
// const RegisterPage = withSuspense(lazy(() => import('./pages/RegisterPage')));
// const Restaurant = withSuspense(lazy(() => import('./pages/Restaurant')));

const App = () => {

  return (
    <Routes>
      {/* <Route path='/' element={<LoginPage />} /> */}
      {/* <Route path='/registerPage' element={<RegisterPage />} /> */}
      <Route path='/home' element={<Home />} />
      {/* <Route path='/rooms' element={<Rooms />} /> */}
      {/* <Route path='/restaurant' element={<Restaurant />} /> */}
      {/* <Route path='/contactUs' element={<ContactUs />} /> */}
      {/* <Route path='/gallery' element={<Gallery />} /> */}
    </Routes>
  );
}

export default App;
