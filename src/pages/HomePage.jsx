import axios from 'axios';
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
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/trending/all/day?language=en-US&api_key=c2d5ae1916124f8e18d2a212d8e4ab11`
        );
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
