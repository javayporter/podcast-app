import "../stylesheets/AboutMe.css";

const AboutMe = () => {
  const aboutMeDetails =
    "Eventbrite is a global self-service ticketing platform for live experiences that allows anyone to create, share, find and attend events that fuel their passions and enrich their lives. From music festivals, marathons, conferences, community rallies, and fundraisers, to gaming competitions and air guitar contests. Our mission is to bring the world together through live experiences.";
  return (
    <div>
      <h4>{aboutMeDetails}</h4>
    </div>
  );
};

export default AboutMe;
