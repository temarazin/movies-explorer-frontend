import Header from "../../Header/Header";
import Content from "../../Content/Content";
import Footer from "../../Footer/Footer";
import SearchForm from "../../common/SearchForm/SearchForm";
import MoviesCardList from "../../common/MoviesCardList/MoviesCardList";
import Preloader from "../../common/Preloader/Preloader";

import "./Movies.css";

function Movies(props) {
  const { loggedIn = false } = props;
  let loadingMovies = false;
  console.log(loggedIn);
  return (
    <>
      <Header className="header header_theme_dark" loggedIn={loggedIn} />
      <Content>
        <SearchForm />
        {loadingMovies ? <Preloader /> : <MoviesCardList></MoviesCardList>}
      </Content>
      <Footer />
    </>
  );
}

export default Movies;
