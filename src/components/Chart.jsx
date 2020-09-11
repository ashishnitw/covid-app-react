import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';

const Chart = ({ data: { cases, active, recovered, deaths, updated }, country }) => {

  const barChart = (
    active ? (
      <Bar
        data={{
          labels: ['Confirmed', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['#36A2EB', '#71B37C', '#FF6384'],
              data: [cases, recovered, deaths],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country || 'World'}` },
        }}
      />
    ) : null
  );

  const doughnutChart = (
    active ?
    (
      <Doughnut
        data={{
          labels: ['Active', 'Recovered', 'Deaths'],
          datasets: [
            {
              label: 'People',
              backgroundColor: ['#36A2EB', '#71B37C', '#FF6384'],
              data: [Math.round(active*100/cases), Math.round(recovered*100/cases), Math.round(deaths*100/cases)],
            },
          ],
        }}
        options={{
          legend: { display: false },
          title: { display: true, text: `Current state in ${country || 'World'}` },
        }}
      />
    ) : null
  )



  return (
    <div className="chart">
      {barChart}
      {doughnutChart}
    </div>
  );
};

export default Chart;
