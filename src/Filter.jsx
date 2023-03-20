import React from "react";

const Filter = (props) => {
  const handleFilterChange = (event) => {
    props.setFilterInput(event.target.value);
  };
  return (
    <div className="container-region-filter">
      <select
        className="region-select"
        id="filterByRegion"
        onChange={handleFilterChange}
      >
        <option value="" selected>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Oceania</option>
      </select>
    </div>
  );
};

export default Filter;
