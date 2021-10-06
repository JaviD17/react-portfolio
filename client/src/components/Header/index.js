import React from "react";
import Navigation from "../Navigation";

const Header = ({ homeSelected, setHomeSelected }) => {
  return (
    <header className="header-container">
      <div className="header-body flex-row">
        <a href="/">
          <h1 className="header-title primary-color">Javi's Portfolio</h1>
        </a>
        <Navigation
          homeSelected={homeSelected}
          setHomeSelected={setHomeSelected}
        />
      </div>
    </header>
  );
};

export default Header;
