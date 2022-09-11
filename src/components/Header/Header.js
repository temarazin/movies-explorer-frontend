import { Link } from "react-router-dom";
import Button from "../common/Button/Button";
import { useState } from "react";

import HeaderNav from "./HeaderNav/HeaderNav";
import Logo from "../common/Logo/Logo";

import "./Header.css";
import "../common/ButtonWithIcon/ButtonWithIcon.css";

function Header({ loggedIn, className, activeItem }) {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const openMenu = () => {
    setIsMenuOpened(true);
  };

  const closeMenu = () => {
    setIsMenuOpened(false);
  };

  return (
    <header className={className || "header"}>
      <div className="header__inner">
        <div className="header__column">
          <Logo />
          {loggedIn && (
            <HeaderNav
              isOpened={isMenuOpened}
              onCloseMenu={closeMenu}
              activeItem={activeItem}
            />
          )}
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
              <Button
                elemType="link"
                link="/sign-up"
                className="button button_theme_additional"
              >
                Регистрация
              </Button>
              <Button
                elemType="link"
                link="/sign-in"
                className="button button_theme_main"
              >
                Войти
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
