import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const HBar = ({ data: { cases, active, recovered, deaths, updated }, country, allCountryData }) => {

  allCountryData = allCountryData.sort().slice(0, 10)

  const hBarChart = (
    active ? (
      <HorizontalBar
        data={{
          labels: allCountryData.map(countryData => countryData.country),
          datasets: [
            {
              label: 'People',
              backgroundColor: allCountryData.map(countryData => '#FF6384'),
              // backgroundColor: 'rgba(255,99,132,0.2)',
              // borderColor: 'rgba(255,99,132,1)',
              // borderWidth: 1,
              // hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              // hoverBorderColor: 'rgba(255,99,132,1)',
              // backgroundColor: '#EC932F',
              data: allCountryData.map(countryData => countryData.cases),
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Top countries` },
        }}
      />
    ) : null
  );

  

  return (
    <div className="chart">
      {hBarChart}
    </div>
  );
};

export default HBar;
