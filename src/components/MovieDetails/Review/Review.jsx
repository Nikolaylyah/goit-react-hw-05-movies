import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReview } from '../../../servisec/Api';

export default function Review() {
  const [review, setReview] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchMovieIdReview = async () => {
      try {
        const reviewMovieById = await fetchMovieReview(id);
        setReview(reviewMovieById.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieIdReview();
  });
  return (
    <div>
      <ul>
        {review.length === 0 ? (
          <p>We don't have any reviews for this movie.</p>
        ) : (
          review.map(({ id, author, content }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
