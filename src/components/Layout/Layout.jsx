import { Loader } from 'components/Loader/Loader';
import React, { Suspense } from 'react';
import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
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
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </main>
    </div>
  );
};

export default Layout;
