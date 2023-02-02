import { Image } from "react";
import bImage from "../images/breakfastclub.png";
import "../stylesheets/ImageComp.css";

const ImageComp = () => {
  return (
    <div>
      <img className="main-image" src={bImage} />
    </div>
  );
};

export default ImageComp;
