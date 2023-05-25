/*
import { Routes, Route, HashRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviePage from '../pages/MoviePage';
import ActorPage from '../pages/ActorPage';
import NotFoundPage from '../pages/NotFoundPage';

function AppRouter() {
  return (
    <HashRouter >
       <div className='site-container'>
       <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/movie/:movieId" element={<MoviePage />} />
         <Route path="/actor/:actorId" element={<ActorPage />} />
         <Route path="/no" component={NotFoundPage} />
         <Route path="/no2" component={<NotFoundPage />} />
         <Route path="*" element={<NotFoundPage />} />
       </Routes>
       </div>
    </HashRouter>

  );
}

export default AppRouter;
*/


import { Routes, Route, HashRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviePage from '../pages/MoviePage';
import ActorPage from '../pages/ActorPage';
import NotFoundPage from '../pages/NotFoundPage';

function AppRouter() {
  return (
    <HashRouter>
      <div className='site-container'>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/movie/:movieId" element={<MoviePage />} />
          <Route path="/movie-explorer/movie/:movieId" element={<MoviePage />} />
          <Route path="/actor/:actorId" element={<ActorPage />} />
          <Route path="/error" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default AppRouter;


