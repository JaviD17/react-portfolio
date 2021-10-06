import React from "react";
import SingleProject from "../SingleProject";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-title-container">
        <h2 className="portfolio-title">My Portfolio</h2>
      </div>
      <div className="portfolio-project-container">
        <SingleProject />
        <SingleProject />
        <SingleProject />
        <SingleProject />
        <SingleProject />
        <SingleProject />
      </div>
    </div>
  );
};

export default Portfolio;
