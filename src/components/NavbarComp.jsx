import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../stylesheets/NavbarComp.css";

const NavbarComp = () => {
  return (
    <Navbar className="navbar-cus" bg="light" variant="light" fixed="top">
      <Container>
        <Navbar.Brand className="site-name" href="/">
          Angel's Podcast
        </Navbar.Brand>
        <Nav className="navtext">
          <Nav.Link className="navtext" href="#about">
            About
          </Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComp;
