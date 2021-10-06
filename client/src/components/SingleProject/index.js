import React from "react";
import deepThoughts from "../../utils/photos/deep-thoughts.jpg";

const SingleProject = () => {
  return (
    <div className="single-project-container">
      <div className="single-project-card">
        <img src={deepThoughts} alt="deep-thoughts-project" />
        <div className="single-project-card-details">
          <p className="single-project-caption">Deep Thoughts</p>
          <a className="single-project-link" href="https://javid17.github.io/photo-port/">View Project</a>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
