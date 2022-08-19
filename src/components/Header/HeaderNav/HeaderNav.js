import { Link } from "react-router-dom";

import './HeaderNav.css';

function HeaderNav() {
  return (
    <nav className="header-nav">
      <ul className="header-nav__list">
        <li className="header-nav__item">
          <Link to="/movies" className="header-nav__link">Фильмы</Link>
        </li>
        <li className="header-nav__item">
          <Link to="/saved-movies" className="header-nav__link">Сохраненные фильмы</Link>
        </li>
      </ul>
    </nav>
  )
}

export default HeaderNav;
