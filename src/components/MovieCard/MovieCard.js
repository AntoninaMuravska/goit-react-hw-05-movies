import defaultBackdropImg from '../../components/MoviePreview/defaultBackdropImg.jpg';
import s from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  return (
    <div className={s.thumb}>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : defaultBackdropImg
        }
        alt=""
        className={s.img}
      />
      <div className={s.infoThumb}>
        <h2 className={s.title}>{movie.title}</h2>
        <h3 className={s.secondaryTitle}>Rate</h3>
        <p className={s.info}>{movie.vote_average}</p>
        <h3 className={s.secondaryTitle}>Overview</h3>
        <p className={s.info}>{movie.overview}</p>
        {movie.genres && (
          <div className={s.genres}>
            <h3 className={s.secondaryTitle}>Genres</h3>
            <ul className={s.genresList}>
              {movie.genres.map(genre => (
                <li key={genre.id} className={s.genresItem}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
