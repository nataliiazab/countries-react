import React from "react";

const CountryCard = ({ country }) => {
  return (
    <div className="country-card">
      <img src={country.flags.svg} width="400px" alt={country.flags.alt} />
      <h1>{country.name.common}</h1>
      <p>Population: {country.population}</p>
      <p>Region: {country.region}</p>
      <p>Capital: {country.capital}</p>
    </div>
  );
};

export default CountryCard;
