import Intro from './Intro/Intro';
import AboutProject from './About/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';

function Main() {
  return (
    <main className="main">
      <Intro />
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
  );
}

export default Main;
