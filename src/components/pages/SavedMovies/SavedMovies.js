import Header from "../../Header/Header";
import Content from "../../Content/Content";
import Footer from "../../Footer/Footer";
import SearchForm from "../../common/SearchForm/SearchForm";
import MoviesCardList from "../../common/MoviesCardList/MoviesCardList";

import "./SavedMovies.css";

function SavedMovies(props) {
  const { loggedIn = false } = props;
  console.log(loggedIn);
  return (
    <>
      <Header
        className="header header_theme_dark"
        loggedIn={loggedIn}
        activeItem="savedMovies"
      />
      <Content>
        <SearchForm />
          <MoviesCardList isUserMovies={true} />
      </Content>
      <Footer />
    </>
  );
}

export default SavedMovies;
