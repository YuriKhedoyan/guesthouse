import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'


const App = () => {
  const Gallery = lazy(() => import("./compontents/pages/Gallery"));
  const ContactUs = lazy(() => import('./compontents/pages/ContactUs'));
  const Rooms = lazy(() => import('./compontents/pages/Rooms'));
  const LoginPage = lazy(() => import('./compontents/pages/LoginPage'));
  const HomePage = lazy(() => import('./compontents/pages/HomePage'));
  const RegisterPage = lazy(() => import('./compontents/pages/RegisterPage'));
  const Restaurant = lazy(() => import('./compontents/pages/Restaurant'));

  return (
    <Routes>
      <Route path='/' element={<Suspense><LoginPage /></Suspense>} />
      <Route path='/registerPage' element={<Suspense><RegisterPage /></Suspense>} />
      <Route path='/homePage' element={<Suspense><HomePage /></Suspense>} />
      <Route path='/rooms' element={<Suspense><Rooms /></Suspense>} />
      <Route path='/restaurant' element={<Suspense><Restaurant /></Suspense>} />
      <Route path='/contactUs' element={<Suspense><ContactUs /></Suspense>} />
      <Route path='/gallery' element={<Suspense><Gallery /></Suspense>} />
    </Routes>
  );
}

export default App;
