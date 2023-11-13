import FilmsListItem from 'components/FilmsListItem/FilmsListItem';
import React from 'react';

const FilmsList = ({ films }) => {
  return (
    <ul>
      {films.length !== 0 &&
        films.map(searchFilm => (
          <FilmsListItem
            key={searchFilm.id}
            id={searchFilm.id}
            title={searchFilm.title}
            name={searchFilm.name}
          />
        ))}
    </ul>
  );
};

export default FilmsList;
