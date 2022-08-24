import { Link } from "react-router-dom";

import "./HeaderNav.css";

function HeaderNav({ isOpened, onCloseMenu, activeItem }) {
  return (
    <nav className={`header-nav${isOpened ? " header-nav_opened" : ""}`}>
      <button class="header-nav__close" onClick={onCloseMenu}></button>
      <ul className="header-nav__list">
        <li className="header-nav__item header-nav__item_mobile-only">
          <Link
            to="/"
            className={`header-nav__link ${
              activeItem === "main" ? "header-nav__link_active" : ""
            }`}
          >
            Главная
          </Link>
        </li>
        <li className="header-nav__item">
          <Link
            to="/movies"
            className={`header-nav__link ${
              activeItem === "movies" ? "header-nav__link_active" : ""
            }`}
          >
            Фильмы
          </Link>
        </li>
        <li className="header-nav__item">
          <Link
            to="/saved-movies"
            className={`header-nav__link ${
              activeItem === "savedMovies" ? "header-nav__link_active" : ""
            }`}
          >
            Сохраненные фильмы
          </Link>
        </li>
      </ul>
      <Link
        to="/profile"
        className="button-with-icon button-with-icon_icon_account header-nav__account-link"
      >
        Аккаунт
      </Link>
    </nav>
  );
}

export default HeaderNav;
