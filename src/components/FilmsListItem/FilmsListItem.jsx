import React from 'react';
import { Link } from 'react-router-dom';

const FilmsListItem = ({ id, title, name, location }) => {
  return (
    <li key={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        {title || name}
      </Link>
    </li>
  );
};

export default FilmsListItem;
