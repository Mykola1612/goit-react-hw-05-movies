import { fetch } from 'components/Fetch/fetch';
import FilmsList from 'components/FilmsList/FilmsList';
import { Loader } from 'components/Loader';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const HomePage = () => {
  const [loader, setLoader] = useState(false);
  const [films, setFilms] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const fetchFn = async () => {
      try {
        setLoader(true);
        const data = await fetch(`trending/all/day`);
        setFilms(data.results);
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
      <FilmsList films={films} location={location} />
    </div>
  );
};

export default HomePage;
