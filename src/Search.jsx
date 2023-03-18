import React from "react";

const Search = (props) => {

 const handleInputChange = (e) => {
   props.setSearchInput(e.target.value);
 };


  return (
    <div className="search-container">
      <img
        className="search-icon"
        src="https://icon-library.com/images/search-bar-magnifying-glass-icon/search-bar-magnifying-glass-icon-19.jpg"
        alt="magnifying glass "
      />

      <input
        className="search-input"
        type="search"
        placeholder="Search for a country.."
        onChange={handleInputChange}
        value={props.searchInput}
      />
    </div>
  );
};

export default Search;
