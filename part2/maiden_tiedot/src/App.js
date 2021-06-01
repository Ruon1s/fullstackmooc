import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Countries from './components/Countries';
import SingleCountry from './components/SingleCountry'


const App = () => {
  const [filter, setFilter] = useState('');
  const [countries, setCountries] = useState([]);
  const [shownCountries, setShownCountries] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const url = 'https://restcountries.eu/rest/v2/all'
    const response = await axios.get(url);
    console.log('response', response)
    setCountries(response.data);
  }

  const handleFilterChange = (event) => {
  setFilter(event.target.value);
  console.log(event.target.value);
  console.log(countries.filter(country => country.name.includes(event.target.value)));
  if(filter !== ''){
  setShownCountries(countries.filter(country => country.name.toUpperCase().includes(event.target.value.toUpperCase())));
  } else {
    setShownCountries(countries);
  }
  };

  const setSingle = (country) => {
    console.log('country', country)
    setShownCountries([country]);
    console.log('shownCountrylength', shownCountries.length)
  };


  return(
  <div>
  <Filter value={filter} onChangeText={handleFilterChange} />
  {shownCountries.length > 10 && <p>Too many matches, specify another filter</p>}
  {shownCountries.length > 1 && shownCountries.length < 10 && shownCountries.map(country => <Countries key={country.name} countries={country} onPress={setSingle}/>)} 
  {shownCountries.length === 1 && <SingleCountry country={shownCountries}/> }
  {shownCountries.length === 0 && <p>No matches, try editing your filter</p>}
  </div>
  );
}

export default App;
