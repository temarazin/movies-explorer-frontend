import { useState } from "react";

import Header from "../../Header/Header";
import Content from "../../Content/Content";
import Footer from "../../Footer/Footer";
import SearchForm from "../../common/SearchForm/SearchForm";
import MoviesCardList from "../../common/MoviesCardList/MoviesCardList";

import { filterFilms } from "../../../utils/helper";
import "./SavedMovies.css";

function SavedMovies({ loggedIn, savedFilms, onRemoveFilm, onShowMsg }) {
  const [isLoading, setIsLoading] = useState(false);
  const [resultFilms, setResultFilms] = useState(savedFilms);
  const [noResult, setNoResult] = useState(false);

  const handleSearchMovies = (params) => {
    setIsLoading(true);

    const result = savedFilms.filter((item) => {
      return filterFilms(item, params);
    });

    setResultFilms(result);
    setNoResult(result.length === 0);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  };

  return (
    <>
      <Header
        className="header header_theme_dark"
        loggedIn={loggedIn}
        activeItem="savedMovies"
      />
      <Content>
        <SearchForm
          isSavedMoviesPage={true}
          onSearch={handleSearchMovies}
          onShowMsg={onShowMsg}
        />
        <MoviesCardList
          isUserMovies={true}
          films={resultFilms}
          savedFilms={savedFilms}
          isLoading={isLoading}
          isNoResult={noResult}
          onRemoveFilm={onRemoveFilm}
          onShowMsg={onShowMsg}
        />
      </Content>
      <Footer />
    </>
  );
}

export default SavedMovies;
