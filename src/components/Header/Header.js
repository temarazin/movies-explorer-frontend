import { Link } from "react-router-dom";
import { useState } from "react";

import HeaderNav from "./HeaderNav/HeaderNav";
import Logo from "../common/Logo/Logo";

import "./Header.css";
import '../common/ButtonWithIcon/ButtonWithIcon.css';
import '../common/Button/Button.css';

function Header({ loggedIn, className, activeItem }) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const openMenu = () => {
    setIsMenuOpened(true);
  }

  const closeMenu = () => {
    setIsMenuOpened(false);
  }

  return (
    <header className={className || "header"}>
      <div className="header__inner">
        <div className="header__column">
          <Logo />
          {loggedIn && <HeaderNav isOpened={isMenuOpened} onCloseMenu={closeMenu} activeItem={activeItem} />}
        </div>
        <div className="header__account">
          {loggedIn ? (
            <>
              <Link
                to="/profile"
                className="button-with-icon button-with-icon_icon_account header__account-link"
              >
                Аккаунт
              </Link>
              <button className="header__burger" onClick={openMenu}></button>
            </>
          ) : (
            <>
              <Link to="/sign-up" className="button button_theme_additional">
                Регистрация
              </Link>
              <Link to="/sign-in" className="button button_theme_main">Войти</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
