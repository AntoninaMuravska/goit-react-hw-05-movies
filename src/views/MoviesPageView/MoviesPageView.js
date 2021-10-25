import { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { searchMovies } from '../../services/moviesApi';
import MoviesList from '../../components/MoviesList';

import s from '../MoviesPageView/MoviesPageView.module.css';

export default function MoviesPageView() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const history = useHistory();
  const location = useLocation();

  const searchQuery = new URLSearchParams(location.search).get('query');
  // console.log('searchQuery', searchQuery);

  useEffect(() => {
    if (searchQuery) {
      searchMovies(searchQuery)
        .then(setMovies)
        .catch(error => {
          console.log(error);
        });
    }
  }, []);

  const hanldeChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('query in handleSubmit', query);

    if (query.trim() === '') {
      alert('Try again');
      return;
    }

    searchMovies(query).then(setMovies);

    history.push({ ...location, search: `query=${query}` });
    // setQuery('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          type="text"
          className={s.input}
          placeholder="Find movies"
          value={query}
          onChange={hanldeChange}
        />
        <button type="submit" className={s.btn}>
          Search
        </button>
      </form>
      {movies && <MoviesList movies={movies} />}
    </div>
  );
}
