import { useState, useEffect } from "react";

import Header from "../../Header/Header";
import Content from "../../Content/Content";
import Footer from "../../Footer/Footer";
import SearchForm from "../../common/SearchForm/SearchForm";
import MoviesCardList from "../../common/MoviesCardList/MoviesCardList";
import { moviesApi } from "../../../utils/constants";

import "./Movies.css";
import { filterFilms, formatMovieData, storage } from "../../../utils/helper";

function Movies({
  loggedIn,
  films,
  savedFilms,
  onSaveFilm,
  onRemoveFilm,
  onShowMsg,
  setFilmsDb,
  setSearchParams,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [resultFilms, setResultFilms] = useState([]);
  const [outputFilms, setOutputFilms] = useState([]);
  const [noResult, setNoResult] = useState(false);
  const [includeShorts, setIncludeShorts] = useState(
    storage.getItem("searchParams").includeShorts || false
  );

  const handleSearchMovies = async (params) => {
    setIsLoading(true);

    let curFilmsDb;

    if (!films.length > 0) {
      const getFilms = await moviesApi.getMovies();
      const formattedFilms = getFilms.map(formatMovieData);
      setFilmsDb(formattedFilms);
      storage.setItem("films", formattedFilms);
      curFilmsDb = formattedFilms;
    } else {
      curFilmsDb = films;
    }

    const result = curFilmsDb.filter((item) => {
      return filterFilms(item, params);
    });

    setResultFilms(result);
    setNoResult(result.length === 0);
    setSearchParams(params);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (includeShorts) {
      setOutputFilms(resultFilms.filter((item) => item.duration <= 40));
    } else {
      setOutputFilms(resultFilms.filter((item) => item.duration > 40));
    }
  }, [includeShorts, resultFilms]);

  return (
    <>
      <Header
        className="header header_theme_dark"
        loggedIn={loggedIn}
        activeItem="movies"
      />
      <Content>
        <SearchForm
          onSearch={handleSearchMovies}
          onShowMsg={onShowMsg}
          includeShorts={includeShorts}
          setIncludeShorts={setIncludeShorts}
          restoreSearch={true}
        />
        <MoviesCardList
          films={outputFilms}
          savedFilms={savedFilms}
          isLoading={isLoading}
          isNoResult={noResult}
          onShowMsg={onShowMsg}
          onSaveFilm={onSaveFilm}
          onRemoveFilm={onRemoveFilm}
        />
      </Content>
      <Footer />
    </>
  );
}

export default Movies;
