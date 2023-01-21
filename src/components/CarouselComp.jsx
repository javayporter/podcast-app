import Carousel from "react-bootstrap/Carousel";
import "../stylesheets/CarouselComp.css";

function CarouselComp() {
  const img1 =
    "https://pbblogassets.s3.amazonaws.com/uploads/2019/10/21144131/podcast-cover.jpg";
  const img2 =
    "https://bloximages.newyork1.vip.townnews.com/insideradio.com/content/tncms/assets/v3/editorial/8/16/81648ea0-6503-11ea-97b0-6bfe712197ff/5e6b425c8f6bc.image.jpg";
  const img3 =
    "https://gray-wbtv-prod.cdn.arcpublishing.com/resizer/SmMZygD1L6i2_sKMIiw7lsRizco=/1200x675/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/UQIF2UNU75BOFOEBDQ4PTJIBNI.webp";

  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComp;
