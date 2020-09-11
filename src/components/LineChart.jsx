import React from 'react';
import { Line } from 'react-chartjs-2';

const LineChart = ({ data: { cases, active, recovered, deaths, updated }, country, allCountryData }) => {

  allCountryData = allCountryData.sort().slice(0, 10)

  const LineChartChart = (
    active ? (
      <Line
        data={{
          labels: allCountryData.map(countryData => countryData.country),
          datasets: [
            {
              label: 'People',
              backgroundColor: allCountryData.map(countryData => '#FF6384'),
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
      {LineChartChart}
    </div>
  );
};

export default LineChart;
