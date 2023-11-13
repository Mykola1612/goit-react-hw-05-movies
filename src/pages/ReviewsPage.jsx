import { fetch } from 'components/fetchRequest/fetchRequest';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ReviewsPage = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) {
      return;
    }
    const fetchFn = async () => {
      try {
        const data = await fetch(`movie/${movieId}/reviews`);
        setReviews(data.results);
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
              <li key={review.id}>
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

export default ReviewsPage;
