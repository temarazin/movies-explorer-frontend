import Header from '../../Header/Header';
import Content from '../../Content/Content';
import Footer from "../../Footer/Footer";

import './Movies.css';

function Movies(props) {
  const { loggedIn = false } = props;
  console.log(loggedIn);
  return (
    <>
      <Header className="header header_theme_dark" loggedIn={loggedIn} />
      <Content>

      </Content>
      <Footer />
    </>
  );
}

export default Movies;
