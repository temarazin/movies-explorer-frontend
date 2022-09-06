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

  const handleSearchMovies = async (query) => {
    setIsLoading(true);

    if (!films.current.length > 0) {
      const getFilms = await moviesApi.getMovies();
      const formattedFilms = getFilms.map(formatMovieData);
      films.current = formattedFilms;
      storage.setItem("films", formattedFilms);
    }

    setResultFilms([
      ...films.current.filter((item) => {
        return item.nameRU.toLowerCase().includes(query.toLowerCase());
      }),
    ]);
    setIsLoading(false);
  };

  return (
    <>
      <Header
        className="header header_theme_dark"
        loggedIn={loggedIn}
        activeItem="movies"
      />
      <Content>
        <SearchForm onSearch={handleSearchMovies} />
        <MoviesCardList films={resultFilms} isLoading={isLoading} onShowMsg={onShowMsg} />
      </Content>
      <Footer />
    </>
  );
}

export default Movies;
