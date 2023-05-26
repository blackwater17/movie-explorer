import {  HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviePage from '../pages/MoviePage';
import ActorPage from '../pages/ActorPage';
import ActorsPage from '../pages/ActorsPage';
import NotFoundPage from '../pages/NotFoundPage';
import LoginPage from '../pages/LoginPage';

function AppRouter() {

  return (
    <HashRouter>
      <div className='site-container'>
        <Routes>
          <Route path="/" element={<HomePage />}  />
          <Route path="/movie/:movieId" element={<MoviePage />} />
          <Route path="/actor/:actorId" element={<ActorPage />} />
          <Route path="/actors" element={<ActorsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
  
}

export default AppRouter;