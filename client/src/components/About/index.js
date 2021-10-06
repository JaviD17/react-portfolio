import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-icon">
        <FontAwesomeIcon icon={faUserCircle} /> Javier Dominguez II
      </div>
      <p className="about-text">
        I am a developer with a MERN stack seeking a career in software
        development to further my programming knowledge. My interest is in back
        end, however, my goal is to continue my education in both front end and
        back end technologies to further my comprehension and ability to execute
        any project I am given or set out to do.
      </p>
    </div>
  );
};

export default About;
