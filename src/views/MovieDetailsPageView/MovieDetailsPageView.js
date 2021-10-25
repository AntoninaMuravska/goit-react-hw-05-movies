import { useState, useEffect, lazy, Suspense } from 'react';
import {
  useParams,
  Route,
  NavLink,
  Switch,
  useRouteMatch,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { getMovieDetails } from '../../services/moviesApi';
import MovieCard from '../../components/MovieCard';

import s from './MovieDetailsPageView.module.css';

const Cast = lazy(() =>
  import('../../components/Cast' /* webpackChunkName: "cast" */),
);
const Reviews = lazy(() =>
  import('../../components/Reviews' /* webpackChunkName: "reviews" */),
);

export default function MovieDetailsView() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const history = useHistory();
  const { url, path } = useRouteMatch();

  useEffect(() => {
    getMovieDetails(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  const handleGoBack = () => {
    history.push(location?.state?.from ?? '/');
    console.log(history);
  };

  return (
    <div className={s.card}>
      <button type="button" className={s.btnBack} onClick={handleGoBack}>
        Back
      </button>

      {movie && <MovieCard movie={movie} />}

      <h3 className={s.secondaryTitle}>More info</h3>
      <ul className={s.moreInfoList}>
        <li className={s.moreInfoItem}>
          <NavLink
            to={{
              pathname: `${url}/cast`,
              state: { from: location.state.from },
            }}
            className={s.link}
            activeClassName="NavLink--active"
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            to={{
              pathname: `${url}/reviews`,
              state: { from: location.state.from },
            }}
            className={s.link}
            activeClassName="NavLink--active"
          >
            Reviews
          </NavLink>
        </li>
      </ul>
      <Suspense fallback={<b>Loading...</b>}>
        <Switch>
          <Route path={`${path}/cast`}>
            <Cast />
          </Route>
          <Route path={`${path}/reviews`}>
            <Reviews />
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}
