import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const FilmsListItem = ({ id, title, name }) => {
  const location = useLocation();

  return (
    <li key={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        {title || name}
      </Link>
    </li>
  );
};

export default FilmsListItem;
