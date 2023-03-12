import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Search from "./Search";
import Filter from "./Filter";
import CountryCard from "./CountryCard";


function App() {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="App">
      <Header />
      <Search />
      <Filter />
      {data.map((country) => (
        <CountryCard key={country} country={country} />
      ))}
    </div>
  );
}

export default App;
