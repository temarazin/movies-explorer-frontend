import { Link } from "react-router-dom";

import "./HeaderNav.css";

function HeaderNav({ isOpened, onCloseMenu }) {
  return (
    <nav className={`header-nav${isOpened ? " header-nav_opened" : ""}`}>
      <button class="header-nav__close" onClick={onCloseMenu}></button>
      <ul className="header-nav__list">
        <li className="header-nav__item header-nav__item_mobile-only">
          <Link to="/" className="header-nav__link">
            Главная
          </Link>
        </li>
        <li className="header-nav__item">
          <Link to="/movies" className="header-nav__link">
            Фильмы
          </Link>
        </li>
        <li className="header-nav__item">
          <Link to="/saved-movies" className="header-nav__link">
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
