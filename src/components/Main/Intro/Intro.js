import Button from "../../Button/Button";

import './Intro.css';

function Intro() {
  return (
    <section className="intro">
      <div className="intro__inner">
        <h1 className="intro__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className="intro__subtitle">
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <Button className="button button_theme_more intro__linkmore">Узнать больше</Button>
      </div>
    </section>
  );
}

export default Intro;
