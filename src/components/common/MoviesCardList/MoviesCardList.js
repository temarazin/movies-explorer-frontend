import { useState, useEffect } from "react";

import useWindowDimensions from "../../../utils/hooks/useWindowDimensions";
import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";
import Preloader from "../Preloader/Preloader";

import "./MoviesCardList.css";

function MoviesCardList({
  isUserMovies = false,
  films,
  savedFilms,
  isLoading,
  isNoResult,
  onSaveFilm,
  onRemoveFilm,
}) {
  const { width: windowWidth } = useWindowDimensions();
  const [filmsPerLoad, setFilmsPerLoad] = useState(0);
  const [filmsCount, setFilmsCount] = useState(0);
  const [filmMinItems, setFilmMinItems] = useState(16);

  useEffect(() => {
    if (filmsPerLoad !== 0) {
      setFilmsCount(
        Math.max(
          Math.floor(filmsCount / filmsPerLoad) * filmsPerLoad + filmsPerLoad,
          filmMinItems
        )
      );
    }
  }, [filmsPerLoad]);

  useEffect(() => {
    if (windowWidth > 960) {
      setFilmsPerLoad(4);
      setFilmMinItems(16)
    } else if (windowWidth > 768) {
      setFilmsPerLoad(3);
      setFilmMinItems(12)
    } else if (windowWidth > 480) {
      setFilmsPerLoad(2);
      setFilmMinItems(8)
    } else {
      setFilmsPerLoad(5);
      setFilmMinItems(5)
    }
  }, [windowWidth]);

  const handleMoreFilms = () => {
    setFilmsCount(filmsCount + filmsPerLoad);
  };

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__inner">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            {isNoResult && (
              <p className="movies-card-list__no-results">Ничего не найдено</p>
            )}
            <ul className="movies-card-list__cards">
              {films.slice(0, filmsCount).map((item) => (
                <li className="movies-card-list__item" key={item.movieId}>
                  <MoviesCard
                    onlyRemove={isUserMovies}
                    data={item}
                    savedMovie={savedFilms.find(
                      (savedItem) => savedItem.movieId === item.movieId
                    )}
                    onLike={onSaveFilm}
                    onDislike={onRemoveFilm}
                  />
                </li>
              ))}
            </ul>
            {filmsCount < films.length && (
              <Button
                className="button button_theme_more movies-card-list__linkmore"
                onClick={handleMoreFilms}
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
