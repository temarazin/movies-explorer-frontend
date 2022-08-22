import { Link } from "react-router-dom";
import { useState } from "react";

import Button from "../common/Button/Button";
import HeaderNav from "./HeaderNav/HeaderNav";

import "./Header.css";
import '../common/ButtonWithIcon/ButtonWithIcon.css';
import logoImage from "../../images/logo.svg";

function Header(props) {
  const { loggedIn = false } = props;
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const openMenu = () => {
    setIsMenuOpened(true);
  }

  const closeMenu = () => {
    setIsMenuOpened(false);
  }

  const { className } = props;
  return (
    <header className={className || "header"}>
      <div className="header__inner">
        <div className="header__column">
          <Link to="/" className="header__logo-link">
            <img src={logoImage} alt="" className="header__logo" />
          </Link>
          {loggedIn && <HeaderNav isOpened={isMenuOpened} onCloseMenu={closeMenu} />}
        </div>
        <div className="header__account">
          {loggedIn ? (
            <>
              <Link
                to="/"
                className="button-with-icon button-with-icon_icon_account header__account-link"
              >
                Аккаунт
              </Link>
              <button className="header__burger" onClick={openMenu}></button>
            </>
          ) : (
            <>
              <Button className="button button_theme_additional">
                Регистрация
              </Button>
              <Button className="button button_theme_main">Войти</Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
