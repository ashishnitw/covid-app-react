import React, { useState, useEffect } from 'react';

import { fetchCountryList } from '../api/corona-lmao-ninja';

const CountryFilter = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountryList());
    };
    fetchAPI();
  }, []);

  let countryList = countries.map(country => {
    return (
      <a href="#" className="list-group-item list-group-item-action">{country}</a>
    )
  })

  return (
    <form classNameName="country-picker">
      <input type="text" className="form-control" placeholder="Enter country"></input>
      <div className="list-group">
        {countryList} 
      </div>
    </form>
  );
};

export default CountryFilter;
