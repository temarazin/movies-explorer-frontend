import Header from "../../Header/Header";
import Content from "../../Content/Content";
import Intro from "./Intro/Intro";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Footer from "../../Footer/Footer";

import './Main.css';

function Main() {
  return (
    <>
      <Header />
      <Content>
        <Intro />
        <AboutProject />
        <Techs />
        <AboutMe />
      </Content>
      <Footer />
    </>
  );
}

export default Main;
