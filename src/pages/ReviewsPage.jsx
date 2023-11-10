import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchFn = async () => {
      try {
        const { data } = await axios.get(
          ` https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&api_key=c2d5ae1916124f8e18d2a212d8e4ab11`
        );
        setReviews(data.results);
        console.log(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFn();
  }, [movieId]);
  return (
    <div>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(review => {
            return (
              <li>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </div>
  );
};
