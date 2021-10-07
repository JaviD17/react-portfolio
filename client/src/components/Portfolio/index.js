import React, { useState } from "react";
import SingleProject from "../SingleProject";
// import deepThoughts from "../../utils/photos/deep-thoughts.jpg";
// import reactPortfolio from "../../utils/photos/react-portfolio.jpg";


const Portfolio = () => {
  const [categories] = useState([
    {
      title: "React Portfolio",
      alt: "Portofolio made in react",
      // src: "/images/react-portfolio.jpg",
      src: "react-portfolio",
      link: "https://github.com/JaviD17/react-portfolio",
    },
    {
      title: "Deep Thoughts",
      alt: "Social media application",
      // src: "/images/deep-thoughts.jpg",
      src: "deep-thoughts",
      link: "https://github.com/JaviD17/deep-thoughts",
    },
    {
      title: "Photo Port",
      alt: "React application",
      // src: "/images/react-application.jpg",
      src: "photo-port",
      link: "https://javid17.github.io/photo-port/",
    },
    {
        title: "Social Network API",
        alt: "Social Network",
        // src: "/images/social-network-api.jpg",
        src: "social-network-api",
        link: "https://github.com/JaviD17/social-network-api"
    },
    {
        title: "Regex Tutorial",
        alt: "Regex",
        // src: "/images/regex.jpg",
        src: "regex-tutorial",
        link: "https://github.com/JaviD17/regex-tutorial"
    }
  ]);

  return (
    <div className="portfolio-container">
      <div className="portfolio-title-container">
        <h2 className="portfolio-title">My Portfolio</h2>
      </div>
      <div className="portfolio-project-container">
        {categories.map((category, index) => (
          <SingleProject
            categories={categories}
            index={index}
            key={category.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
