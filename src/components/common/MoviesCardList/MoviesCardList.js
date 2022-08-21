import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";

import "./MoviesCardList.css";

function MoviesCardList() {
  // temporary data
  const cardsCount = 17;

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__inner">
        <ul className="movies-card-list__cards">
          {Array.apply(null, Array(cardsCount)).map((item, i) => (
            <li className="movies-card-list__item">
              <MoviesCard key={i} />
            </li>
          ))}
        </ul>
        <Button className="button button_theme_more movies-card-list__linkmore">Еще</Button>
      </div>
    </section>
  );
}

export default MoviesCardList;
