import axios from 'axios';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MoviesDetailsPge = () => {
  const { movieId } = useParams();
  const [loader, setLoader] = useState(false);
  const [film, setFilm] = useState(null);

  const newMovieId = movieId.substring(1);

  useEffect(() => {
    if (!newMovieId) {
      return;
    }
    const fetchFn = async () => {
      try {
        setLoader(true);
        const { data } = await axios.get(
          ` https://api.themoviedb.org/3/movie/${newMovieId}?language=en-US&api_key=c2d5ae1916124f8e18d2a212d8e4ab11
`
        );
        setFilm(data);
        console.log(data);
      } catch (error) {
      } finally {
        setLoader(false);
      }
    };
    fetchFn();
  }, [newMovieId]);

  let userScore;

  if (film !== null) {
    const score = film.vote_average * 10;
    userScore = Math.round(score);
  }

  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';
  return (
    <div>
      {loader && <Loader />}
      {film !== null && (
        <div>
          <img
            src={
              film.poster_path
                ? [`https://image.tmdb.org/t/p/w500/${film.poster_path}`]
                : defaultImg
            }
            width={250}
            alt="poster"
          />
          <div>
            <h2>
              {film.title} ({film.release_date.slice(0, 4)})
            </h2>
            <p>User Score: {userScore}%</p>
            <h3>Overview</h3>
            <p>{film.overview}</p>
            <h3>Genres</h3>
            <ul>
              {film.genres.map(genre => {
                return <li key={genre.id}>{genre.name}</li>;
              })}
            </ul>
          </div>
          <div>
            <h3>Additional information</h3>
            <ul>
              <li>Cast</li>
              <li>Reviews</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
