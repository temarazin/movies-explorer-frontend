import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__about">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </p>
        <div className="footer__panel">
          <p className="footer__copyright">© {new Date().getFullYear()}</p>
          <ul className="footer__menu">
            <li className="footer__menu-item">
              <a
                href="https://practicum.yandex.ru/"
                className="footer__menu-link"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__menu-item">
              <a
                href="https://github.com/temarazin"
                className="footer__menu-link"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li className="footer__menu-item">
              <a
                href="https://www.linkedin.com/in/artem-malyshev-4b96aa89/"
                className="footer__menu-link"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
