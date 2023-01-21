import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./components/CarouselComp";
import NavbarComp from "./components/NavbarComp";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Card";

const App = () => {
  return (
    <div className="App">
      <div className="main-navbar">
        <NavbarComp />
      </div>
      <div className="main-caro">
        <Carousel />
      </div>
      <div className="abtme-background">
        <div className="abt-container">
          <div className="about-me">
            <AboutMe />
          </div>
        </div>
      </div>
      <div className="contact-container">
        <Contact />
      </div>
    </div>
  );
};

export default App;
