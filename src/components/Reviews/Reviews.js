import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieReviews } from '../../services/moviesApi';

import s from './Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    movieReviews(movieId)
      .then(setReviews)
      .catch(error => console.log(error));
  }, [movieId]);

  return reviews.length > 0 ? (
    <ul>
      {reviews.map(el => {
        return (
          <li key={el.id}>
            <p className={s.author}>Author: {el.author}</p>
            <p className={s.content}>{el.content}</p>
          </li>
        );
      })}
    </ul>
  ) : (
    <p>We can't find any rewiews for this movie</p>
  );
}
