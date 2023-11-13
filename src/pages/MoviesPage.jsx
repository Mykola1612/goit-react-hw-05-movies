import axios from 'axios';
import FilmsList from 'components/FilmsList/FilmsList';
import { Loader } from 'components/Loader';
import Search from 'components/Search/Search';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchFilms, setSearchFilms] = useState([]);
  const [loader, setLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const queryValue = searchParams.get('query');

  const location = useLocation();

  const handleSubmit = searchValue => {
    setSearchParams({ query: searchValue });
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
      <Search handleSubmit={handleSubmit} />
      <FilmsList films={searchFilms} location={location} />
    </div>
  );
};

export default MoviesPage;
