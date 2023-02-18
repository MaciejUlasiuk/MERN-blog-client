import { Link } from "react-router-dom";
import "./aboutme.css";
const AboutMe = () => {
  return (
    <>
      <div className="bgTop"></div>
      <div className="about-wrapper">
        <section className="leftAbout">
          <div className="margin-bottom">
            <h1>Maciej Ułasiuk</h1>
            <h2>Front-end developer</h2>
          </div>

          <p>
            21-year-old on a mission to become a skilled programmer and create
            innovative software solutions. Driven and motivated, constantly
            seeking out new challenges and opportunities to grow as a programmer
            and a person.
          </p>

          <Link to={"/contact"}>
            <button>Hire me.</button>
          </Link>
        </section>
        <section className="rightAbout">
          <div className="bgBottom">
            <div className="blob"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutMe;
