import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import MoviePreview from '../MoviePreview';
import s from './MoviesList.module.css';
import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={s.list}>
      {movies.map(({ id, title, backdrop_path }) => (
        <li key={id} className={s.item}>
          <Link
            className={s.link}
            to={{
              pathname: `movies/${id}`,
              state: { from: location },
            }}
          >
            <MoviePreview id={id} title={title} backdrop_path={backdrop_path} />
          </Link>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ),
};

export default MoviesList;
