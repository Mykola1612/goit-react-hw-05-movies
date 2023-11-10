import axios from 'axios';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const queryValue = searchParams.get('query');

  const location = useLocation();

  const handleSubmit = e => {
    e.preventDefault();
    const value = e.currentTarget.elements.inputParams.value;
    setSearchParams({ query: value });
  };

  useEffect(() => {
    if (!queryValue) {
      return;
    }
    const fetchFn = async () => {
      try {
        setLoader(true);
        const { data } = await axios.get(
          ` https://api.themoviedb.org/3/search/movie?query=${queryValue}&include_adult=false&language=en-US&page=1&api_key=c2d5ae1916124f8e18d2a212d8e4ab11`
        );

        setSearchFilms(data.results);
      } catch (error) {
      } finally {
        setLoader(false);
      }
    };
    fetchFn();
  }, [queryValue]);

  return (
    <div>
      {loader && <Loader />}
      <form action="submit" onSubmit={handleSubmit}>
        <input type="text" name="inputParams" />
        <button>Search</button>
      </form>
      <ul>
        {searchFilms.length !== 0 &&
          searchFilms.map(searchFilm => {
            return (
              <li key={searchFilm.id}>
                <Link
                  state={{ from: location }}
                  to={`/movies/${searchFilm.id}`}
                >
                  {searchFilm.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default MoviesPage;
