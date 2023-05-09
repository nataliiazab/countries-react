import React from "react";

const CountryCard = ({ country}) => {
  return (
    <div className="country-card">
      <div className="container-flag">
        {" "}
        <img
          className="flag-image"
          src={country.flags.svg}
          alt={country.flags.alt}
        />
      </div>
      <div className="container-country-info">
        <h1>{country.name.common}</h1>
        <p>
          <b>Population:</b> {country.population.toLocaleString("en-US")}
        </p>
        <p>
          <b>Region:</b> {country.region}
        </p>
        <p>
          <b>Capital:</b> {country.capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
