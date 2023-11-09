import axios from 'axios';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const [loader, setLoader] = useState(false);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    const fetchFn = async () => {
      try {
        setLoader(true);
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=c2d5ae1916124f8e18d2a212d8e4ab11`
        );
        setFilms(data.results);
        console.log(data);
      } catch (error) {
      } finally {
        setLoader(false);
      }
    };
    fetchFn();
  }, []);

  return (
    <div>
      {loader && <Loader />}
      <h1>Trending today</h1>
      <ul>
        {films.map(film => {
          return (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`}>{film.name || film.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
