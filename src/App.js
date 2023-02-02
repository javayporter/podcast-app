import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "./components/CarouselComp";
import NavbarComp from "./components/NavbarComp";
import AboutMe from "./components/AboutMe";
import ContactContainer from "./components/ContactContainer";
import Logo from "./components/Logo";
import ImageComp from "./components/ImageComp";

const App = () => {
  return (
    <div className="App">
      <div className="main-navbar">
        <NavbarComp />
      </div>
      <div className="body-without-nav">
        <div className="main-logo">
          <Logo />
        </div>
        <div className="main-image">
          <ImageComp />
        </div>
        <div className="abtme-background">
          <div className="abt-container">
            <div className="about-me">
              <AboutMe />
            </div>
          </div>
        </div>
        <div className="contact-container">
          <ContactContainer />
        </div>
      </div>
    </div>
  );
};

export default App;
