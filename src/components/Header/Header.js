import Button from '../Button/Button';

import './Header.css';
import logoImage from '../../images/logo.svg';

function Header() {
  return (
      <header className="header">
        <div className="header__inner">
          <img src={logoImage} alt="" className="logo" />
          <div className="header__account">
            <Button className="button button_theme_additional">Регистрация</Button>
            <Button className="button button_theme_main">Войти</Button>
          </div>
        </div>
      </header>
  );
}

export default Header;
