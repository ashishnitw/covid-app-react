import React from 'react';
import CountUp from 'react-countup';

const CountryTable = ({ allCountryData }) => {
  const countryRows = allCountryData.slice(0, 10).map((countryData, i) => {
    return (
      <tr key={countryData.country}>
        <th scope="row"><img alt={countryData.country} src={countryData.countryInfo.flag} style={{maxWidth: '24px'}}></img></th>
        <td>{countryData.country}</td>
        <td><CountUp start={0} end={countryData.cases} duration={1.2} separator="," /></td>
        <td><CountUp start={0} end={countryData.recovered} duration={1.2} separator="," /></td>
        <td><CountUp start={0} end={countryData.deaths} duration={1.2} separator="," /></td>
      </tr>
    )
  })
  return (
    <div className="country-table">
      <table className="table table-hover small">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Country</th>
            <th scope="col">Confirmed</th>
            <th scope="col">Recovered</th>
            <th scope="col">Deaths</th>
          </tr>
        </thead>
        <tbody>
          {countryRows}
        </tbody>
      </table>
    </div>
  );
};
export default CountryTable;
