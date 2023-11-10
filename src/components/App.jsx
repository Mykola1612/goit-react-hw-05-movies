import { Suspense, lazy } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Loader } from './Loader';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesDetailsPge = lazy(() => import('pages/MovieDetailsPage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const ReviewsPage = lazy(() => import('pages/ReviewsPage'));
const CastPage = lazy(() => import('pages/CastPage'));

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <NavLink to="/" className="link_header">
            Home
          </NavLink>
          <NavLink to="/movies" className="link_header">
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MoviesDetailsPge />}>
              <Route path="cast" element={<CastPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
