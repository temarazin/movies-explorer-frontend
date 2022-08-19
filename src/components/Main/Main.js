import Header from "../Header/Header";
import Intro from "./Intro/Intro";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Footer from "../Footer/Footer";

function Main() {
  return (
    <>
      <Header />
      <main className="main">
        <Intro />
        <AboutProject />
        <Techs />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}

export default Main;
