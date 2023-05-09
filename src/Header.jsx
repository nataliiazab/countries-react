import React, { useState } from "react";

const Header = ({ darkMode, setDarkMode }) => {

  return (
    <header>
      <div className="header">
        <p className="header-left">Where in the world?</p>
        <div className="header-right">
          <button
            className="dark-mode-button"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? "Light Mode" : "Dark Mode"}
            
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
