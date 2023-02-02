import logo from "../images/bfclogo.png";
import "../stylesheets/Logo.css";

const Logo = () => {
  return (
    <div>
      <div>
        <img src={logo} alt="company-logo" />
      </div>
    </div>
  );
};

export default Logo;
