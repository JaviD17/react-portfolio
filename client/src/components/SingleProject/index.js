import React from "react";
// import deepThoughts from "../../assets/photos/deep-thoughts.jpg";
// import reactPortfolio from '../../assets/photos/react-portfolio.jpg';
// import reactApplication from '../../utils/photos/react-application';

const SingleProject = ({ categories, index }) => {
//   console.log(categories);

  return (
    <div className="single-project-container">
      <div className="single-project-card">
        <img src={`${categories[index].src}`} alt={`${categories[index].alt}`} />
        <div className="single-project-card-details">
          <p className="single-project-caption">{categories[index].title}</p>
          <a
            className="single-project-link"
            href={`${categories[index].link}`}
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
