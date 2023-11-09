import { HomePage } from 'pages/HomePage';
import { MoviesDetailsPge } from 'pages/MovieDetailsPage';
import { MoviesPage } from 'pages/MoviesPage';
import { Routes, Route, NavLink } from 'react-router-dom';

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
          <Route path="/movies/:movieId" element={<MoviesDetailsPge />} />
        </Routes>
      </main>
    </div>
  );
};
