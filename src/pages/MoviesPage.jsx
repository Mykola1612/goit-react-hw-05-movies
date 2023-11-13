import { fetch } from 'components/Fetch/fetch';
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
    if (searchValue === '') {
      setSearchParams({});
      setSearchFilms([]);
      return;
    }
    setSearchParams({ query: searchValue });
  };

  useEffect(() => {
    if (!queryValue) {
      return;
    }
    const fetchFn = async () => {
      try {
        setLoader(true);
        const data = await fetch(
          `search/movie?query=${queryValue}&include_adult=false`
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
