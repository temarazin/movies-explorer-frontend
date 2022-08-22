import Header from "../../Header/Header";
import Content from "../../Content/Content";
import Footer from "../../Footer/Footer";
import SearchForm from "../../common/SearchForm/SearchForm";
import MoviesCardList from "../../common/MoviesCardList/MoviesCardList";
import Preloader from "../../common/Preloader/Preloader";

import "./SavedMovies.css";

function SavedMovies(props) {
  const { loggedIn = false } = props;
  let loadingMovies = false;
  console.log(loggedIn);
  return (
    <>
      <Header className="header header_theme_dark" loggedIn={loggedIn} />
      <Content>
        <SearchForm />
        {loadingMovies ? <Preloader /> : <MoviesCardList isUserMovies={true}></MoviesCardList>}
      </Content>
      <Footer />
    </>
  );
}

export default SavedMovies;
