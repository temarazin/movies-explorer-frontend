import { Link } from "react-router-dom";

import Button from "../common/Button/Button";
import HeaderNav from "./HeaderNav/HeaderNav";

import "./Header.css";
import logoImage from "../../images/logo.svg";

function Header(props) {
  const { loggedIn = false } = props;


  const { className } = props;
  return (
    <header className={className || "header"}>
      <div className="header__inner">
        <div className="header__column">
          <Link to="/" className="header__logo-link">
            <img src={logoImage} alt="" className="header__logo" />
          </Link>
          {loggedIn &&
            <HeaderNav />
          }
        </div>
        <div className="header__account">
          <Button className="button button_theme_additional">
            Регистрация
          </Button>
          <Button className="button button_theme_main">Войти</Button>
        </div>
      </div>
    </header>
  );
}

export default Header;
