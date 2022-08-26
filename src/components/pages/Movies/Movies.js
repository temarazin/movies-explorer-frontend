import { useState } from "react";

import Header from "../../Header/Header";
import Content from "../../Content/Content";
import Footer from "../../Footer/Footer";
import SearchForm from "../../common/SearchForm/SearchForm";
import MoviesCardList from "../../common/MoviesCardList/MoviesCardList";
import { moviesApi } from "../../../utils/constants";

import "./Movies.css";
import { storage } from "../../../utils/helper";

function Movies({ loggedIn, films }) {
  const [isLoading, setIsLoading] = useState(false);
  const [resultFilms, setResultFilms] = useState([]);

  const handleSearchMovies = async (query) => {
    setIsLoading(true);

    if (!films.current.length > 0) {
      const getFilms = await moviesApi.getMovies();
      films.current = getFilms;
      storage.setItem("films", getFilms);
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
        <MoviesCardList films={resultFilms} isLoading={isLoading} />
      </Content>
      <Footer />
    </>
  );
}

export default Movies;
