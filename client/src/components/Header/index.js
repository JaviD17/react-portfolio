import React from "react";
import Navigation from "../Navigation";

const Header = () => {
  return (
    <header className="header-container">
      <div className="header-body flex-row">
        <h1 id="home" className="header-title primary-color">Javier's Portfolio</h1>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
