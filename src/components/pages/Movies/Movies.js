import Header from '../../Header/Header';
import Content from '../../Content/Content';
import Footer from "../../Footer/Footer";
import SearchForm from '../../common/SearchForm/SearchForm';

import './Movies.css';

function Movies(props) {
  const { loggedIn = false } = props;
  console.log(loggedIn);
  return (
    <>
      <Header className="header header_theme_dark" loggedIn={loggedIn} />
      <Content>
        <SearchForm />
      </Content>
      <Footer />
    </>
  );
}

export default Movies;
