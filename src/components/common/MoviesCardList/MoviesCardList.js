import { useState, useEffect } from "react";

import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";
import Preloader from "../Preloader/Preloader";
import useWindowDimensions from "../../../utils/hooks/useWindowDimensions";

import "./MoviesCardList.css";

function MoviesCardList({ isUserMovies = false, films, isLoading }) {
  const { width: windowWidth } = useWindowDimensions();
  const [filmsPerLoad, setFilmsPerLoad] = useState(0);
  const [filmsCount, setFilmsCount] = useState(0);

  useEffect(() => {
    if (windowWidth > 960) {
      setFilmsPerLoad(4);
    } else if (windowWidth > 768) {
      setFilmsPerLoad(3);
    } else if (windowWidth > 480) {
      setFilmsPerLoad(2);
    } else {
      setFilmsPerLoad(5);
    }
  }, [windowWidth]);

  useEffect(() => {
    if (filmsPerLoad !== 0) {
      setFilmsCount(Math.floor(filmsCount / filmsPerLoad) * filmsPerLoad + filmsPerLoad);
    }
  }, [filmsPerLoad]);

  function handleMoreBtn() {
    setFilmsCount(filmsCount + filmsPerLoad);
  }

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__inner">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            {films.length === 0 && <p className="movies-card-list__no-results">Ничего не найдено</p>}
            <ul className="movies-card-list__cards">
              {films.slice(0, filmsCount).map((item) => (
                <li className="movies-card-list__item" key={item.id}>
                  <MoviesCard onlyRemove={isUserMovies} data={item} />
                </li>
              ))}
            </ul>
            {filmsCount < films.length && (
              <Button
                className="button button_theme_more movies-card-list__linkmore"
                onClick={handleMoreBtn}
              >
                Еще
              </Button>
            )}
          </>
        )}
      </div>
    </section>
  );
}

export default MoviesCardList;
