import { fetch } from 'components/fetchRequest/fetchRequest';
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
        const data = await fetch(`movie/${movieId}/credits`);
        setCasts(data.cast);
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
      {casts !== null && (
        <ul>
          {casts.map(cast => {
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
      )}
    </div>
  );
};

export default CastPage;
