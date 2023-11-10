import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CastPage = () => {
  const { movieId } = useParams();
  const [casts, setCasts] = useState(null);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchFn = async () => {
      try {
        const { data } = await axios.get(
          ` https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US&api_key=c2d5ae1916124f8e18d2a212d8e4ab11`
        );
        setCasts(data.cast);
        console.log(data.cast);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFn();
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <div>
      <ul>
        {casts !== null &&
          casts.map(cast => {
            return (
              <li key={cast.credit_id}>
                <img
                  src={
                    cast.profile_path
                      ? [`https://image.tmdb.org/t/p/w500/${cast.profile_path}`]
                      : defaultImg
                  }
                  width={125}
                  alt="poster"
                />
                <h3>{cast.name}</h3>
                <p>Character: {cast.character}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CastPage;
