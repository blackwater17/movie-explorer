/*
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviePage from '../pages/MoviePage';
import ActorPage from '../pages/ActorPage';
import NotFoundPage from '../pages/NotFoundPage';

function AppRouter() {
  return (
    <BrowserRouter>
      <div className='site-container'>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:movieId" element={<MoviePage />} />
        <Route path="/actor/:actorId" element={<ActorPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default AppRouter;

*/



import { BrowserRouter, HashRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MoviePage from '../pages/MoviePage';
import ActorPage from '../pages/ActorPage';
import NotFoundPage from '../pages/NotFoundPage';

function AppRouter() {
  const isLocal = process.env.NODE_ENV === 'development';

  return (
    <>
      {isLocal ? (
        <BrowserRouter>
          <div className='site-container'>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movie/:movieId" element={<MoviePage />} />
              <Route path="/actor/:actorId" element={<ActorPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      ) : (
        <HashRouter>
          <div className='site-container'>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movie/:movieId" element={<MoviePage />} />
              <Route path="/actor/:actorId" element={<ActorPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
        </HashRouter>
      )}
    </>
  );
}

export default AppRouter;
