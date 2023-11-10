import { CastPage } from 'pages/CastPage';
import { HomePage } from 'pages/HomePage';
import { MoviesDetailsPge } from 'pages/MovieDetailsPage.jsx';
import { MoviesPage } from 'pages/MoviesPage';
import { ReviewsPage } from 'pages/ReviewsPage';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';

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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MoviesDetailsPge />}>
            <Route path="cast" element={<CastPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </div>
  );
};
