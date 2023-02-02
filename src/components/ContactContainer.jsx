import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import instagramLogo from "../images/Instagram_logo_2016.svg.png";
import mailLogo from "../images/Mail.svg.png";
import twitterLogo from "../images/Twitter-logo.svg.png";
import "../stylesheets/ContactContainer.css";

const ContactContainer = () => {
  const instagramUrl = "https://www.instagram.com/slrwitha1/?hl=en";
  return (
    <Container fluid>
      <Row>
        <Col>
          <a href={instagramUrl} rel="noreferrer">
            <img className="logos" src={instagramLogo} alt="insta" />
          </a>
        </Col>
        <Col>
          <img className="logos" src={twitterLogo} alt="twitter" />
        </Col>
        <Col>
          <img className="logos" src={mailLogo} alt="email" />
        </Col>
      </Row>
    </Container>
  );
};

export default ContactContainer;
