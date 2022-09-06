import { useState, useEffect } from "react";

import { mainApi } from "../../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";
import Preloader from "../Preloader/Preloader";
import useWindowDimensions from "../../../utils/hooks/useWindowDimensions";

import "./MoviesCardList.css";

function MoviesCardList({ isUserMovies = false, films, isLoading, onShowMsg }) {
  const { width: windowWidth } = useWindowDimensions();
  const [filmsPerLoad, setFilmsPerLoad] = useState(0);
  const [filmsCount, setFilmsCount] = useState(0);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    mainApi
      .getMovies()
      .then((res) => {
        setSavedMovies(res);
        console.log(res);
      })
      .catch((e) => {
        onShowMsg({ text: e, type: "error" });
      });
  }, []);

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
      setFilmsCount(
        Math.floor(filmsCount / filmsPerLoad) * filmsPerLoad + filmsPerLoad
      );
    }
  }, [filmsPerLoad]);

  function handleMoreBtn() {
    setFilmsCount(filmsCount + filmsPerLoad);
  }

  function handleLike(data) {
    mainApi
      .addMovie(data)
      .then((movie) => {
        setSavedMovies([...savedMovies, movie]);
      })
      .catch((e) => {
        onShowMsg({ text: e, type: "error" });
      });
  }

  function handleDislike(movieId) {
    mainApi
      .deleteMovie(movieId)
      .then(() => {
        setSavedMovies(savedMovies.filter((item) => item._id !== movieId));
      })
      .catch((e) => {
        onShowMsg({ text: e, type: "error" });
      });
  }

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__inner">
        {isLoading ? (
          <Preloader />
        ) : (
          <>
            {films.length === 0 && (
              <p className="movies-card-list__no-results">Ничего не найдено</p>
            )}
            <ul className="movies-card-list__cards">
              {films.slice(0, filmsCount).map((item) => (
                <li className="movies-card-list__item" key={item.movieId}>
                  <MoviesCard
                    onlyRemove={isUserMovies}
                    data={item}
                    savedMovie={savedMovies.find(savedItem => savedItem.movieId === item.movieId)}
                    onLike={handleLike}
                    onDislike={handleDislike}
                  />
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
