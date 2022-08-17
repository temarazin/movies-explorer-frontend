import SectionTitle from "../../common/SectionTitle/SectionTitle";
import Stages from "../Stages/Stages";

import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about__inner">
        <SectionTitle className="section-title">О проекте</SectionTitle>
        <div className="about__description-wrapper">
          <div className="about__description-item">
            <h3 className="about__description-title">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about__description-text">
              Составление плана, работу над бэкендом, вёрстку, добавление
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about__description-item">
            <h3 className="about__description-title">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about__description-text">
              У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <Stages className="stages about__stages">
          <li className="stages__item" width="20%">
            <span className="stages__label stages__label_color_green">1 неделя</span>
            <p className="stages__name">Back-end</p>
          </li>
          <li className="stages__item">
            <span className="stages__label stages__label_color_dark">4 недели</span>
            <p className="stages__name">Front-end</p>
          </li>
        </Stages>
      </div>
    </section>
  );
}

export default About;
