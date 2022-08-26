import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";
import Preloader from "../Preloader/Preloader";

import "./MoviesCardList.css";

function MoviesCardList({ isUserMovies = false, films, isLoading }) {

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__inner">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            <ul className="movies-card-list__cards">
              {films.map((item) => (
                <li className="movies-card-list__item" key={item.id}>
                  <MoviesCard
                    onlyRemove={isUserMovies}
                    data={item}
                  />
                </li>
              ))}
            </ul>
            <Button className="button button_theme_more movies-card-list__linkmore">
              Еще
            </Button>
          </>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
