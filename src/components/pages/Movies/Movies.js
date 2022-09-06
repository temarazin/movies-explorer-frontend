import { useState } from "react";

import Header from "../../Header/Header";
import Content from "../../Content/Content";
import Footer from "../../Footer/Footer";
import SearchForm from "../../common/SearchForm/SearchForm";
import MoviesCardList from "../../common/MoviesCardList/MoviesCardList";
import { moviesApi } from "../../../utils/constants";

import "./Movies.css";
import { storage, formatMovieData } from "../../../utils/helper";

function Movies({ loggedIn, films, onShowMsg }) {
  const [isLoading, setIsLoading] = useState(false);
  const [resultFilms, setResultFilms] = useState([]);

  const handleSearchMovies = async (params) => {
    const { searchQuery, includeShorts } = params;
    setIsLoading(true);

    if (!films.current.length > 0) {
      const getFilms = await moviesApi.getMovies();
      const formattedFilms = getFilms.map(formatMovieData);
      films.current = formattedFilms;
      storage.setItem("films", formattedFilms);
    }

    setResultFilms([
      ...films.current.filter((item) => {
        let result = false;
        result = result || item.nameRU.toLowerCase().includes(searchQuery.toLowerCase());
        result = result || item.nameEN.toLowerCase().includes(searchQuery.toLowerCase());
        if (!includeShorts) {
          result = result && item.duration >= 40;
        }
        return result;
      }),
    ]);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <Header
        className="header header_theme_dark"
        loggedIn={loggedIn}
        activeItem="movies"
      />
      <Content>
        <SearchForm onSearch={handleSearchMovies} onShowMsg={onShowMsg} />
        <MoviesCardList films={resultFilms} isLoading={isLoading} onShowMsg={onShowMsg} />
      </Content>
      <Footer />
    </>
  );
}

export default Movies;
