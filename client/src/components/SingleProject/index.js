import React from "react";
import deepThoughts from "../../assets/photos/deep-thoughts.jpg";
import reactPortfolio from "../../assets/photos/react-portfolio.jpg";
import reactApplication from "../../assets/photos/react-application.jpg";
import socialNetwork from "../../assets/photos/social-network-api.jpg";
import regexTutorial from "../../assets/photos/regex.jpg";

const SingleProject = ({ categories, index }) => {
  //   console.log(categories);
  // src={`${categories[index].src}`}

  return (
    <div className="single-project-container">
      <div className="single-project-card">
        {categories[index].src === "react-portfolio" && (
          <img src={reactPortfolio} alt={`${categories[index].alt}`} />
        )}
        {categories[index].src === "deep-thoughts" && (
          <img src={deepThoughts} alt={`${categories[index].alt}`} />
        )}
        {categories[index].src === "photo-port" && (
          <img src={reactApplication} alt={`${categories[index].alt}`} />
        )}
        {categories[index].src === "social-network-api" && (
          <img src={socialNetwork} alt={`${categories[index].alt}`} />
        )}
        {categories[index].src === "regex-tutorial" && (
          <img src={regexTutorial} alt={`${categories[index].alt}`} />
        )}
        <div className="single-project-card-details">
          <p className="single-project-caption">{categories[index].title}</p>
          <a className="single-project-link" href={`${categories[index].link}`}>
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
