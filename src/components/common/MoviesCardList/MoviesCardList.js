import { useEffect, useState } from "react";

import MoviesCard from "../MoviesCard/MoviesCard";
import Button from "../Button/Button";
import { moviesApi } from "../../../utils/constants";

import "./MoviesCardList.css";

function MoviesCardList({ isUserMovies = false }) {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi.getMovies().then((res) => setMovies(res));
  }, []);

  return (
    <section className="movies-card-list">
      <div className="movies-card-list__inner">
        <ul className="movies-card-list__cards">
          {movies.map((item) => (
            <li className="movies-card-list__item">
              <MoviesCard key={item.id} onlyRemove={isUserMovies} data={item} />
            </li>
          ))}
        </ul>
        <Button className="button button_theme_more movies-card-list__linkmore">
          Еще
        </Button>
      </div>
    </section>
  );
}

export default MoviesCardList;
