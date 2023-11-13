import FilmsListItem from 'components/FilmsListItem/FilmsListItem';
import React from 'react';

const FilmsList = ({ films, location }) => {
  return (
    <ul>
      {films.length !== 0 &&
        films.map(searchFilm => (
          <FilmsListItem
            key={searchFilm.id}
            id={searchFilm.id}
            title={searchFilm.title}
            name={searchFilm.name}
            location={location}
          />
        ))}
    </ul>
  );
};

export default FilmsList;
