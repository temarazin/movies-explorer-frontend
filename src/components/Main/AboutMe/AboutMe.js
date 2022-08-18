import SectionTitle from "../../common/SectionTitle/SectionTitle";

import "./AboutMe.css";
import fotoImage from "../../../images/foto.jpg";

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me__inner">
        <SectionTitle className="section-title">Студент</SectionTitle>
        <article className="about-me__bio">
          <div className="about-me__description">
            <h3 className="about-me__name">Артём</h3>
            <p className="about-me__about">Веб-разработчик, 32 года</p>
            <p className="about-me__history">
              Я родился в Волгограде, но живу в городе Коломна. Работаю в
              Корпоративном Университете Московского Образования разработчиком
              Битрикс. Пошел учиться в Яндекс.Практикум, потому что хочу
              двигаться дальше в направлении фронт-энда.
            </p>
            <ul className="about-me__social">
              <li className="about-me__social-item">
                <a
                  href="https://www.linkedin.com/in/artem-malyshev-4b96aa89/"
                  className="about-me__social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="about-me__social-item">
                <a
                  href="https://github.com/temarazin"
                  className="about-me__social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li className="about-me__social-item">
                <a
                  href="https://gitlab.com/temarazin"
                  className="about-me__social-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitLab
                </a>
              </li>
            </ul>
          </div>
          <img src={fotoImage} alt="Артём Малышев" className="about-me__foto" />
        </article>
        <div className="about-me__portfolio">
          <h3 className="about-me__header">Портфолио</h3>
          <ul className="about-me__portfolio-list">
            <li className="about-me__portfolio-item">
              <a
                href="https://github.com/temarazin/how-to-learn"
                className="about-me__portfolio-link"
                target="_blank"
                rel="noreferrer"
              >
                Статичный сайт
              </a>
            </li>
            <li className="about-me__portfolio-item">
              <a
                href="https://temarazin.github.io/russian-travel/"
                className="about-me__portfolio-link"
                target="_blank"
                rel="noreferrer"
              >
                Адаптивный сайт
              </a>
            </li>
            <li className="about-me__portfolio-item">
              <a
                href="https://temarazin.nomoredomains.xyz/sign-in"
                className="about-me__portfolio-link"
                target="_blank"
                rel="noreferrer"
              >
                Одностраничное приложение
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
