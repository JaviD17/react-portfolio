import React from "react";

const Navigation = ({ homeSelected, setHomeSelected }) => {
  return (
    <nav className="nav-body flex-row">
      <div className="nav-item">
        <a href="#about" onClick={() => setHomeSelected(true)}>
          About Me
        </a>
      </div>
      <div className="nav-item">
        <a href="#portfolio" onClick={() => setHomeSelected(true)}>Portfolio</a>
      </div>
      <div className="nav-item">
        <a href="#contact" onClick={() => setHomeSelected(false)}>Contact</a>
      </div>
      <div className="nav-item">
        <a href="#resume">Resume</a>
      </div>
    </nav>
  );
};

export default Navigation;
