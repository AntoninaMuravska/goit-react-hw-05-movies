import s from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
  <nav className={s.menu}>
    <ul className={s.list}>
      <li className={s.item}>
        <NavLink
          exact
          to="/"
          className={s.navLink}
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/movies"
          className={s.navLink}
          activeClassName="NavLink--active"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  </nav>
);

export default Navigation;

//home
//movies
