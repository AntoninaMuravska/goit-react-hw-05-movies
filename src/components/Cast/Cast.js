import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieCast } from '../../services/moviesApi';
import defaultImage from '../../images/defaultImage.jpg';

import s from './Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    movieCast(movieId)
      .then(setCast)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <ul className={s.list}>
      {cast.map(el => {
        return (
          <li key={el.credit_id} className={s.item}>
            <img
              src={
                el.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                  : `${defaultImage}`
              }
              alt={el.name}
              width="120"
            />
            <p className={s.name}>{el.name}</p>
          </li>
        );
      })}
    </ul>
  );
}
