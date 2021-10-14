import s from '../MoviesPageView/MoviesPageView.module.css';

const MoviesPageView = () => {
  return (
    <div>
      <form>
        <input type="text" className={s.input} placeholder="Find movies" />
        <button type="submit" className={s.btn}>
          Search
        </button>
      </form>
      <h1>Movies page</h1>
    </div>
  );
};

export default MoviesPageView;
