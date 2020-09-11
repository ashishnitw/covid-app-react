import React, { useState, useEffect } from 'react';

import { fetchCountryList } from '../api/corona-lmao-ninja';

const Countries = ({ handleCountryChange, allCountryData }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountryList());
    };
    fetchAPI();
  }, []);

  return (
    <form className="country-picker">
      <div className="form-group align-items-center">
        <div className="col-auto my-3 text-left">
          <label for="countryselect">Select country:</label>
          <select className="form-control" name="countryselect" id="countryselect" onChange={(e) => handleCountryChange(e.target.value)}>
            <option value="">Global</option>
            {countries.sort().map((country, i) => <option key={i} value={country}>{country}</option>)}
          </select>
        </div>
      </div>
    </form>
  );
};

export default Countries;
