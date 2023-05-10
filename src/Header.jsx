import React from "react";

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
            {darkMode ? (
              <img
                src="https://www.vhv.rs/dpng/d/0-3029_sun-icon-transparent-background-hd-png-download.png"
                alt="Light Mode"
                className="dark-mode-icon"
              />
            ) : (
              <img
                src="https://cdn.icon-icons.com/icons2/1674/PNG/512/moon_111148.png"
                alt="Dark Mode"
                className="dark-mode-icon"
              />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
