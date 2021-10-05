import React from "react";

const Navigation = () => {
  return (
      <nav className= "nav-body flex-row">
        <div className="nav-item"><a href="home">About Me</a></div>
        <div className="nav-item"><a href="portfolio">Portfolio</a></div>
        <div className="nav-item"><a href="contact">Contact</a></div>
        <div className="nav-item"><a href="resume">Resume</a></div>
      </nav>
  );
};

export default Navigation;
