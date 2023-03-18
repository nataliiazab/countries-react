import React from "react";

const Search = (props) => {

 const handleInputChange = (e) => {
   props.setSearchInput(e.target.value);
 };


  return (
    <div className="search-container">
      <img
        className="search-icon"
        src="https://assets.stickpng.com/images/585e4ae1cb11b227491c3393.png"
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
