import { useState, useEffect } from 'react';
import MoviesList from '../../components/MoviesList';
import s from './HomePageView.module.css';
import { fetchTrendingMovies } from '../../services/moviesApi';

export default function HomePageView() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then(setMovies)
      .catch(error => console.log(error));
  }, []);

  return (
    <div className={s.thumb}>
      <h1 className={s.title}>Popular movies</h1>
      <MoviesList movies={movies} />
    </div>
  );
}
