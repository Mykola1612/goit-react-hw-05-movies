import { fetch } from 'components/fetchRequest/fetchRequest';
import FilmsList from 'components/FilmsList/FilmsList';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [loader, setLoader] = useState(false);
  const [films, setFilms] = useState([]);

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
      <FilmsList films={films} />
    </div>
  );
};

export default HomePage;
