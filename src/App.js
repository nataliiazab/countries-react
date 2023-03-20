import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Search from "./Search";
import Filter from "./Filter";
import CountryCard from "./CountryCard";
import Footer from "./Footer";

function App() {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [filterInput, setFilterInput] = useState("");

  const getData = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  // Filter the data based on search input and filter region
  const searchedData = data.filter((country) => {
    const nameMatch =
      country.name.common.toLowerCase().indexOf(searchInput.toLowerCase()) !==
      -1;
    const regionMatch =
      filterInput === "" ||
      country.region.toLowerCase() === filterInput.toLowerCase();
    if (country.capital) {
      const capitalMatch =
        country.capital[0].toLowerCase().indexOf(searchInput.toLowerCase()) !==
        -1;
      return nameMatch & regionMatch || capitalMatch & regionMatch;
    }
    return nameMatch & regionMatch;
  });

  return (
    <div className="App">
      <Header />
      <div className="search-and-filter">
        <Search setSearchInput={setSearchInput} searchInput={searchInput} />
        <Filter setFilterInput={setFilterInput} />
      </div>
      <div className="card-container">
        {searchedData.map((country) => {
          console.log(country);
          return <CountryCard key={country.cca3} country={country} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
